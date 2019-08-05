/**
  * Please import Three.min.js and ImageLoader.js from https://threejs.org/ before using this.
  *
  * @author Rafael Chen
  *
  * Description:
  *   An image voxelizer for Three.js environment.
  *   Turning 2D image(.jpg/.png) to THREE.Mesh and adding it to your scene
  *
  * Usage:
  *   var img3D = new voxelIMG();
  *   img3D.set(backgroundColor, height, width, thickness, resolution, seperate, mycontext, canvasHeight, canvasWidth);
  *
  *   img3D.voxelize(
  *
  *     reader.result,
  *
  *     function(geometry, pieceAmount){
  *       for(var i=0; i<geometry.length; i++){
  *         var mesh = new THREE.Mesh( geometry[i], new THREE.MeshStandardMaterial() );
  *         scene.add(mesh);
  *       }
  *       alert(pieceAmount);
  *     });
  *
  * The generated geometry type will be THREE.BufferGeometry
*/


function voxelIMG() {

  this.backgroundColor = "white";
  this.colorSplit = "no";
  this.sizeH = 10; // cm
  this.sizeW = 10; // cm
  this.thickness = 10; // cm
  this.resolution = 80; // pixel
  this.seperate = "no";
  this.puzzle = "no";
  // canvas size setting is not necessary
  this.context = null;
  this.canvasHeight = null;
  this.canvasWidth = null;

  this.voxelAmount = 0;
  this.pieceAmount;
  this.maxHeight = 0;
  this.minHeight = 0;
  this.geometry;
}

voxelIMG.prototype = {

  set: function(color, sizeH, sizeW, thickness, resolution, colorSplit, photoSeperate, puzzlePic, canvasContext, canvasHeight, canvasWidth){
    if(color && sizeH && sizeW && thickness && resolution){

      this.backgroundColor = color;
      this.sizeH = sizeH;
      this.sizeW = sizeW;
      this.thickness = thickness;
      this.resolution = resolution;

      if(colorSplit){
        this.colorSplit = colorSplit;
      }
      if(photoSeperate){
        this.seperate = photoSeperate;
      }
      if(puzzlePic){
        this.puzzle = puzzlePic;
      }
      if(canvasContext){
        this.context = canvasContext;
      }
      if(canvasHeight){
        this.canvasHeight = canvasHeight;
      }
      if(canvasWidth){
        this.canvasWidth = canvasWidth;
      }

    } else{
      slert("Color, sizeH, sizeW, thickness, resolution are required when you use voxelIMG.set()");
    }
  },

  voxelize: function(url, callbackGeometry){

    var color = this.backgroundColor,
        backSplit = this.colorSplit,
        sizeH = Number(this.sizeH),
        sizeW = Number(this.sizeW),
        thickness = Number(this.thickness),
        resolution = Number(this.resolution),
        photoSeperate = this.seperate,
        puzzle = this.puzzle;
        canvasContext = this.context,
        canvasH = Number(this.canvasHeight),
        canvasW = Number(this.canvasWidth);

        this.maxHeight = thickness,
        this.minHeight = 3;

    var imgLoader = new THREE.ImageLoader();

    var lineGeometry = [], cutGeometry = [], finalGeometry = [];
    var pieceAmount = 0;

    // remap算法
    function remap(x, inMin, inMax, outMin, outMax){
      var xPosition = Math.abs(x-inMin); // 指定數值與開頭述職的差 (必須是絕對值)
      var output = outMin + xPosition * (outMax-outMin) / Math.abs(inMax-inMin);
      return output;
      // 關於原來的數值帶的運算都需用絕對值 因單純是看指定值是落在原區間的哪裡 故無需考慮正負
      // 而output出來的值則不同 因為需要精準的計算出值 故須考慮正負
      // 若 outMax < outMin，則算式會帶著負號，在加回outMin時會讓數據正確
    }

    // load a image resource
    imgLoader.load(
    	// resource URL ex: 'img/test.jpg',
      url,

    	// onLoad callback
    	function ( image ) {
    		// use the image, e.g. draw part of it on a canvas
        // drawImage(picture-data, x-transition, y-transition, x-size, y-size)
        if(canvasContext && canvasH && canvasW){
          canvasContext.drawImage( image, 0, 0, canvasH, canvasW );
        }

    		var hiddenCanvas = document.createElement( 'canvas' ); //這個canvas是看不到的 純粹用來計算
        var hiddenContext = hiddenCanvas.getContext('2d');
        var imageData, resolutionX, resolutionY, voxelSize;

        if(sizeH > sizeW){ // resolution為大的那一方 小的那一方為resolution*比值
          resolutionY = resolution;
          resolutionX = Math.floor( (sizeW/sizeH) * resolution );
        }
        if(sizeH < sizeW){
          resolutionX = resolution;
          resolutionY = Math.floor( (sizeH/sizeW) * resolution );
        }
        if(sizeH == sizeW){
          resolutionX = resolution;
          resolutionY = resolution;
        }
        hiddenContext.drawImage( image, 0, 0, resolutionX, resolutionY ); // 這邊的 realResolution 目的在於設定相片的像素長寬
        imageData = hiddenContext.getImageData(0, 0, resolutionX, resolutionY);

        var greyScaleData = []; // 抓出每個pixel的灰階數據
        for(var i=0; i<imageData.data.length; i+=4){
          // 轉灰階數據 RGB的平均就是灰階數據
          var greyScale = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
          greyScaleData.push(greyScale);
        }

        this.voxelAmount = greyScaleData.length;

        var blocks = [];
        // var vertex = [];
        // var vertexBottom = [];
        // var points = [];
        var moveX, moveY; //宣告每個voxel的位移參數
        voxelSize = sizeW*10 / resolutionX; //每個voxel的長與寬 單位mm
        // remap灰階數據 + 方塊生長/移動

        for(var i=0; i<greyScaleData.length; i++){
          var blockHeight;
          if(color == "white"){
            if(backSplit == "no"){
              blockHeight = remap(greyScaleData[i], 0, 255, thickness, 3);
            } else if(backSplit == "yes"){
              if(greyScaleData[i] > 225){
                blockHeight = remap(greyScaleData[i], 0, 255, 5, 3);
              }
              else{
                blockHeight = remap(greyScaleData[i], 0, 255, thickness, thickness*0.5);
              }
            }
          }
          else{
            // blockHeight = remap(greyScaleData[i], 0, 255, 3, thickness);
            // 若要做出背景與主體的分離
            if(backSplit == "no"){
              blockHeight = remap(greyScaleData[i], 0, 255, 3, thickness);
            } else if(backSplit == "yes"){
              if(greyScaleData[i] < 30){
                blockHeight = remap(greyScaleData[i], 0, 255, 3, 5);
              }
              else{
                blockHeight = remap(greyScaleData[i], 0, 255, thickness*0.5, thickness);
              }
            }
          }

          blocks[i] = new THREE.BoxGeometry( voxelSize, blockHeight, voxelSize ); //BoxGeomoetry本身已經有face(可merge的實體)，故不需再做轉換

          // 直接用除以每行pixel數的方式得到餘數跟結果
          moveX = i % resolutionX;
          moveY = parseInt(i / resolutionX); //取整數

          // 照順序移動每個boxGeometry
          // Y參數(在畫面中為Z方向)也需移動 blockHeight/2 來做到歸零(同一個平面)
          blocks[i].translate(moveX*voxelSize, blockHeight/2, moveY*voxelSize);


          // vertex[i] = new THREE.Vector3(moveX*voxelSize, blockHeight, moveY*voxelSize);
          // points.push(vertex[i]);
          // vertexBottom[i] = new THREE.Vector3(moveX*voxelSize, 0, moveY*voxelSize);
          // points.push(vertexBottom[i]);
        }
        // 單純把全部的voxel都merge成同一塊
        // merge all units into one object
        if(photoSeperate == "no"){
          var singleGeometry = new THREE.Geometry();
          for(var i=0; i<blocks.length; i++){
            singleGeometry.merge(blocks[i]);
          }
          singleGeometry.mergeVertices();
          singleGeometry.verticesNeedUpdate = true;
          var bufferGeometry = new THREE.BufferGeometry().fromGeometry( singleGeometry );
          bufferGeometry.name = "3dPhoto";

          // var singleGeometry = new THREE.ConvexGeometry( points );
          // singleGeometry.name = "3dPhoto";
          // finalGeometry.push(singleGeometry);

          finalGeometry.push(bufferGeometry);
          pieceAmount = pieceAmount + 1;
        }

        // 增加把照片分成10x10方塊的程式 (可以單獨控制每一塊)
        // 分成 橫 與 豎 來做merge
        if(photoSeperate == "yes"){
          var goemetryNum = 0;
          var objectPerLine = [];
          var voxelLengthOfOneBlock = Math.round(resolutionX / 10); //若要自訂分成幾塊 從這個參數下手

          // 首先做橫向merge
          function mergeBlocksAsLines( newI ){
            for(var i=newI; i<blocks.length; i+=voxelLengthOfOneBlock){
              lineGeometry[goemetryNum] = new THREE.Geometry();
              var lineBreak, newIfactor;
              for(var j=i; j < i+voxelLengthOfOneBlock; j++){
                lineGeometry[goemetryNum].merge(blocks[j]);

                if( (j+1) % resolutionX == 0 ){
                  // 到一橫排的最末端時break; (從0開始所以j要加一)
                  lineBreak = "break";
                  newIfactor = j+1;
                  // 結束一排之後，最後一塊的位置不一定有完全merge到 (下一個 i) 之前的所有block
                  // 所以換排時時也重新再執行一次整個 for loop (重設初始值為 這排最後一個+1 也就是 j+1)
                  objectPerLine.push(goemetryNum);
                  // 藉由objectPerLine[0]+1可得知每排有多少個 (9 or 10)
                  break;
                }
              }
              goemetryNum = goemetryNum+1;
              if(lineBreak == "break"){
                mergeBlocksAsLines( newIfactor );
                break;
              }
            }
          }
          // 在一個row結束後會需要重設最頂部的 for loop 初始值
          // 故寫成一個 function 來調用並重放初始值
          mergeBlocksAsLines( 0 );

          // 接著做縱向merge
          goemetryNum = 0; // 將goemetryNum歸零再使用
          var objectsPerRow = objectPerLine[0]+1; // 真實的每排lineGeometry數量
          for(var i=0; i<lineGeometry.length; i++){
            if(lineGeometry[i]){ // 確認不會重覆到已經被merge的資料
              cutGeometry[goemetryNum] = new THREE.Geometry();
              for(var j=i; j < i+voxelLengthOfOneBlock * objectsPerRow; j+=objectsPerRow){
                cutGeometry[goemetryNum].merge(lineGeometry[j]);
                // 消除掉  配合if(lineGeometry[i]) 確認不會重覆到已經被merge的資料
                lineGeometry[j] = null;
              }
              goemetryNum = goemetryNum+1;
            }
          }

          for(var i=0; i<cutGeometry.length; i++){
            cutGeometry[i].mergeVertices();
            cutGeometry[i].verticesNeedUpdate = true;

            // make 10*10 puzzle
            if(puzzle == "yes"){
              var xMove = 2*(objectsPerRow - i % objectsPerRow);
              var yMove = 2*(objectsPerRow - i / objectsPerRow);
              cutGeometry[i].translate(-xMove, 0, -yMove);
            }
            // puzzle move finish

            var bufferGeometry = new THREE.BufferGeometry().fromGeometry( cutGeometry[i] );
            bufferGeometry.name = "3dPhoto";

            finalGeometry.push(bufferGeometry);
            pieceAmount = pieceAmount + 1;
          }
        }

        this.geometry = finalGeometry;
        this.pieceAmount = pieceAmount;

        if( typeof callbackGeometry === "function" ){
          callbackGeometry(this.geometry, this.pieceAmount);
        } else{
          alert("Callback element is not a Function type!");
        }

        alert("Successfully voxelized! Each voxel is " + voxelSize + "mm" + " * " + voxelSize + "mm");

    	},

    	// onProgress callback currently not supported
    	function(){
      },

    	// onError callback
    	function (e) {
    		alert("Error happened! Please refresh this page and try again!");
  	  }
    );
    return this;
  }
};
