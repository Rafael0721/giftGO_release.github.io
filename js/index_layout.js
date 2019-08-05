// UI part
// mode btn
var square = document.getElementById("mode_cube");
var circular = document.getElementById("mode_circular");
var cut = document.getElementById("mode_cut");
var hollow_1 = document.getElementById("mode_hollow_1");
var hollow_2 = document.getElementById("mode_hollow_2");
var hollow_3 = document.getElementById("mode_hollow_3");

// group btn
var group_square = document.getElementById("menuGroup1");
var group_circular = document.getElementById("menuGroup2");
var group_cut = document.getElementById("menuGroup3");
var group_hollow_1 = document.getElementById("menuGroup4");
var group_hollow_2 = document.getElementById("menuGroup5");
var group_hollow_3 = document.getElementById("menuGroup6");

//會跑版的版本
// square.addEventListener("click", function(){
//   menuGroup2.className = "col-md-6 menuGroup2 position-absolute";
//   menuGroup1.className = "col-md-6 menuGroup";
//   square.className = "modeMenu-icon-up";
//   circular.className = "modeMenu-icon-down";
// });

function modeAllDown(){
  square.className = "modeMenu-icon-down";
  circular.className = "modeMenu-icon-down";
  cut.className = "modeMenu-icon-down";
  hollow_1.className = "modeMenu-icon-down";
  hollow_2.className = "modeMenu-icon-down";
  hollow_3.className = "modeMenu-icon-down";
}

// mode switching
var switchDelayTime = 300; // 這數字必須大於css中 menuGroup-hide 的執行時間，否則太早變成absolute會造成瞬間的跑版
square.addEventListener("click", function(){
  //用if來判定當下是暗著的
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_square.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    square.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_square.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});

circular.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_circular.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    circular.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_circular.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});

cut.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_cut.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    cut.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_cut.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});

hollow_1.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_hollow_1.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    hollow_1.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_hollow_1.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});

hollow_2.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_hollow_2.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    hollow_2.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_hollow_2.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});

hollow_3.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup-show")[0];
  if(group_hollow_3.className === "menuGroup menuGroup-hide menuGroup-abs"){
    group_light.className = "menuGroup menuGroup-hide";
    modeAllDown();
    hollow_3.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("menuGroup-abs");
      group_hollow_3.className = "menuGroup menuGroup-show";
    }, switchDelayTime);
  }
});


// 改變視窗大小時再做檢查
// window.onresize = function(event){
//   webGLRenderer.setSize(window.innerWidth, (window.innerHeight*0.8));
//   camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight*0.8), 1, 10000);
// };

var historyText = [];

var timerM = 0;
var timerS = 0;
var t;
t = setTimeout(timerCount, 1000);
function timerCount(){
  timerS = timerS+1;
  if(timerS == 60){
    timerM = timerM+1;
    timerS = 0;
  }
  t = setTimeout(timerCount, 1000);
}

//3d part
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();
var renderHeight = window.innerHeight * 0.8;
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / renderHeight, 1, 10000);
var webGLRenderer = new THREE.WebGLRenderer();
var displayLoader = document.getElementById("loader");
var status = "complete";
//關閉.autoClear方法讓多個scene並存
webGLRenderer.autoClear = false;
webGLRenderer.setClearColor(0xEEEEEE);
webGLRenderer.setSize(window.innerWidth, renderHeight);
camera.position.x = 150;
camera.position.y = 50;
camera.position.z = 150;
camera.lookAt(scene.position);
var controls = new THREE.OrbitControls( camera, webGLRenderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.3;
controls.enableZoom = true;
document.getElementById("container").appendChild(webGLRenderer.domElement);
var axes = new THREE.AxisHelper(10);
axes.rotation.x = -Math.PI / 2; //z軸朝上
scene2.add(axes);
window.addEventListener("mousemove", onMouseMove, true );

//設定光源
addShadowedLight( 1, 1, 1, 0xffffff, 1 );
addShadowedLight( 0.5, 1, -1, 0xffaa00, 0.8 );
function addShadowedLight( x, y, z, color, intensity ) {
  var directionalLight = new THREE.DirectionalLight( color, intensity );
  directionalLight.position.set( x, y, z );
  scene.add( directionalLight );
  directionalLight.castShadow = true;
  var d = 1;
  directionalLight.shadow.camera.left = -d;
  directionalLight.shadow.camera.right = d;
  directionalLight.shadow.camera.top = d;
  directionalLight.shadow.camera.bottom = -d;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 4;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.bias = -0.002;
}

//grid ground
var gridSize = 200;
var gridDivisions = 20;
var gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
//gridHelper.material.color = new THREE.Color( 0x3b3b3b);
gridHelper.material.opacity = 0.3;
gridHelper.material.transparent = true;
scene2.add( gridHelper );

// var light = new THREE.PointLight( 0xff0000, 1, 200 );
// light.position.set( 50, 50, 50 );
// scene.add( light );

//loading the STL file from computer
var loader = new THREE.STLLoader();
//array & variables counting the mesh
var mesh = [];
var hidden = [];
var ini = 0;
function readSTL(event){
  if(mergeSwitch){
    var files;
    var reader = new FileReader();
    if(event.target.files){
      files = event.target.files;
    }
    else{
      files = event.dataTransfer.files;
    }
    if(files[0]){
      reader.readAsDataURL(files[0]);
    }
    reader.onload = function(event){
      var fileName = files[0].name;
      var pointPosition = fileName.lastIndexOf("."); //获取最后一个.的位置
      var fileType = fileName.substr(pointPosition+1); //获取后缀

      if(fileType == "stl" || fileType == "STL"){
        loader.load(reader.result, function (geometry) {
        var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
        mesh[ini] = new THREE.Mesh(geometry, mat);
        mesh[ini].scale.set(1, 1, 1);
        scene.add(mesh[ini]);
        hidden[ini] = mesh[ini].clone();
        //mesh[ini].add(hidden[ini]);
        // var box = new THREE.BoxHelper( mesh[ini], 0xffff00 );
        // scene2.add( box );

        historyText.push('read_STL');

        ini = ini+1;
        num = num+1;
            });
      }
      else{
        alert("Only .stl data is accepted! Please try again!");
      }

    }
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
}

// loading FAV from local
function cubeTypeAllGrey(){
  document.getElementById("fav_mode_cube").className = "voxel-import-icon-down";
  document.getElementById("fav_mode_circular").className = "voxel-import-icon-down";
  document.getElementById("fav_mode_cut").className = "voxel-import-icon-down";
  document.getElementById("fav_mode_hollow_1").className = "voxel-import-icon-down";
  document.getElementById("fav_mode_hollow_2").className = "voxel-import-icon-down";
  document.getElementById("fav_mode_hollow_3").className = "voxel-import-icon-down";
}

var cubeType4FAV;
document.getElementById("fav_mode_cube").addEventListener("click", function(){
  cubeType4FAV = "stl/single/cube.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_cube").className = "voxel-import-icon";
});
document.getElementById("fav_mode_circular").addEventListener("click", function(){
  cubeType4FAV = "stl/single/circular.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_circular").className = "voxel-import-icon";
});
document.getElementById("fav_mode_cut").addEventListener("click", function(){
  cubeType4FAV = "stl/single/cut.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_cut").className = "voxel-import-icon";
});
document.getElementById("fav_mode_hollow_1").addEventListener("click", function(){
  cubeType4FAV = "stl/single/hollow_1.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_hollow_1").className = "voxel-import-icon";
});
document.getElementById("fav_mode_hollow_2").addEventListener("click", function(){
  cubeType4FAV = "stl/single/hollow_2.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_hollow_2").className = "voxel-import-icon";
});
document.getElementById("fav_mode_hollow_3").addEventListener("click", function(){
  cubeType4FAV = "stl/single/hollow_3.stl";
  cubeTypeAllGrey();
  document.getElementById("fav_mode_hollow_3").className = "voxel-import-icon";
});


function readFAV(event) {
  document.getElementById("cancelImportFAV").click();
  var files;
  var voxelSize = 10;
  var reader = new FileReader();
  var favLoader = new THREE.FAVLoader();

  if (event.target.files) {
    files = event.target.files;
  } else {
    files = event.dataTransfer.files;
  }

  if (files[0]) {
    reader.readAsDataURL(files[0]);
  }

  reader.onload = function() {
    var fileName = files[0].name;
    var pointPosition = fileName.lastIndexOf(".");
    var fileType = fileName.substr(pointPosition + 1);

    if(fileType == "fav") {
      loader.load(cubeType4FAV, function (geometry) {
        geometry.name = "single";

        favLoader.load(reader.result, function (volumeList) {
          // for (var voxels of volumeList) {
            for (var i = 0; i < volumeList[0].data.length; i++) {
              var material = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
              var cube = new THREE.Mesh(geometry, material);
              var pos = volumeList[0].data[i];
              cube.position.set(pos[0] * voxelSize, pos[2] * voxelSize, pos[1] * voxelSize);
              cube.castShadow = true;
        			cube.receiveShadow = true;
              scene.add(cube);

              historyText.push('read_FAV');

              num += 1;
              Bnum += 1;
            }
          // }
        });
      });
    }
    else{
      alert("File format is wrong! Please try again!");
    }
  }
}

//menu icon switch
var mergeSwitch = "on";
// 定義drop();
// 把drop拉出來定義的好處: 在一個還沒跑到底時就按另一個的話前一個也不會途中停止
// 因為一開始把mesh[ini]放進 mesh 裡面後，就一直使用他，在還沒跑完就按另一個也不會因為重放mesh[ini]  ini = ini+1而導致前一個停掉
function dropDown(mesh, peak){
    mesh.geometry.computeBoundingBox();
    if(mesh.geometry.name == "snake"){
      // > peak + 3 為安全值 若只有 > peak 則某些情況會出現誤判
      if(mesh.geometry.boundingBox.min.y > 1 && mesh.geometry.boundingBox.min.y > peak+3 && mesh.geometry.boundingBox.min.y+10 > peakHeight4snake+3){
        mesh.geometry.translate(0, -10, 0);

        function drop() {
          // 這邊丟入的object就是最初丟進dropDown()裡面的mesh[ini]，即使瞬間ini增加了這邊的mesh[ini]也不改變，還是原來那個
          dropDown(mesh, peak);
        }

        setTimeout(drop, 50);
      }
      else if(mesh.geometry.boundingBox.min.y > 1){
        // 為了讓rotation維持在同一狀態
        // drop()執行後 須讓geometry緊貼3軸 (因為mesh旋轉的狀態取決於其geometry與3軸當下的狀態)
        mesh.geometry.translate(0, -10, 0);
        mesh.translateY(10); // 抵銷 下降geometry 對於mesh在畫面上的影響
        function drop() {
          // 這邊丟入的object就是最初丟進dropDown()裡面的mesh[ini]，即使瞬間ini增加了這邊的mesh[ini]也不改變，還是原來那個
          dropDown(mesh, peak);
        }
        // setTimeout(drop, 5);
        drop();
      }
    }
    else{
      if(mesh.geometry.boundingBox.min.y > 1 && mesh.geometry.boundingBox.min.y > peak+3){
        mesh.geometry.translate(0, -10, 0);

        function drop() {
          // 這邊丟入的object就是最初丟進dropDown()裡面的mesh[ini]，即使瞬間ini增加了這邊的mesh[ini]也不改變，還是原來那個
          dropDown(mesh, peak);
        }

        setTimeout(drop, 50);
      }
      else if(mesh.geometry.boundingBox.min.y > 1){
        // 為了讓rotation維持在同一狀態
        // drop()執行後 須讓geometry緊貼3軸 (因為mesh璇奘的狀態取決於其geometry與3軸當下的狀態)
        mesh.geometry.translate(0, -10, 0);
        mesh.translateY(10); // 抵銷 下降geometry 對於mesh在畫面上的影響
        function drop() {
          // 這邊丟入的object就是最初丟進dropDown()裡面的mesh[ini]，即使瞬間ini增加了這邊的mesh[ini]也不改變，還是原來那個
          dropDown(mesh, peak);
        }
        // setTimeout(drop, 5);
        drop();
      }
    }
}

Array.prototype.max = function(){
  var max = this[0];
  for(var i=1; i<this.length; i++){
    if(max < this[i]){
      max = this[i];
    }
  }
  return max;
}

// 為了在dropDown時做collision test 用的 整體 geometry
var allGeometry;
var peakHeight = 0; // scene中無物 故整體高度初始值為零
var peakHeight4snake = 10;
const objectHeight = 80;

function mergeToFindThePeak(){
  allGeometry = new THREE.Geometry();
  for(var i=2; i<scene.children.length; i++){
    // 3d相片與voxel模型數據太大 每次都merge會拖慢太多速度
    if(scene.children[i].geometry.name != "3dPhoto" && scene.children[i].geometry.name != "voxelModel"){
      // 需先判斷scene中的物件屬於哪種geometry 若本身已經是Geometry()類型，再執行THREE.Geometry().fromBufferGeometry() 就會出錯 導致無法執行
      if(scene.children[i].geometry.type == "BufferGeometry"){
        var geo = new THREE.Geometry().fromBufferGeometry(scene.children[i].geometry);
      }
      else{ // voxelized stl 是設定成Geometry型態 // 其他型態如:TextGeometry也是屬於有實體的geometry型態 可以直接merge
        var geo = scene.children[i].geometry;
      }

      // 移動時是設定移動mesh，geometry還停留在import進來的位置，updateMatrix()之後才會跟上現在mesh的位置
      scene.children[i].updateMatrix();
      allGeometry.merge(geo, scene.children[i].matrix);
    }
  }
  //console.log(singleGeometry.vertices);
  allGeometry.mergeVertices();
  allGeometry.verticesNeedUpdate = true;
}

function findThePeak(objectGeometry){
  mergeToFindThePeak();

  var coveredPoints = [], coveredPoints4snake = [];
  switch (objectGeometry.name) {
    case "cube":
      // 先找出再覆蓋範圍的點的Y值
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(-10 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 10 && -10 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      // 再找出其中的最大值
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
        // peakHeight = coveredPoints[0];
        // for(var i=1; i<coveredPoints.length; i++){
        //   if(coveredPoints[i] > peakHeight){
        //     peakHeight = coveredPoints[i];
        //   }
        // }
      }
      break;
    case "seven":
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 30 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
      }
      break;
    case "tShape":
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 30 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
      }
      break;
    case "stick":
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 10 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
      }
      break;
    case "cover":
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 10 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
      }
      break;
    case "single":
      for(var i=0; i<allGeometry.vertices.length; i++){
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 10 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length > 0){
        peakHeight = coveredPoints.max();
      }
      break;
    case "snake":
      for(var i=0; i<allGeometry.vertices.length; i++){
        // 此處的 x 必須是取0~19 而不是0~20 否則會取到錯誤的點
        if(0 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 19 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints.push(allGeometry.vertices[i].y);
        }
        if(20 < allGeometry.vertices[i].x && allGeometry.vertices[i].x < 30 && 0 < allGeometry.vertices[i].z && allGeometry.vertices[i].z < 10){
          coveredPoints4snake.push(allGeometry.vertices[i].y);
        }
      }
      if(coveredPoints.length>0){
        peakHeight = coveredPoints.max();
      }
      if(coveredPoints4snake.length>0){
        peakHeight4snake = coveredPoints4snake.max();
      }
      break;
  }
}



//loading the default STL files
//做出單顆方塊後再直接用Letris環境疊出俄羅斯方塊，之後插入才不會產生跑位
var cube = document.getElementById("cube");
cube.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_1');
    // loader.load("stl/hide/4_4 cube_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   geometry.center();
    //   // hidden[ini].position.y = 10;
    //   geometry.name = "hidden";
    // });

    loader.load("stl/4_4 cube.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;

      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      geometry.name = "cube";
      mesh[ini] = new THREE.Mesh(geometry, mat);
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      // mesh[ini].position.y = 10;
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);

      scene.add(mesh[ini]);

      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);

      ini = ini+1;
    });
    // var 或是 function 都算是"定義式" 在JS引擎中，並非完全照順序，定義式會優先被執行(預編譯)
    // 所以若把以下定義式寫在loader.load()的外面，會比loader.load()優先被執行
    // 進而影響到mesh[ini]的填序，ini[0]將為空值(被跳過)
    // ini = ini+1;
    // num = num+1;
    // Bnum = Bnum+8;
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven = document.getElementById("seven");
seven.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_1');
    // loader.load("stl/hide/seven_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //     });
    loader.load("stl/seven.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }


  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake = document.getElementById("snake");
snake.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_1');
    // loader.load("stl/hide/snake_1_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //   // hidden[ini].parent = group;
    //   //group.add(hidden[ini]);
    //     });
    loader.load("stl/snake_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick = document.getElementById("stick");
stick.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_1');
    // loader.load("stl/hide/stick_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   // hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //   // hidden[ini].parent = group;
    //   //group.add(hidden[ini]);
    //     });
    loader.load("stl/stick.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;

      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape = document.getElementById("T");
tShape.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_1');
    // loader.load("stl/hide/T_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //   // hidden[ini].parent = group;
    //   //group.add(hidden[ini]);
    //     });
    loader.load("stl/T.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover = document.getElementById("top");
cover.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_1');
    // loader.load("stl/hide/top_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //   // hidden[ini].parent = group;
    //   //group.add(hidden[ini]);
    //     });
    loader.load("stl/top.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single = document.getElementById("single");
single.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_1');
    // loader.load("stl/hide/single_hide.stl", function (geometry) {
    //   //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
    //   var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: false, side: THREE.DoubleSide, opacity: 0});
    //   hidden[ini] = new THREE.Mesh(geometry, mat);
    //   hidden[ini].scale.set(1, 1, 1);
    //   // hidden[ini].position.y = -10;
    //   geometry.name = "hidden";
    //   // hidden[ini].parent = group;
    //   //group.add(hidden[ini]);
    //     });
    loader.load("stl/single/cube.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      // hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cube2 = document.getElementById("cube2");
cube2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_2');

    loader.load("stl/2ver/4_4_cube_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      // mesh[ini].position.y = 10;
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape2 = document.getElementById("T2");
tShape2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_2');

    loader.load("stl/2ver/T_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven2 = document.getElementById("seven2");
seven2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_2');

    loader.load("stl/2ver/seven_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake2 = document.getElementById("snake2");
snake2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_2');

    loader.load("stl/2ver/snake_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick2 = document.getElementById("stick2");
stick2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_2');

    loader.load("stl/2ver/stick_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover2 = document.getElementById("top2");
cover2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_2');

    loader.load("stl/2ver/top_2ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single2 = document.getElementById("single2");
single2.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_2');

    loader.load("stl/hide/single_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/single/circular.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cube3 = document.getElementById("cube3");
cube3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_3');

    loader.load("stl/3ver/4_4_cube_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape3 = document.getElementById("T3");
tShape3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_3');

    loader.load("stl/3ver/T_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven3 = document.getElementById("seven3");
seven3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_3');

    loader.load("stl/3ver/seven_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake3 = document.getElementById("snake3");
snake3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_3');

    loader.load("stl/3ver/snake_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick3 = document.getElementById("stick3");
stick3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_3');

    loader.load("stl/3ver/stick_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover3 = document.getElementById("top3");
cover3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_3');

    loader.load("stl/3ver/top_3ver.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single3 = document.getElementById("single3");
single3.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_3');

    loader.load("stl/hide/single_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/single/cut.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var advanceSwitch = "on";
var cube4 = document.getElementById("cube4");
cube4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/4_4_cube_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape4 = document.getElementById("T4");
tShape4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/T_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven4 = document.getElementById("seven4");
seven4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/seven_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake4 = document.getElementById("snake4");
snake4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/snake_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick4 = document.getElementById("stick4");
stick4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/stick_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover4 = document.getElementById("top4");
cover4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_4');

    advanceSwitch = "off";
    loader.load("stl/hollow_1/top_hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single4 = document.getElementById("single4");
single4.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_4');

    loader.load("stl/single/hollow_1.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cube5 = document.getElementById("cube5");
cube5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/4_4_cube_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape5 = document.getElementById("T5");
tShape5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/T_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven5 = document.getElementById("seven5");
seven5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/seven_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake5 = document.getElementById("snake5");
snake5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/snake_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick5 = document.getElementById("stick5");
stick5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/stick_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover5 = document.getElementById("top5");
cover5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_5');

    advanceSwitch = "off";
    loader.load("stl/hollow_2/top_hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single5 = document.getElementById("single5");
single5.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_5');

    loader.load("stl/single/hollow_2.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cube6 = document.getElementById("cube6");
cube6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cube_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/4_4_cube_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+8;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape6 = document.getElementById("T6");
tShape6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('tShape_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/T_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "tShape";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven6 = document.getElementById("seven6");
seven6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('seven_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/seven_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "seven";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake6 = document.getElementById("snake6");
snake6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('snake_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/snake_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "snake";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick6 = document.getElementById("stick6");
stick6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('stick_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/stick_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+4;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "stick";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover6 = document.getElementById("top6");
cover6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('cover_6');

    advanceSwitch = "off";
    loader.load("stl/hollow_3/top_hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1.5;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cover";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var single6 = document.getElementById("single6");
single6.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('single_6');

    loader.load("stl/single/hollow_3.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+1;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "single";
      mesh[ini].scale.set(1, 1, 1);
      findThePeak(geometry);
      geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);

      dropDown(mesh[ini], peakHeight);

      hidden[ini].geometry.translate(0, peakHeight, 0);
      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

// sample importing
var sample_cup = document.getElementById("sample_cup");
var sample_headphoneStand = document.getElementById("sample_headphone-stand");
var sample_penHolder = document.getElementById("sample_pen-holder");
var sample_plantPot = document.getElementById("sample_plant");
var sample_iphoneStand = document.getElementById("sample_iphone-stand");

sample_cup.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('SAMPLE_cup');

    loader.load("stl/default models/sample_cup.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+344;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cup";
      mesh[ini].scale.set(1, 1, 1);
      // findThePeak(geometry);
      // geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      // dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

sample_headphoneStand.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('SAMPLE_headphoneStand');

    loader.load("stl/default models/headphone stand_lower.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+58;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "headphoneStand_lower";
      mesh[ini].scale.set(1, 1, 1);
      // findThePeak(geometry);
      // geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);
      // dropDown(mesh[ini], peakHeight);
      ini = ini+1;

      loader.load("stl/default models/headphone stand_upper.stl", function (geometry) {
        num = num+1;
        Bnum = Bnum+60;
        var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
        mesh[ini] = new THREE.Mesh(geometry, mat);
        geometry.name = "headphoneStand_upper";
        mesh[ini].scale.set(1, 1, 1);
        // findThePeak(geometry);
        // geometry.translate(0, peakHeight + objectHeight, 0);
        scene.add(mesh[ini]);
        // dropDown(mesh[ini], peakHeight);
        ini = ini+1;
          });

        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

sample_penHolder.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('SAMPLE_penHolder');

    loader.load("stl/default models/sample_pen_holder.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+344;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "penHolder";
      mesh[ini].scale.set(1, 1, 1);
      // findThePeak(geometry);
      // geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      // dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

sample_plantPot.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('SAMPLE_plantPot');

    loader.load("stl/default models/sample_plant.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+166;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "plantPot";
      mesh[ini].scale.set(1, 1, 1);
      // findThePeak(geometry);
      // geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      // dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

sample_iphoneStand.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('SAMPLE_iphoneStand');

    loader.load("stl/default models/sample_iphone_stand.stl", function (geometry) {
      num = num+1;
      Bnum = Bnum+64;
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "iphoneStand";
      mesh[ini].scale.set(1, 1, 1);
      // findThePeak(geometry);
      // geometry.translate(0, peakHeight + objectHeight, 0);
      scene.add(mesh[ini]);

      // dropDown(mesh[ini], peakHeight);

      ini = ini+1;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

// remap算法
function remap(x, inMin, inMax, outMin, outMax){
  var xPosition = Math.abs(x-inMin); // 指定數值與開頭數值的差 (必須是絕對值)
  var output = outMin + xPosition * (outMax-outMin) / Math.abs(inMax-inMin);
  return output;
  // 關於原來的數值帶的運算都需用絕對值 因單純是看指定值是落在原區間的哪裡 故無需考慮正負
  // 而output出來的值則不同 因為需要精準的計算出值 故須考慮正負
  // 若 outMax < outMin，則算式會帶著負號，在加回outMin時會讓數據正確
}
// console.log(remap(10, 255, 0, 0, 10));
// console.log(remap(200, 0, 255, 17, 2));

// 2D 照片轉 3D 功能模組定義
var photo3dBtn = document.getElementById("picture_mode");
photo3dBtn.addEventListener("click", function(){
  if(mergeSwitch){
    historyText.push('3D_photo_function');

    photo3dBtn.dataset.target = "#photoBackColorModal";
    // 每次進入modal之前先把後面的dataset.target還原 以免本來因為 未選擇 → 按下continue (target變成"空的") → 按下close 所導致的target消失
    document.getElementById("3dImageStage1").dataset.target = "#photoSizeModal";
    document.getElementById("3dImageStage2").dataset.target = "#photoThicknessModal";
    document.getElementById("3dImageStage3").dataset.target = "#voxelResolutionModal";
  }
  else{
    photo3dBtn.dataset.target = "";
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tempStorage, tempStorage_2; // 按下continue時補償原值用

// modal也是body的一部份，所以需要另外的變數分別把這些資料存出去，否則若是按到modal之內的範圍會導致前一個modal的資料變成null
document.getElementById("body").addEventListener("click", function(){
  backgroundColor = null;
  photoSize = null;
  photoThickness = null;
  // lock = "open";
  // photoResolution與photoSeperate有預設值所以不能變成null
});

var backgroundColor, backgroundSplit, photoSizeH, photoSizeW, photoThickness, photoResolution, photoSeperate, puzzle; // 各個modal所需變數
//first stage
backgroundSplit = "no";
document.getElementById("whiteBack").addEventListener("click", function(){  setTimeout(function(){ backgroundColor = "white"; }, 100); });
document.getElementById("blackBack").addEventListener("click", function(){  setTimeout(function(){ backgroundColor = "black"; }, 100); });
document.getElementById("mixedBack").addEventListener("click", function(){  setTimeout(function(){ backgroundColor = "mixed"; }, 100); });
var natural_circle = document.getElementById("natural");
var seperate_circle = document.getElementById("seperateBack");
natural_circle.addEventListener("click", function(){
  backgroundSplit = "no";
  natural_circle.className = "sub-selection-item sub-selection-circle-pressed";
  seperate_circle.className = "sub-selection-item sub-selection-circle-released";
});
seperate_circle.addEventListener("click", function(){
  backgroundSplit = "yes";
  natural_circle.className = "sub-selection-item sub-selection-circle-released";
  seperate_circle.className = "sub-selection-item sub-selection-circle-pressed";
});
document.getElementById("photoBackColorModal").addEventListener("click", function(){
  if(backgroundColor){
    tempStorage = backgroundColor;
    backgroundColor = null;
  }
});

// second stage
var sizeC_H = document.getElementById("customSizeH");
var sizeC_W = document.getElementById("customSizeW");
document.getElementById("photoBigSize").addEventListener("click", function(){ setTimeout(function(){photoSizeH = 15; photoSizeW = 15; sizeC_H.value = null; sizeC_W.value = null;}, 100); }); // 按下去時input變回空白
document.getElementById("photoMediumSize").addEventListener("click", function(){ setTimeout(function(){photoSizeH = 10; photoSizeW = 10; sizeC_H.value = null; sizeC_W.value = null;}, 100); });
document.getElementById("photoSmallSize").addEventListener("click", function(){ setTimeout(function(){photoSizeH = 5; photoSizeW = 5; sizeC_H.value = null; sizeC_W.value = null;}, 100); });
sizeC_H.addEventListener("click", function(){ setTimeout(function(){photoSizeH = null; photoSizeW = null;}, 100); }); // 按下去時原先的選擇變為null
sizeC_W.addEventListener("click", function(){ setTimeout(function(){photoSizeH = null; photoSizeW = null;}, 100); }); // 按下去時原先的選擇變為null
document.getElementById("photoSizeModal").addEventListener("click", function(){
  if(photoSizeH && photoSizeW){
    tempStorage = photoSizeH; // 先將現有數值保留進tempStorage
    tempStorage_2 = photoSizeW; // 先將現有數值保留進tempStorage
    photoSizeH = null;
    photoSizeW = null;
  }
});

// third stage
var thicknessC = document.getElementById("customThickness");
document.getElementById("photoBigThickness").addEventListener("click", function(){ setTimeout(function(){photoThickness = 20; thicknessC.value = null;}, 100); }); // thicknessC.value = null;按下去時input變回空白
document.getElementById("photoMediumThickness").addEventListener("click", function(){ setTimeout(function(){photoThickness = 10; thicknessC.value = null;}, 100); });
document.getElementById("photoSmallThickness").addEventListener("click", function(){ setTimeout(function(){photoThickness = 5; thicknessC.value = null;}, 100); });
thicknessC.addEventListener("click", function(){ setTimeout(function(){photoThickness = null;}, 100); }); // 按下去時原先的選擇變為null
document.getElementById("photoThicknessModal").addEventListener("click", function(){
  if(photoThickness){
    tempStorage = photoThickness;
    photoThickness = null;
  }
  // thicknessC.value = null;
});

//fourth stage  須手動做點擊的分類 因為同時須有兩種選項做顯示
var resoBig = document.getElementById("voxelResolutionBig");
var resoMid = document.getElementById("voxelResolutionMedium");
var resoSml = document.getElementById("voxelResolutionSmall");
photoSeperate = "no"
var sepNo = document.getElementById("voxelSeperateNo");
var sepYes = document.getElementById("voxelSeperateYes");
puzzle = "no";
var puzzle_selection = document.getElementById("puzzle-sub");
var noGap_circle = document.getElementById("noGap");
var yesGap_circle = document.getElementById("yesGap");

resoBig.addEventListener("click", function(){
  resoBig.className = "importBtn accuracy-degree-pressed accuracy-position1";
  resoMid.className = "importBtn accuracy-degree accuracy-position2";
  resoSml.className = "importBtn accuracy-degree accuracy-position3";
  setTimeout(function(){
    photoResolution = 120;
  }, 100);
});
resoMid.addEventListener("click", function(){
  resoBig.className = "importBtn accuracy-degree accuracy-position1";
  resoMid.className = "importBtn accuracy-degree-pressed accuracy-position2";
  resoSml.className = "importBtn accuracy-degree accuracy-position3";
  setTimeout(function(){
    photoResolution = 80;
  }, 100);
});
resoSml.addEventListener("click", function(){
  resoBig.className = "importBtn accuracy-degree accuracy-position1";
  resoMid.className = "importBtn accuracy-degree accuracy-position2";
  resoSml.className = "importBtn accuracy-degree-pressed accuracy-position3";
  setTimeout(function(){
    photoResolution = 50;
  }, 100);
});

sepNo.addEventListener("click", function(){
  sepNo.className = "importBtn accuracy-degree-pressed accuracy-position1";
  sepYes.className = "importBtn accuracy-degree accuracy-position3";
  photoSeperate = "no";
  puzzle_selection.className = "sub-selection sub-selection-hide";
  puzzle = "no";
  noGap_circle.className = "sub-selection-item sub-selection-circle-pressed";
  yesGap_circle.className = "sub-selection-item sub-selection-circle-released";
});
sepYes.addEventListener("click", function(){
  sepNo.className = "importBtn accuracy-degree accuracy-position1";
  sepYes.className = "importBtn accuracy-degree-pressed accuracy-position3";
  photoSeperate = "yes";
  puzzle_selection.className = "sub-selection";
});

noGap_circle.addEventListener("click", function(){
  puzzle = "no";
  noGap_circle.className = "sub-selection-item sub-selection-circle-pressed";
  yesGap_circle.className = "sub-selection-item sub-selection-circle-released";
});
yesGap_circle.addEventListener("click", function(){
  puzzle = "yes";
  noGap_circle.className = "sub-selection-item sub-selection-circle-released";
  yesGap_circle.className = "sub-selection-item sub-selection-circle-pressed";
});

// checking if users actually choose one of the Btns
// var lock = "open"; // 讓originalData = object.dataset.target;只執行一次
var originalTarget;
// backgroundColor, photoSize, photoThickness只負責modal的前進或停止
// 真正存到最後的值是real...

// 在每個階段的 continue 被按下後所執行的部分
function checkAnswer(object){
  var btnSelection;
  var alertContent;
  var alertLock = "open";
  var reg = /^([1-9][0-9]*){1,3}$/; // 正則(regular expression) 驗證非0的正整數

  switch(object.dataset.stage){ // 在html的input元素中增加data-stage來判斷現階段處於哪個modal
    case "first":
      btnSelection = backgroundColor;
      alertContent = "background color"
      if(backgroundColor){
      setTimeout(function(){ backgroundColor = tempStorage; realColor = backgroundColor;}, 30); // 補回按下continue時同時觸發的backgroundColor = null;(因為continue按鍵也是整體的一部份 被視為空白處的一部份)
      }
      break;
    case "second":
      if(sizeC_H.value && sizeC_W.value){
        if(reg.test(sizeC_H.value)){ // 驗證是否為非零正整數
          photoSizeH = parseInt(sizeC_H.value); // parseInt()將字串轉成數字型態
        }
        else{
          alert("Custonmized value only accepts integers!");
          alertLock = null; // 有跳出這句下面就不用再alert說 "還沒選擇" 了
          return;
        }
        if(reg.test(sizeC_W.value)){ // 驗證是否為非零正整數
          photoSizeW = parseInt(sizeC_W.value); // parseInt()將字串轉成數字型態
        }
        else{
          alert("Custonmized value only accepts integers!");
          alertLock = null; // 有跳出這句下面就不用再alert說 "還沒選擇" 了
          return;
        }
      }
      btnSelection = photoSizeH;
      alertContent = "size"
      if(photoSizeH && photoSizeW){ // 確認當下是否有值  當下有值才進行事後(30ms)還原
        setTimeout(function(){ photoSizeH = tempStorage; photoSizeW = tempStorage_2; realSizeH = photoSizeH; realSizeW = photoSizeW;}, 30);
      }
      break;
    case "third":
      if(thicknessC.value){
        if(reg.test(thicknessC.value)){
          photoThickness = parseInt(thicknessC.value); // 原本是字串 必須轉換為數值類型!!
        }
        else{
          alert("Custonmized value only accepts integers!");
          alertLock = null; // 有跳出這句下面就不用再alert說 "還沒選擇" 了
          return;
        }
      }
      btnSelection = photoThickness;
      alertContent = "thickness"
      if(photoThickness){
        setTimeout(function(){ photoThickness = tempStorage; realThickness = photoThickness; photoResolution = 80;}, 30); // 80為photoResolution的default值
      }
      break;
    case "fourth":
      btnSelection = photoResolution;
      alertContent = "resolution"
      if(photoResolution){
      realResolution = photoResolution;
      }

      // 其實在fourth stage設有Default值之後就不需要以下的if判斷式了
      var inputBtn = document.getElementById("imgFile");
      if(btnSelection){ // 確認是否要進入檔案的選單
        inputBtn.type = "file";
      }
      else{
        inputBtn.type = "";
      }
      break;
  }

  if(object.dataset.target){ // 原是if(lock == "open" && object.dataset.target) 但發現有確認object.dataset.target就夠了
    originalTarget = object.dataset.target; // 先存出原本下個modal的名稱 只執行一次
  }
  if(btnSelection == null){
    if(alertLock){
      alert("please choose the " +  alertContent + " value of your photo before continue!");
    }
    // alert(realColor + " " + realSize + " " + realThickness);
    object.dataset.target = '';
    object.dataset.dismiss = '';
    // lock = "closed"; // 讓originalData = object.dataset.target;只執行一次 // 否則第二次以上會跟著變空白後再執行會讓originalData也變空白
  }
  if(btnSelection){
    if(object.dataset.stage != "fourth"){
      // lock = "open";
      // fourth 這邊不能有.dismiss因為dismiss掉之後就不會出現可以選檔案的畫面了
      object.dataset.target = originalTarget;
      object.dataset.dismiss = 'modal';
    }
      // lock = "open";  // 需打開開關讓下一個modal的continue第一次被按下的時候可以抓取data-target的資料
  }
}

function cancel(event){
  backgroundColor = null;
  photoSize = null;
  photoThickness = null;
  photoResolution = null;
  // lock = "open";
}

// 宣告最後用來製作3D照片的變數 其實直接用photo-系列的變數也可以
var realColor, realSizeH, realSizeW, realThickness, realResolution;

function readImgForVoxel(event){ // input事件
  document.getElementById("importModalCancel").click(); // 若直接在元素裡設data-dismiss的話會在檔案選單出現前就先隱藏了
  var files;
  var reader = new FileReader();
  if(event.target.files){
    files = event.target.files;
  }
  else{
    files = event.dataTransfer.files;
  }
  if(files[0]){
    reader.readAsDataURL(files[0]);
  }
  reader.onload = function(event){
    var fileName = files[0].name;
    var pointPosition = fileName.lastIndexOf("."); //获取最后一个.的位置
    var fileType = fileName.substr(pointPosition+1); //获取后缀

    if(fileType == "jpg" || fileType == "JPG" || fileType == "png" || fileType == "PNG"){
      // 判斷選擇的data是否為image類型 (用console.log可得知reader.result的內容)
      if(realColor && realSizeH && realSizeW && realThickness && realResolution){ // 判斷是否每個參數都有被選擇到

        status = "running";
        // voxelizeImg(reader.result, realColor, realSize, realThickness, realResolution);
        // 加一個setTimeout 讓過場動畫能確實顯現出來
        setTimeout(function(){
          var img3D = new voxelIMG();
          // definition before voxelize // Using default without img3D.set also works
          img3D.set(realColor, realSizeH, realSizeW, realThickness, realResolution, backgroundSplit, photoSeperate, puzzle, mycontext, Number(mycanvas.height), Number(mycanvas.width));

          mycanvas.classList.remove("sr-only"); // 顯示小框中的圖片示意

          img3D.voxelize(
            // image url
            reader.result,
            // geometry callback
            function(geometry, pieceAmount){
              for(var i=0; i<geometry.length; i++){
                var material = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
                mesh[ini] = new THREE.Mesh( geometry[i], material );
                scene.add(mesh[ini]);
                ini = ini+1;
              }
              num = num + pieceAmount;
              status = "complete";
            });
        }, 300);


        // 執行完後清除前面modal中的inputBox的值 & 若沒執行完留著 可以保留記憶
        sizeC_H.value = "";
        sizeC_W.value = "";
        thicknessC.value = "";

        historyText.push('3D_photo_generated');
      }
      else{
        alert("Something goes wrong! please try again!");
      }
    }
    else{
      alert("Only IMAGE data(Ex: .jpeg or .png file) is accepted! Please try again!");
    }

  }
}


var mycanvas = document.getElementById("myCanvas");
var mycontext = mycanvas.getContext('2d');

// 照片voxel化 主要計算
// function voxelizeImg(url){
//   mycanvas.classList.remove("sr-only"); // 顯示小框中的圖片示意
//
//   // instantiate a loader
//   var imgLoader = new THREE.ImageLoader();
//
//   var lineGeometry = [];
//   var cutGeometry = [];
//   // load a image resource
//   imgLoader.load(
//   	// resource URL ex: 'img/test_2.jpg',
//     url, // 用來代入reader.result
//
//   	// onLoad callback
//   	function ( image ) {
//   		// use the image, e.g. draw part of it on a canvas
//       // console.log(image);
//       // drawImage(picture-data, x-transition, y-transition, x-size, y-size)
//       mycontext.drawImage( image, 0, 0, 60, 60 );
//
//       // [BUG] 原生js的var img = new Image();不知為什麼需要按好幾次才會把圖片load進來 故用three.js裡面的imageLoader
//       // var img = new Image();
//       // img.src = 'img/test.jpg';
//   		var hiddenCanvas = document.createElement( 'canvas' ); //這個canvas是看不到的 純粹用來計算
//       var hiddenContext = hiddenCanvas.getContext('2d');
//       hiddenContext.drawImage( image, 0, 0, realResolution, realResolution ); // 這邊的 realResolution 目的在於設定相片的像素長寬
//       // test: ( image, 0, 0, 30, 30 )
//       var imageData = hiddenContext.getImageData(0, 0, realResolution, realResolution);
//       console.log(imageData.data.length);
//
//       var greyScaleData = []; // 抓出每個pixel的灰階數據
//       for(var i=0; i<imageData.data.length; i+=4){
//         // 轉灰階數據 RGB的平均就是灰階數據
//         var greyScale = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
//         greyScaleData.push(greyScale);
//       }
//
//       console.log(greyScaleData.length);
//
//       var blocks = [];
//       var moveX, moveY; //宣告每個voxel的位移參數
//       var voxelSize = realSize*10 / realResolution; //每個voxel的長與寬 單位mm
//       // remap灰階數據 + 方塊生長/移動
//       for(var i=0; i<greyScaleData.length; i++){
//         var blockHeight;
//         if(realColor == "black"){
//           blockHeight = remap(greyScaleData[i], 0, 255, 2, realThickness);
//           // console.log(greyScaleData[i] + " " + realThickness + " " + blockHeight);
//         }
//         else{
//           blockHeight = remap(greyScaleData[i], 0, 255, realThickness, 2);
//         }
//         blocks[i] = new THREE.BoxGeometry( voxelSize, blockHeight, voxelSize ); //BoxGeomoetry本身已經有face(可merge的實體)，故不需再做轉換
//
//         // 直接用除以每行pixel數的方式得到餘數跟結果
//         moveX = i % realResolution;
//         moveY = parseInt(i / realResolution); //取整數
//         // 上兩行由以下的原始方法轉換而來
//         // if(i>0 && i<100){ moveX = moveX+1; moveY = 0; } 0~99為第一行 不用移Y
//         // if(i>99 && i<200){ moveX = moveX+1; moveY = 1; }
//         // if(i>199 && i<300){ moveX = moveX+1; moveY = 2; }
//         // .
//         // . 用這方式的話需寫一百行 (在照片長度是100 pixel 的情況下)
//
//         // 照順序移動每個boxGeometry
//         blocks[i].translate(moveX*voxelSize, blockHeight/2, moveY*voxelSize);
//       }
//
//       // 單純把全部的voxel都merge成同一塊
//       // merge all units into one object
//       if(photoSeperate == "no"){
//         var singleGeometry = new THREE.Geometry();
//         for(var i=0; i<blocks.length; i++){
//           singleGeometry.merge(blocks[i]);
//         }
//         singleGeometry.mergeVertices();
//         singleGeometry.verticesNeedUpdate = true;
//         var bufferGeometry = new THREE.BufferGeometry().fromGeometry( singleGeometry );
//         var material = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
//         bufferGeometry.name = "3dPhoto";
//         mesh[ini] = new THREE.Mesh( bufferGeometry, material );
//         scene.add( mesh[ini] );
//         ini = ini+1;
//         num = num+1;
//       }
//
//       // 增加把照片分成10x10方塊的程式 (可以單獨控制每一塊)
//       // 分成 橫 與 豎 來做merge
//       if(photoSeperate == "yes"){
//         var goemetryNum = 0;
//         var voxelLengthOfOneBlock = realResolution/10; //若要自訂分成幾塊 從這個參數下手
//         // 首先做橫向merge
//         for(var i=0; i<blocks.length; i+=voxelLengthOfOneBlock){
//           lineGeometry[goemetryNum] = new THREE.Geometry();
//           for(var j=i; j < i+voxelLengthOfOneBlock; j++){
//             lineGeometry[goemetryNum].merge(blocks[j]);
//           }
//           goemetryNum = goemetryNum+1;
//         }
//
//         // console.log(lineGeometry.length);
//         // 接著做縱向merge
//         goemetryNum = 0;
//         for(var i=0; i<lineGeometry.length; i++){
//           if(lineGeometry[i]){ // 確認不會重覆到已經被merge的資料
//             cutGeometry[goemetryNum] = new THREE.Geometry();
//             for(var j=i; j < i+voxelLengthOfOneBlock*10; j+=10){
//               cutGeometry[goemetryNum].merge(lineGeometry[j]);
//               lineGeometry[j] = null;
//             }
//             goemetryNum = goemetryNum+1;
//           }
//         }
//
//         // console.log(cutGeometry.length);
//
//         for(var i=0; i<cutGeometry.length; i++){
//           cutGeometry[i].mergeVertices();
//           cutGeometry[i].verticesNeedUpdate = true;
//           var bufferGeometry = new THREE.BufferGeometry().fromGeometry( cutGeometry[i] );
//           var material = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
//           bufferGeometry.name = "3dPhoto";
//           mesh[ini] = new THREE.Mesh( bufferGeometry, material );
//           scene.add( mesh[ini] );
//           ini = ini+1;
//           num = num+1;
//         }
//       }
//
//
//       // console.log(scene.children.length);
//       alert("Successfully voxelized! Each voxel is " + voxelSize + "mm" + " * " + voxelSize + "mm");
//
//       // for(var i=0; i<61; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       //   blocks[i+3] = null;
//       //   blocks[i+4] = null;
//       //   blocks[i+5] = null;
//       //   blocks[i+6] = null;
//       //   blocks[i+7] = null;
//       //   blocks[i+8] = null;
//       // }
//       // for(var i=21; i<82; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       //   blocks[i+3] = null;
//       //   blocks[i+4] = null;
//       //   blocks[i+5] = null;
//       //   blocks[i+6] = null;
//       //   blocks[i+7] = null;
//       //   blocks[i+8] = null;
//       // }
//       // for(var i=90; i<241; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       // }
//       // for(var i=117; i<268; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       // }
//       // for(var i=630; i<781; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       // }
//       // for(var i=657; i<808; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       // }
//       // for(var i=810; i<871; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       //   blocks[i+3] = null;
//       //   blocks[i+4] = null;
//       //   blocks[i+5] = null;
//       //   blocks[i+6] = null;
//       //   blocks[i+7] = null;
//       //   blocks[i+8] = null;
//       // }
//       // for(var i=831; i<892; i+=30){
//       //   blocks[i] = null;
//       //   blocks[i+1] = null;
//       //   blocks[i+2] = null;
//       //   blocks[i+3] = null;
//       //   blocks[i+4] = null;
//       //   blocks[i+5] = null;
//       //   blocks[i+6] = null;
//       //   blocks[i+7] = null;
//       //   blocks[i+8] = null;
//       // }
//       // for(var i=0; i<blocks.length; i++){
//       //   if(blocks[i]){
//       //     singleGeometry.merge(blocks[i]);
//       //   }
//       // }
//   	},
//
//   	// onProgress callback currently not supported
//   	function(){
//     },
//
//   	// onError callback
//   	function (e) {
//   		alert("Error happened! Please refresh this page and try again!");
// 	}
// );
// }

// stl voxelization
var cubeType, solidOrHollow; // 確認使用者選擇的方塊種類
document.getElementById("voxel_mode_cube").addEventListener("click", function(){ cubeType = "stl/single/cube.stl"; solidOrHollow = "solid"; });
document.getElementById("voxel_mode_circular").addEventListener("click", function(){ cubeType = "stl/single/circular.stl"; solidOrHollow = "solid"; });
document.getElementById("voxel_mode_cut").addEventListener("click", function(){ cubeType = "stl/single/cut.stl"; solidOrHollow = "solid"; });
document.getElementById("voxel_mode_hollow_1").addEventListener("click", function(){ cubeType = "stl/single/hollow_1.stl"; solidOrHollow = "hollow"; });
document.getElementById("voxel_mode_hollow_2").addEventListener("click", function(){ cubeType = "stl/single/hollow_2.stl"; solidOrHollow = "hollow"; });
document.getElementById("voxel_mode_hollow_3").addEventListener("click", function(){ cubeType = "stl/single/hollow_3.stl"; solidOrHollow = "hollow"; });

var cubeSize = 0.3; // 確認resolution選擇
var voxelResBig = document.getElementById("10AccuracyBtn");
var voxelResMid = document.getElementById("1AccuracyBtn");
var voxelResSml = document.getElementById("halfAccuracyBtn");
voxelResBig.addEventListener("click", function(){
  voxelResBig.className = "importBtn accuracy-degree-pressed accuracy-position1";
  voxelResMid.className = "importBtn accuracy-degree accuracy-position2";
  voxelResSml.className = "importBtn accuracy-degree accuracy-position3";
  cubeSize = 0.2;
});
voxelResMid.addEventListener("click", function(){
  voxelResBig.className = "importBtn accuracy-degree accuracy-position1";
  voxelResMid.className = "importBtn accuracy-degree-pressed accuracy-position2";
  voxelResSml.className = "importBtn accuracy-degree accuracy-position3";
  cubeSize = 0.3;
});
voxelResSml.addEventListener("click", function(){
  voxelResBig.className = "importBtn accuracy-degree accuracy-position1";
  voxelResMid.className = "importBtn accuracy-degree accuracy-position2";
  voxelResSml.className = "importBtn accuracy-degree-pressed accuracy-position3";
  cubeSize = 0.5;
});

var objectX, objectY, objectZ; // 紀錄import進來的本體STL的尺寸大小
// 上面的cubeSize就相當於voxel模型的resolution
function readSTLforVoxel(event){
  // 消除掉modal
  document.getElementById("closeModalAfterImport").click();
  // voxelize算法開始
  var files;
  var reader = new FileReader();
  if(event.target.files){
    files = event.target.files;
    // console.log(event.target.files[0].webkitRelativePath);
  }
  else{
    files = event.dataTransfer.files;
  }
  if(files[0]){
    reader.readAsDataURL(files[0]);
  }
  reader.onload = function(event){
    // console.log(files[0]); // 確認 files[0] 可以讀出什麼
    // files[0] == [object File]: {lastModifiedDate: [date] Sun Dec 09 2018 18:04:37 GMT+0900 (東京標準時間), name: "rafael.stl", size: 3151834, type: "", webkitRelativePath: ""}
    var fileName = files[0].name;
    var pointPosition = fileName.lastIndexOf("."); // 獲取最後一个.的位置
    var fileType = fileName.substr(pointPosition+1); // 獲取後綴

    if(fileType == "stl" || fileType == "STL"){ // 判斷選擇的data是否為stl類型
      if(cubeType && cubeSize){ // 判斷是否每個參數都有被選擇到
        // console.log(reader.result);
        // console.log(reader.result[13]);
        voxelizeSTL(reader.result);
      }
      else{
        alert("Something goes wrong! please try again!");
      }
    }
    else{
      alert("Only .stl data is accepted! Please try again!");
    }
  }
}

// STL voxel化 主要計算
var favAllData = [];
var favLineData = [];
var favLayerData = [];
var dataToExport = '';
var voxelAmountX, voxelAmountY, voxelAmountZ;
function voxelizeSTL(url){
  // 分割原本的geometry以縮減vertices的運算數量
  // displayLoader.className = "loader-background";
  status = "running";
  // 加一個setTimeout 讓過場動畫能確實顯現出來
  setTimeout(function(){
    var stage1=[], stage2=[], stage3=[], stage4=[], stage5=[];
    var mixedGeometry = new THREE.Geometry();
    var realGeo;
    if(mergeSwitch){
      loader.load(url, function (geometry) {
        var originalMesh = new THREE.Mesh(geometry);
        originalMesh.scale.set(1, 1, 1);
        originalMesh.geometry.center();
        meshSize(originalMesh);
        originalMesh.geometry.translate(0, yFactor/2, 0);

        realGeo = new THREE.Geometry().fromBufferGeometry(geometry);
        // 後面使用 realGeo.vertices.length 做 for loop

        objectX = xFactor;
        objectY = yFactor;
        objectZ = zFactor;

        // 用高度來分割原本的geometry以縮減vertices的運算數量
        for(var i=0; i<realGeo.vertices.length; i++){
          if((objectY/5)*1 > realGeo.vertices[i].y && realGeo.vertices[i].y > 0){
            stage1.push(realGeo.vertices[i].clone());
          }
          if((objectY/5)*2 > realGeo.vertices[i].y && realGeo.vertices[i].y >= objectY/5){
            stage2.push(realGeo.vertices[i].clone());
          }
          // 下面輸入cube後 以cube的 maxY 作為判斷高度的基準，所以除了第一階以外，都會需要加進 補償區域 的vertice數據
          if((objectY/5)*1 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*1 - 10*cubeSize){
            stage2.push(realGeo.vertices[i].clone()); // 補償stage2用
          }
          if((objectY/5)*3 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*2){
            stage3.push(realGeo.vertices[i].clone());
          }
          if((objectY/5)*2 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*2 - 10*cubeSize){
            stage3.push(realGeo.vertices[i].clone()); // 補償stage3用
          }
          if((objectY/5)*4 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*3){
            stage4.push(realGeo.vertices[i].clone());
          }
          if((objectY/5)*3 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*3 - 10*cubeSize){
            stage4.push(realGeo.vertices[i].clone()); // 補償stage4用
          }
          if(realGeo.vertices[i].y >= (objectY/5)*4){
            stage5.push(realGeo.vertices[i].clone());
          }
          if((objectY/5)*4 > realGeo.vertices[i].y && realGeo.vertices[i].y >= (objectY/5)*4 - 10*cubeSize){
            stage5.push(realGeo.vertices[i].clone()); // 補償stage5用
          }
        }

        // 先求出每個face的center point 再把這些點資料做分層加入array (增加判斷接觸的參數)
        var centerPoint = new THREE.Geometry();
        var pointAmountOfEachFace = 3;
        var centerX, centerY, centerZ, temp;
        for(var i=0; i<realGeo.faces.length; i++){
          var pointXFactors = [realGeo.vertices[realGeo.faces[i].a].x, realGeo.vertices[realGeo.faces[i].b].x, realGeo.vertices[realGeo.faces[i].c].x];
          var pointYFactors = [realGeo.vertices[realGeo.faces[i].a].y, realGeo.vertices[realGeo.faces[i].b].y, realGeo.vertices[realGeo.faces[i].c].y];
          var pointZFactors = [realGeo.vertices[realGeo.faces[i].a].z, realGeo.vertices[realGeo.faces[i].b].z, realGeo.vertices[realGeo.faces[i].c].z];
          // for(var j=0; j<pointAmountOfEachFace; j++){
          //   if(pointXFactors[j+1]){ // 照大小重新排序
          //     if(pointXFactors[j] < pointXFactors[j+1]){
          //       temp = pointXFactors[j];
          //       pointXFactors[j] = pointXFactors[j+1];
          //       pointXFactors[j+1] = temp;
          //     }
          //   }
          //   if(pointYFactors[j+1]){ // 照大小重新排序
          //     if(pointYFactors[j] < pointYFactors[j+1]){
          //       temp = pointYFactors[j];
          //       pointYFactors[j] = pointYFactors[j+1];
          //       pointYFactors[j+1] = temp;
          //     }
          //   }
          //   if(pointZFactors[j+1]){ // 照大小重新排序
          //     if(pointZFactors[j] < pointZFactors[j+1]){
          //       temp = pointZFactors[j];
          //       pointZFactors[j] = pointZFactors[j+1];
          //       pointZFactors[j+1] = temp;
          //     }
          //   }
          // } // 照大小重新排序(不需要)
          centerX = (pointXFactors[0]+pointXFactors[1]+pointXFactors[2])/3;
          centerY = (pointYFactors[0]+pointYFactors[1]+pointYFactors[2])/3;
          centerZ = (pointZFactors[0]+pointZFactors[1]+pointZFactors[2])/3;

          centerPoint.vertices.push( new THREE.Vector3( centerX, centerY, centerZ ) );
          // 除了face的中心點之外  再增加中心點到三個頂點之間的中心點
          centerPoint.vertices.push( new THREE.Vector3( (centerX+pointXFactors[0])/2, (centerY+pointYFactors[0])/2, (centerZ+pointZFactors[0])/2 ) );
          centerPoint.vertices.push( new THREE.Vector3( (centerX+pointXFactors[1])/2, (centerY+pointYFactors[1])/2, (centerZ+pointZFactors[1])/2 ) );
          centerPoint.vertices.push( new THREE.Vector3( (centerX+pointXFactors[2])/2, (centerY+pointYFactors[3])/2, (centerZ+pointZFactors[2])/2 ) );
        }

        // 再將求出的 centerPoint 照高度加入stage的資料中
        for(var i=0; i<centerPoint.vertices.length; i++){
          if((objectY/5)*1 > centerPoint.vertices[i].y && centerPoint.vertices[i].y > 0){ // 若是設定 >= 0 的話，會出現地面投影的效果(第一層的方塊包含地面投影的形狀)
            stage1.push(centerPoint.vertices[i].clone());
          }
          if((objectY/5)*1 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*1 - 10*cubeSize){
            stage2.push(centerPoint.vertices[i].clone()); // 補償stage2用
          }
          if((objectY/5)*2 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*1){
            stage2.push(centerPoint.vertices[i].clone());
          }
          if((objectY/5)*2 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*2 - 10*cubeSize){
            stage3.push(centerPoint.vertices[i].clone()); // 補償stage3用
          }
          if((objectY/5)*3 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*2){
            stage3.push(centerPoint.vertices[i].clone());
          }
          if((objectY/5)*3 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*3 - 10*cubeSize){
            stage4.push(centerPoint.vertices[i].clone()); // 補償stage4用
          }
          if((objectY/5)*4 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*3){
            stage4.push(centerPoint.vertices[i].clone());
          }
          if((objectY/5)*4 > centerPoint.vertices[i].y && centerPoint.vertices[i].y >= (objectY/5)*4 - 10*cubeSize){
            stage5.push(centerPoint.vertices[i].clone()); // 補償stage5用
          }
          if(centerPoint.vertices[i].y >= (objectY/5)*4){
            stage5.push(centerPoint.vertices[i].clone());
          }
        }

        // scene.add(mesh[ini]);
        // ini = ini+1;
        // num = num+1;
        console.log(stage1.length + " " + stage2.length + " " + stage3.length + " " + stage4.length + " " + stage5.length);
      });

      // [實驗用] 測試用raycaster來測距離 並判斷是否相交
      // loader.load(cubeType, function (geometry) {
      //   var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      //   geometry.scale(cubeSize, cubeSize, cubeSize);
      //   var geo = new THREE.Geometry().fromBufferGeometry(geometry); // 需轉換成實體geometry才能做後續的merge
      //   geo.center();
      //   meshSize(geo);
      //   var halfX = objectX/2; //x=x y=z z=y 實際UI裡面的軸向
      //   var halfY = objectZ/2;
      //   geo.translate(-halfX, yFactor/2, -halfY);
      //
      //   var xAmount = Math.ceil(objectX/xFactor) +1; //偶數時需要加一塊 因為center()會讓方塊少半塊的可cover面積
      //   var yAmount = Math.ceil(objectZ/zFactor) +1;
      //   var zAmount = Math.ceil(objectY/yFactor) +1;
      //   var total = xAmount*yAmount*zAmount;
      //   var blocksSTL = [];
      //
      //   // 採用同 voxelize Image 的移動方式
      //   for(var i=0; i<total; i++){
      //     blocksSTL[i] = geo.clone();;
      //
      //     var moveX = i % xAmount;
      //     var moveY = parseInt(i / xAmount) % yAmount;
      //     var moveZ = parseInt(i / (xAmount*yAmount));
      //
      //     blocksSTL[i].translate(moveX*xFactor, moveZ*yFactor, moveY*zFactor);
      //
      //     blocksSTL[i].computeBoundingBox();
      //     var maxX = blocksSTL[i].boundingBox.max.x;
      //     var maxY = blocksSTL[i].boundingBox.max.y;
      //     var maxZ = blocksSTL[i].boundingBox.max.z;
      //     var minX = blocksSTL[i].boundingBox.min.x;
      //     var minY = blocksSTL[i].boundingBox.min.y;
      //     var minZ = blocksSTL[i].boundingBox.min.z;
      //
      //     var originPoint = new THREE.Vector3( (maxX+minX) / 2, (maxY+minY) / 2, (maxZ+minZ) / 2 );
      //     var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
      //
      //   }
      // });

      // 讀進方塊數據並移動 再做碰撞測試
      loader.load(cubeType, function (geometry) {
        var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
        geometry.scale(cubeSize, cubeSize, cubeSize);
        var geo = new THREE.Geometry().fromBufferGeometry(geometry); // 需轉換成實體geometry才能做後續的merge
        // var cubeMesh = new THREE.Mesh(geo, mat);
        // cubeMesh.scale.set(0.1, 0.1, 0.1);
        geo.center();
        meshSize(geo);
        var halfX = objectX/2; //x=x y=z z=y 實際 three.js 裡面的軸向
        var halfY = objectZ/2;
        geo.translate(-halfX, yFactor/2, -halfY);
        // scene.add(cubeMesh);
        // 開始移動方塊
        var xAmount = Math.ceil(objectX/xFactor) +1; //偶數時需要加一塊 因為center()會讓方塊少半塊的可cover面積
        var yAmount = Math.ceil(objectZ/zFactor) +1;
        var zAmount = Math.ceil(objectY/yFactor) +1;
        voxelAmountX = xAmount;
        voxelAmountY = yAmount;
        voxelAmountZ = zAmount;
        var total = xAmount*yAmount*zAmount;
        var blocksSTL = [];

        // 採用同 voxelize Image 的移動方式
        for(var i=0; i<total; i++){
          blocksSTL[i] = geo.clone();;

          var moveX = i % xAmount;
          var moveY = parseInt(i / xAmount) % yAmount;
          var moveZ = parseInt(i / (xAmount*yAmount));

          blocksSTL[i].translate(moveX*xFactor, moveZ*yFactor, moveY*zFactor);

          blocksSTL[i].computeBoundingBox();
          var maxX = blocksSTL[i].boundingBox.max.x;
          var maxY = blocksSTL[i].boundingBox.max.y;
          var maxZ = blocksSTL[i].boundingBox.max.z;
          var minX = blocksSTL[i].boundingBox.min.x;
          var minY = blocksSTL[i].boundingBox.min.y;
          var minZ = blocksSTL[i].boundingBox.min.z;

          // collision check after moving
          // 以 maxY 作為判斷高度的基準，所以除了第一階以外，都會需要加進 補償區域 的vertice數據
          if(0 <= maxY && maxY < (objectY/5)*1){
            var collision = "no";
            for(var j=0; j<stage1.length; j++){
              if(stage1[j].x > maxX || stage1[j].x < minX || stage1[j].y > maxY || stage1[j].y < minY || stage1[j].z > maxZ || stage1[j].z < minZ){
                collision = "no";
                continue; // 相交的定義"本體中的所有 點資料 中，至少有一個點是位於方塊中的"
                // maxX > pointX > minX // maxY > pointY > minY // maxZ > pointZ > minZ 三項須同時滿足
              }
              else{
                // scene.add(blocksSTL[i]);
                // 判定有在範圍內的話就整合進 mixedGeometry 裡面
                favAllData.push("1");
                collision = "yes";
                mixedGeometry.merge(blocksSTL[i]);
                break; // 已經知道至少有一個點相交了 所以就不必再執行下去了  否則會add超過一次
              }
            }
            if(collision == "no"){
              favAllData.push("0");
            }
          }
          // else{
          //   scene.add(blocksSTL[i]);
          // }
          if((objectY/5)*1 <= maxY && maxY < (objectY/5)*2){
            var collision = "no";
            for(var j=0; j<stage2.length; j++){
              if(stage2[j].x > maxX || stage2[j].x < minX || stage2[j].y > maxY || stage2[j].y < minY || stage2[j].z > maxZ || stage2[j].z < minZ){
                collision = "no";
                continue; // 相交的定義"本體中的所有 點資料 中，至少有一個點是位於方塊中的"
                // maxX > pointX > minX // maxY > pointY > minY // maxZ > pointZ > minZ 三項須同時滿足
              }
              else{
                favAllData.push("1");
                collision = "yes";
                mixedGeometry.merge(blocksSTL[i]);
                break; // 已經知道至少有一個點相交了 所以就不必再執行下去了  否則會add超過一次
              }
            }
            if(collision == "no"){
              favAllData.push("0");
            }
          }

          if(objectY* (2/5) <= maxY && maxY < objectY* (3/5)){
            var collision = "no";
            for(var j=0; j<stage3.length; j++){
              if(stage3[j].x > maxX || stage3[j].x < minX || stage3[j].y > maxY || stage3[j].y < minY || stage3[j].z > maxZ || stage3[j].z < minZ){
                collision = "no";
                continue; // 相交的定義"本體中的所有 點資料 中，至少有一個點是位於方塊中的"
                // maxX > pointX > minX // maxY > pointY > minY // maxZ > pointZ > minZ 三項須同時滿足
                }
              else{
                favAllData.push("1");
                collision = "yes";
                mixedGeometry.merge(blocksSTL[i]);
                break; // 已經知道至少有一個點相交了 所以就不必再執行下去了  否則會add超過一次
              }
            }
            if(collision == "no"){
              favAllData.push("0");
            }
          }
          if(objectY* (3/5) <= maxY && maxY < objectY* (4/5)){
            var collision = "no";
            for(var j=0; j<stage4.length; j++){
              if(stage4[j].x > maxX || stage4[j].x < minX || stage4[j].y > maxY || stage4[j].y < minY || stage4[j].z > maxZ || stage4[j].z < minZ){
                collision = "no";
                continue; // 相交的定義"本體中的所有 點資料 中，至少有一個點是位於方塊中的"
                // maxX > pointX > minX // maxY > pointY > minY // maxZ > pointZ > minZ 三項須同時滿足
                }
              else{
                favAllData.push("1");
                collision = "yes";
                mixedGeometry.merge(blocksSTL[i]);
                break; // 已經知道至少有一個點相交了 所以就不必再執行下去了  否則會add超過一次
              }
            }
            if(collision == "no"){
              favAllData.push("0");
            }
          }
          if(objectY* (4/5) <= maxY){
            var collision = "no";
            for(var j=0; j<stage5.length; j++){
              if(stage5[j].x > maxX || stage5[j].x < minX || stage5[j].y > maxY || stage5[j].y < minY || stage5[j].z > maxZ || stage5[j].z < minZ){
                collision = "no";
                continue; // 相交的定義"本體中的所有 點資料 中，至少有一個點是位於方塊中的"
                // maxX > pointX > minX // maxY > pointY > minY // maxZ > pointZ > minZ 三項須同時滿足
                }
              else{
                favAllData.push("1");
                collision = "yes";
                mixedGeometry.merge(blocksSTL[i]);
                break; // 已經知道至少有一個點相交了 所以就不必再執行下去了  否則會add超過一次
              }
            }

            if(collision == "no"){
              favAllData.push("0");
            }
          }
        }

        var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
        // if(solidOrHollow == "solid"){
        //   // mixedGeometry.merge(realGeo, realGeo.matrix); // 合併原來的模型 (太不精細的模型有漏洞沒有voxel到)
        //
        //   // var meshMixed = new THREE.Mesh(mixedGeometry);
        //   // var meshReal = new THREE.Mesh(realGeo);
        //   // var mixedBSP = new ThreeBSP(meshMixed);
        //   // var realBSP = new ThreeBSP(meshReal);
        //   // var subBSP = realBSP.subtract(mixedBSP);
        //   // var meshBSP = subBSP.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
        //   // meshBSP.geometry.computeVertexNormals();
        //   // scene.add(meshBSP);
        // }

        // else if(solidOrHollow == "hollow"){
        //   realGeo.dispise();
        // // 這導致程式無法執行(原因不明)
        // }
        mixedGeometry.mergeVertices();
        mixedGeometry.verticesNeedUpdate = true;
        mixedGeometry.name = "voxelModel";
        mesh[ini] = new THREE.Mesh(mixedGeometry, mat); // 這裡的mixedGeometry是Geometry形式
        scene.add(mesh[ini]);
        ini = ini+1;
        num = num+1;

        historyText.push('voxelize_STL');

        status = "complete";
        // displayLoader.className = "loader-background loader-hide";
        // console.log(mixedGeometry);

        });

      // 另一套方塊的移動方式 (可參考)
      // loader.load('stl/single.stl', function (geometry) {
      // var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      // var cubeMesh = new THREE.Mesh(geometry, mat);
      // cubeMesh.scale.set(1, 1, 1);
      // cubeMesh.geometry.center();
      // meshSize(cubeMesh);
      // var halfX = objectX/2 + 10; //x=x y=z z=y 實際UI裡面的軸向
      // var halfY = objectZ/2 + 10;
      // cubeMesh.geometry.translate(-halfX, yFactor/2, -halfY);
      // // scene.add(cubeMesh);
      // // 開始移動方塊
      // for(var z=0; z < zAmount; z++){
      //   for(var y=0; y < yAmount; y++){
      //     for(var x=0; x < xAmount; x++){
      //       // 移動方塊
      //       var cloneGeo = cubeMesh.geometry.clone();
      //       var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      //       var cloneMesh = new THREE.Mesh(cloneGeo, mat);
      //       scene.add(cloneMesh);
      //       cubeMesh.geometry.translate(x*xFactor, z*yFactor, y*zFactor);
      //     }
      //   }
      // }
      // });
    }
    else{
      alert("Already merged! Please EXPORT STL or RESTART!");
    }
  }, 100);
}

// 數據串 重新排大小練習
// var a = [25, 49, 15, 30, 60, 10, 5, 40];
// var temp;
// for(var i=0; i<a.length; i++){
//   for(var j=i+1; j<a.length; j++){
//     if(a[i] < a[j]){
//       temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//     }
//   }
// }
// console.log(a);

// 正則 (Regular Expression) 實例
// var a = '123qwrqwr';
// var b = '2253545625';
// var c = 'q1.2.41.';
// var reg = /^([1-9][0-9]*){1,3}$/; // 驗證非0正整數
// var s = reg.test(a);
// var s1 = reg.test(b);
// var s2 = reg.test(c);
// console.log(s, s1, s2);

// 3D text mode
// 定義text3D()欄裡的選項變數
var textContent, fontName, fontURL, texSize, textThickness;
var currentFont = document.getElementById("currentFont");
document.getElementById("font1").addEventListener("click", function(){
  // fontURL = "json_fonts/Arial_Regular.json";
  fontURL = "json_fonts/Arial Rounded MT Bold_Regular.json";
  fontName = "Arial";
  currentFont.innerHTML = "Current font: " + fontName;
});
document.getElementById("font2").addEventListener("click", function(){
  fontURL = "json_fonts/Bodoni MT_Bold.json";
  fontName = "Bodoni";
  currentFont.innerHTML = "Current font: " + fontName;
});
document.getElementById("font3").addEventListener("click", function(){
  fontURL = "json_fonts/gentilis_bold.typeface.json";
  fontName = "Gentilis";
  currentFont.innerHTML = "Current font: " + fontName;
});
document.getElementById("font4").addEventListener("click", function(){
  fontURL = "json_fonts/helvetiker_bold.typeface.json";
  fontName = "Helvetiker";
  currentFont.innerHTML = "Current font: " + fontName;
});
document.getElementById("font5").addEventListener("click", function(){
  fontURL = "json_fonts/optimer_bold.typeface.json";
  fontName = "Optimer";
  currentFont.innerHTML = "Current font: " + fontName;
});

var generateText = document.getElementById("generateText");
var cancelText = document.getElementById("textModalCancel");
var contentInput = document.getElementById("textContent");
var sizeInput = document.getElementById("textSize");
var thicknessInput = document.getElementById("textHeight");

document.getElementById("text_mode").addEventListener("click", function(){
  historyText.push('3D_text_function');
});

generateText.addEventListener("click", function(){
  var reg = /^([1-9][0-9]*){1,3}$/; // 正則(regular expression) 驗證非0的正整數

  if(contentInput.value){
    textContent = contentInput.value;
  }
  if(sizeInput.value){
    if(reg.test(sizeInput.value)){
      textSize = parseInt(sizeInput.value);
    }
    else{
      alert("The Size and Distance blank only accept integers!");
      return;
    }
  }
  if(thicknessInput.value){
    if(reg.test(thicknessInput.value)){
      textThickness = parseInt(thicknessInput.value);
    }
    else{
      alert("The Size and Distance blank only accept integers!");
      return;
    }
  }

  if(fontURL && textContent && textSize && textThickness){
    text3D(textContent, fontURL, textSize, textThickness);

    historyText.push('3D_text_generated');

    cancelText.click();
  }
  else{
    alert("Is every parameter blank filled properly? Please check again!");
  }
});

function removeTextParameter(event){
  // setTimeout設置一點時間差 才不會在點下的瞬間就看到inputBox都變回空白
  setTimeout(function(){
    contentInput.value = "";
    sizeInput.value = "";
    thicknessInput.value = "";
    textContent = null;
    textSize = null;
    textThickness = null;
    fontURL = null;
    fontName = "None";
    currentFont.innerHTML = "Current font: " + fontName;
  }, 100);
}

function text3D(content, fontType, size, thickness){
  var loader = new THREE.FontLoader();
  loader.load( fontType, function ( font ) {
    var geometry = new THREE.TextGeometry( content, {
  		font: font,
  		size: size, // 10
  		height: thickness, // 5
  		curveSegments: 12,
  		// bevelEnabled: true,
  		// bevelThickness: 5,
  		// bevelSize: 1,
  		// bevelSegments: 3
  	} );
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);

    // 調整位置
    geometry.center();
    geometry.rotateX(-Math.PI/2);
    geometry.translate(0, thickness/2, 0);

    geometry.name = "text";
    scene.add(mesh[ini]);
    ini = ini+1;
    num = num+1;
  } );
}

// molding from merged mesh
var xFactor, yFactor, zFactor;

function meshSize(object){
  if(object.type == "Geometry" || object.type == "BufferGeometry"){ // 若數據是Geometry 或 BufferGeometry形式時
    object.computeBoundingBox();
    //取得merge後的物體x,y,z分別的尺寸
    xFactor = object.boundingBox.max.x - object.boundingBox.min.x;
    yFactor = object.boundingBox.max.y - object.boundingBox.min.y;
    zFactor = object.boundingBox.max.z - object.boundingBox.min.z;
  }
  else{ // 若數據是mesh形式時
    object.geometry.computeBoundingBox();
    //取得merge後的物體x,y,z分別的尺寸
    xFactor = object.geometry.boundingBox.max.x - object.geometry.boundingBox.min.x;
    yFactor = object.geometry.boundingBox.max.y - object.geometry.boundingBox.min.y;
    zFactor = object.geometry.boundingBox.max.z - object.geometry.boundingBox.min.z;
  }
}

// 宣告molding function所需變數
var mold, moldCube, mold_bsp, prey_bsp, subtract_bsp, moldResult;

mold = document.getElementById("mold_mode");
mold.addEventListener("click", function(){
  if(mergedMesh && advanceSwitch == "on"){
    historyText.push('mold_function');

    status = "running";
    // 加一個setTimeout 讓過場動畫能確實顯現出來
    setTimeout(function(){
      meshSize(mergedMesh);
      scene.remove(mergedMesh);
      mergedMesh.geometry.center();
      var material = new THREE.MeshStandardMaterial({color:0x83d46a, side: THREE.DoubleSide});
      var mergedMeshCentered = new THREE.Mesh(mergedMesh.geometry, material);
      mergedMeshCentered.translateY(yFactor/2 -1);
      prey_bsp = new ThreeBSP(mergedMeshCentered);

      var moldBox = new THREE.BoxGeometry(xFactor + 10, yFactor + 5, zFactor + 10);
      var moldMaterial = new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide});
      var boxMesh = new THREE.Mesh(moldBox, moldMaterial);
      meshSize(boxMesh);
      boxMesh.translateY(yFactor/2);
      // scene.add(boxMesh);
      mold_bsp = new ThreeBSP(boxMesh);
      subtract_bsp = mold_bsp.subtract( prey_bsp );
      moldResult = subtract_bsp.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
      moldResult.rotateX(Math.PI);
      scene.add( moldResult );
      mergedMesh.geometry.dispose();
      mergedMesh.material.dispose();
      mergedMesh = undefined;
      status = "complete";

      historyText.push('mold_generated');

      alert("Successfully molded");
    }, 100);
  }
  else if(mergedMesh == null){
    alert("Objects haven't been merged / Merged object has already been through advanced functions");
  }
  else if(advanceSwitch == "off"){
    alert("This function only supports solid modes");
  }
});

// hollow function
var emptyMat, emptyMat_mesh;
function hollow(object){
  var movedMesh = [];
  var thickness = 2.5; //定義燈罩厚度
  var intersect;
  var intersect_bsp = new ThreeBSP(object);
  var objectMoved = object;
  var objectMoved2 = object;

  function intersection(i){
    movedMesh[i] = new ThreeBSP(objectMoved);
    intersect_bsp = intersect_bsp.intersect( movedMesh[i] );
    objectMoved = intersect_bsp.toMesh();
  }

  objectMoved.position.x = thickness;
  objectMoved.position.y = -thickness;
  objectMoved.position.z = thickness;
  intersection(0);
  objectMoved2.position.x = -thickness;
  objectMoved2.position.z = -thickness;
  movedMesh[1] = new ThreeBSP(objectMoved2);
  intersect_bsp = intersect_bsp.intersect( movedMesh[1] );
  objectMoved.position.x = -thickness;
  objectMoved.position.z = -thickness;
  intersection(2);

  // intersection(1);
  // objectMoved.position.y = -thickness;
  // intersection(2);
  // objectMoved.position.z = thickness;
  // intersection(3);
  // objectMoved.position.z = -thickness;
  // intersection(4);
  //
  // movedMesh[0] = new ThreeBSP(object.translateX(thickness));
  // intersect_bsp = intersect_bsp.intersect( movedMesh[0] );
  // var result = intersect_bsp.toMesh();
  // movedMesh[1] = new ThreeBSP(result.geometry.translate(-thickness,0,0));
  // intersect_bsp = intersect_bsp.intersect( movedMesh[1] );
  // result = intersect_bsp.toMesh();
  // movedMesh[2] = new ThreeBSP(result.geometry.translate(0,-thickness,0));
  // intersect_bsp = intersect_bsp.intersect( movedMesh[2] );
  // result = intersect_bsp.toMesh();
  // movedMesh[3] = new ThreeBSP(result.translateZ(thickness));
  // intersect_bsp = intersect_bsp.intersect( movedMesh[3] );
  // result = intersect_bsp.toMesh();
  // movedMesh[4] = new ThreeBSP(result.geometry.translate(0,0,-thickness));
  // intersect_bsp = intersect_bsp.intersect( movedMesh[4] );

  // //movedMesh[1] = new ThreeBSP(object.translateY(2.5));
  // //movedMesh[1] = new ThreeBSP(object.geometry.translate(0,-2.5,0));
  // movedMesh[1] = new ThreeBSP(object.translateZ(2.5));
  // movedMesh[2] = new ThreeBSP(object.geometry.translate(0,0,-2.5));
  // for(var i = 0; i<movedMesh.length; i++){
  //   intersect_bsp = intersect_bsp.intersect( movedMesh[i] );
  //   console.log("hi");
  // }

  // emptyMat = intersect_bsp;
  emptyMat_mesh = intersect_bsp.toMesh();
  //emptyMat = intersect_bsp;

  // emptyMat = intersect_bsp.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
}

var lampResult;
var hollowBtn = document.getElementById("hollow_mode");
hollowBtn.addEventListener("click", function(){
  alert("This function has not been ready!");
  // var material = new THREE.MeshStandardMaterial({color:0x83d46a, side: THREE.DoubleSide});
  // mergedHidden = new THREE.Mesh(mergedHiddenGeometry, material);
  // if(mergedHidden  && advanceSwitch == "on"){
  //   scene.remove(mergedMesh);
  //   mergedHidden.geometry.center();
  //   hollow(mergedHidden); //取得由mergedHidden製作成的emptyMat
  //
  //   mergedMesh.geometry.center();
  //   //mergedMesh.translateY(1); //2.25
  //   var outerMix = new ThreeBSP(mergedMesh);
  //   emptyMat = new ThreeBSP(emptyMat_mesh);
  //   var hollowSub = outerMix.subtract(emptyMat);
  //   lampResult = hollowSub.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
  //   meshSize(lampResult);
  //
  //   lampResult.translateY(yFactor / 2);
  //   lampResult.rotateX(Math.PI);
  //   scene.add(lampResult);
  //   mergedMesh.geometry.dispose();
  //   mergedMesh.material.dispose();
  //   mergedMesh = undefined;
  //   alert("Lamp is successfully made!");
  // }
  // else if(mergedMesh == null){
  //   alert("Objects haven't been merged / Merged object has already been through advanced functions");
  // }
  // else if(advanceSwitch == "off"){
  //   alert("This function only supports solid modes");
  // }
});

//clear previous button
var clearPre = document.getElementById("clearPrevious");
clearPre.addEventListener("click", function(){
  if(ini>0 && mergeSwitch && scene.children.length > 2){
    // 用 scene.children[scene.children.length-1] 取代 mesh[ini-1] 更準確
    if(num>0){
      num = num-1;
    }
    if(Bnum>0){
      switch(scene.children[scene.children.length-1].geometry.name){
        case "cube":
          Bnum = Bnum - 8;
          break;
        case "seven":
          Bnum = Bnum - 4;
          break;
        case "tShape":
          Bnum = Bnum - 4;
          break;
        case "snake":
          Bnum = Bnum - 4;
          break;
        case "stick":
          Bnum = Bnum - 4;
          break;
        case "cover":
          Bnum = Bnum - 1.5;
          break;
        case "single":
          Bnum = Bnum - 1;
          break;
        // 換sample部分
        case "cup":
          Bnum = Bnum - 344;
          break;
        case "headphoneStand_lower":
          Bnum = Bnum - 58;
          break;
        case "headphoneStand_upper":
          Bnum = Bnum - 60;
          break;
        case "penHolder":
          Bnum = Bnum - 344;
          break;
        case "plantPot":
          Bnum = Bnum - 166;
          break;
        case "iphoneStand":
          Bnum = Bnum - 64;
          break;
      }
    }
    scene.children[scene.children.length-1].geometry.dispose();
    scene.children[scene.children.length-1].material.dispose();
    // remove必須放在後面 不然scene.children數量變了 -1後順序就不對了
    scene.remove(scene.children[scene.children.length-1]);
    // scene.remove(mesh[ini-1]);

    ini = ini-1;

    historyText.push('clear_previous');
    // ini = scene.children.length-1-1;
    // ini = ini-1必須放在if(ini>0)中，否則會往負數減少

    // 刪完之後檢查scene裡面還有沒有剩下的3dPhoto(seperate的話 不會一次刪全部 所以需要這邊)
    var still3dPhoto = null;
    for(var i=2; i<scene.children.length; i++){
      if(scene.children[i].geometry.name == "3dPhoto"){
        still3dPhoto = "yes";
        break;
      }
    }
    if(still3dPhoto != "yes"){
      if(mycanvas.className == "topMenuIcon imgCanvas"){
        mycanvas.classList.add("sr-only"); // 隱藏canvas
        mycontext.clearRect(0, 0, 60, 60); // 清空canvas裡面的內容
      }
    }
  }
  //clear previous button = ini有隨之減少
  else if(mergeSwitch == null){
    alert("Already merged! Please EXPORT or RESTART!");
  }
});

//clear selected button
var clearSelected = document.getElementById("clearSelected");
clearSelected.addEventListener("click", deleteSelected);

function deleteSelected(){
  if(mergeSwitch){
    if(selectedMesh && num>0){
      switch(selectedMesh.geometry.name){
        case "cube":
          Bnum = Bnum - 8;
          break;
        case "seven":
          Bnum = Bnum - 4;
          break;
        case "tShape":
          Bnum = Bnum - 4;
          break;
        case "snake":
          Bnum = Bnum - 4;
          break;
        case "stick":
          Bnum = Bnum - 4;
          break;
        case "cover":
          Bnum = Bnum - 1.5;
          break;
        case "single":
          Bnum = Bnum - 1;
          break;
        // 換sample部分
        case "cup":
          Bnum = Bnum - 344;
          break;
        case "headphoneStand_lower":
          Bnum = Bnum - 58;
          break;
        case "headphoneStand_upper":
          Bnum = Bnum - 60;
          break;
        case "penHolder":
          Bnum = Bnum - 344;
          break;
        case "plantPot":
          Bnum = Bnum - 166;
          break;
        case "iphoneStand":
          Bnum = Bnum - 64;
          break;
      }
      num = num-1;
    }
    ini = ini-1;

    historyText.push('clear_selected');

    scene.remove(selectedMesh);
    selectedMesh.geometry.dispose();
    selectedMesh.material.dispose();
    selectedMesh = null;

    // 檢查scene裡面還有沒有剩下的3dPhoto(seperate的話 不會一次刪全部 所以需要這邊)
    var still3dPhoto;
    for(var i=2; i<scene.children.length; i++){
      if(scene.children[i].geometry.name == "3dPhoto"){
        still3dPhoto = "yes";
        break;
      }
    }
    if(still3dPhoto != "yes"){
      if(mycanvas.className == "topMenuIcon imgCanvas"){
        mycanvas.classList.add("sr-only"); // 隱藏canvas
        mycontext.clearRect(0, 0, 60, 60); // 清空canvas裡面的內容
      }
    }
  }
  else{
    alert("Already merged! Please EXPORT or RESTART!");
  }

}

//clear all button
var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function(){
  historyText.push('clear_all');

  location.reload();
  // if(mergedMesh){
  //   mergedMesh.geometry.dispose();
  //   mergedMesh.material.dispose();
  //   mergedMesh = undefined;
  // }
  // if(moldResult){
  //   moldResult.geometry.dispose();
  //   moldResult.material.dispose();
  //   moldResult = undefined;
  // }
  // if(lampResult){
  //   lampResult.geometry.dispose();
  //   lampResult.material.dispose();
  //   lampResult = undefined;
  // }
  // // 多確認一次有沒有清光
  // if(scene.children.length > 2){
  //   for(var i=2; i<scene.children.length; i++){
  //     if(scene.children[i]){
  //       scene.children[i].geometry.dispose();
  //       scene.children[i].material.dispose();
  //       scene.remove(scene.children[i]);
  //     }
  //   }
  // }
  //
  // for(var i=0; i<mesh.length; i++){
  //   if(mesh[i]){
  //     scene.remove(mesh[i]);
  //     mesh[i].geometry.dispose();
  //     mesh[i].material.dispose();
  //     mesh[i] = undefined;
  //   }
  //   if(hidden[i]){
  //     hidden[i].geometry.dispose();
  //     hidden[i].material.dispose();
  //     hidden[i] = undefined;
  //   }
  // }
  //
  // if(mycanvas.className == "topMenuIcon imgCanvas"){
  //   mycanvas.classList.add("sr-only"); // 隱藏canvas
  //   mycontext.clearRect(0, 0, 60, 60); // 清空canvas裡面的內容
  // }
  // ini = 0;
  // num = 0;
  // Bnum = 0;
  // mergeSwitch = "on";
  // advanceSwitch = "on";
});

//move and rotate objects
var hiddenGeometry;
window.addEventListener("keydown", function(e){
  modalLock();
  if(modalDisplay == "no"){
    switch(e.keyCode){
      //move object
      case 39:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateX(5);
        }
        else{
          selectedMesh.translateX(10);
          // if(selectedMesh.children[0]){
          //   selectedMesh.children[0].translateX(10);
          // }
        }
        // console.log(hidden[0]);
        // console.log(selectedMesh.children[0]);
        break;
      case 37:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateX(-5);
        }
        else{
          selectedMesh.translateX(-10);
          // if(selectedMesh.children[0]){
          //   selectedMesh.children[0].translateX(-10);
          // }
        }
        break;
      case 38:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateZ(-5);
        }
        else{
          selectedMesh.translateZ(-10);
          // if(selectedMesh.children[0]){
          //   selectedMesh.children[0].translateZ(-10);
          // }
        }
        break;
      case 40:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateZ(5);
        }
        else{
          selectedMesh.translateZ(10);
          // if(selectedMesh.children[0]){
          //   selectedMesh.children[0].translateZ(10);
          // }
        }
        break;
      case 65:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateY(5);
        }
        else{
          selectedMesh.translateY(10);
          // if(selectedMesh.children[0]){
          //   selectedMesh.children[0].translateY(10);
          // }
        }
        break;
      case 83:
        if(selectedMesh.geometry.name == "text"){
          selectedMesh.translateY(-5);
        }
        else{
          selectedMesh.translateY(-10);
          if(selectedMesh.children[0]){
            selectedMesh.children[0].translateY(-10);
          }
        }
        break;
      //rotate object
      case 90:
        selectedMesh.rotateX(Math.PI/2);
        // if(selectedMesh.children[0]){
        //   selectedMesh.children[0].rotateX(Math.PI/2);
        // }
        break;
      case 88:
        selectedMesh.rotateY(Math.PI/2);
        // if(selectedMesh.children[0]){
        //   selectedMesh.children[0].rotateY(Math.PI/2);
        // }
        break;
      case 67:
        selectedMesh.rotateZ(Math.PI/2);
        // if(selectedMesh.children[0]){
        //   selectedMesh.children[0].rotateZ(Math.PI/2);
        // }
        break;
      case 189: // 放大縮小
        selectedMesh.geometry.scale(0.5, 0.5, 0.5);
        // if(selectedMesh.children[0]){
        //   selectedMesh.children[0].geometry.scale(0.5, 0.5, 0.5);
        // }
        break;
      case 187: // 放大縮小
        selectedMesh.geometry.scale(2, 2, 2);
        // if(selectedMesh.children[0]){
        //   selectedMesh.children[0].geometry.scale(2, 2, 2);
        // }
        break;
      case 46: // delete鍵
        deleteSelected();
        break;
      case 79: // "o" for centralize
        meshSize(selectedMesh);
        selectedMesh.geometry.center();
        selectedMesh.geometry.translate(0, 0, zFactor/2);
        break;
      case 80: // "p" key for clone()
        mesh[ini] = selectedMesh.clone();

        // 這邊需重新定義一次material 否則滑鼠移上去時 clone出來的物件會全部一起變色
        mesh[ini].material = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
        // if(selectedMesh.children[0]){ // 先確認有沒有(使用impoprt進來的就沒有) 沒有的話無法執行clone 所以會出錯
        //   hidden[ini] = selectedMesh.children[0].clone();
        // }
        scene.add(mesh[ini]);
        // mesh[ini].add(hidden[ini]);
        switch(selectedMesh.geometry.name){
          case "cube":
            Bnum = Bnum + 8;
            break;
          case "seven":
            Bnum = Bnum + 4;
            break;
          case "snake":
            Bnum = Bnum + 4;
            break;
          case "stick":
            Bnum = Bnum + 4;
            break;
          case "tShape":
            Bnum = Bnum + 4;
            break;
          case "cover":
            Bnum = Bnum + 1.5;
            break;
          case "single":
            Bnum = Bnum + 1;
            break;
        }
        // 把前一個還原成白色
        pre_selectedMesh = selectedMesh;
        pre_selectedMesh.material.color.set(0xffffff);

        selectedMesh = mesh[ini];
        // 點空白處時還原的是pre_selectedMesh的顏色 故這邊最後也要把pre設成這個
        pre_selectedMesh = selectedMesh;

        ini = ini+1;
        num = num+1;
        break;
      // 輸出 .fav 檔案的部分  重整 favAllData 的排列
      // case 84:
      //   // console.log(voxelAmountX);
      //   for(var i=0; i<favAllData.length; i + voxelAmountX){
      //     // favLineData.push([]);
      //     var tempLine = [];
      //     for(var j=i; j < i+voxelAmountX; j++){
      //       tempLine.push(favAllData[j]);
      //     }
      //     // line = line+1;
      //     dataToExport += tempLine.join();
      //     // console.log(tempLine.join(","));
      //   }
      //   console.log(dataToExport);
      //   break;
      // 調整初始STL用  可刪除
      // case 82:
      //   selectedMesh.translateZ(-0.85);
      //   selectedMesh.children[0].translateZ(-0.85);
      //   break;
      // case 84:
      //   selectedMesh.translateX(-0.85);
      //   selectedMesh.children[0].translateX(-0.85);
      //   break;
      // case 81:  // 調整大小用
      //   selectedMesh.geometry.scale(1.1, 1.1, 1.1);
      //   selectedMesh.children[0].geometry.scale(1.1, 1.1, 1.1);
      //   break;
      }
    }
  }, false);

//merge all the blocks into one piece
var mergeAll = document.getElementById("merge");
var mergedMesh = null;
var mergedHidden = null;
var mergedHiddenGeometry;
mergeAll.addEventListener("click", merging);
function merging(){
  if(scene.children.length > 2 && mergeSwitch){ // 先確認scene上面是有東西的

    // merge by geometry.merge directly (merge後的geometry位置不變)
    var singleGeometry = new THREE.Geometry();
    // scene.children從[2]開始才是匯入的方塊，前兩個物件是light
    for(var i=2; i<scene.children.length; i++){
      // 需先判斷scene中的物件屬於哪種geometry 若本身已經是Geometry()類型，再執行THREE.Geometry().fromBufferGeometry() 就會出錯 導致無法執行
      // if(scene.children[i].geometry.type == "BufferGeometry") 可以直接寫成下面這樣
      if(scene.children[i].geometry instanceof THREE.BufferGeometry){
        var geo = new THREE.Geometry().fromBufferGeometry(scene.children[i].geometry);
      }
      else{ // voxelized stl 是設定成Geometry型態 // 其他型態如:TextGeometry也是屬於有實體的geometry型態 可以直接merge
        var geo = scene.children[i].geometry;
      }

      // 移動時是設定移動mesh，geometry還停留在import進來的位置，updateMatrix()之後才會跟上現在mesh的位置
      scene.children[i].updateMatrix();
      singleGeometry.merge(geo, scene.children[i].matrix);
    }
    //console.log(singleGeometry.vertices);
    singleGeometry.mergeVertices();
    singleGeometry.verticesNeedUpdate = true;
    console.log("Merge succeeded");
    //console.log(singleGeometry.vertices);

    // 隱藏版geometry用  但目前為不開放
    var singleGeometry2 = new THREE.Geometry();
    if( hidden.length > 0 ){
      for(var i=0; i<hidden.length; i++){
        if(hidden[i]){ // 需先確認hidden[i]是否為空值 因為若一開始先輸入3D圖片的話 會占用一個ini 導致後面輸入的hidden[]從hidden[1]開始 hidden[0]就會變成undefined 無法執行
          var geo = new THREE.Geometry().fromBufferGeometry(hidden[i].geometry);
          hidden[i].updateMatrix();
          singleGeometry2.merge(geo, hidden[i].matrix);
        }
      }
      singleGeometry2.mergeVertices();
      singleGeometry2.verticesNeedUpdate = true;
    }

    // 手動消除重複的頂點
    // var cleanVertices = [];
    // for(var i=0; i<singleGeometry.vertices.length; i++){
    //   for(var j=0; j<singleGeometry.vertices.length; j++){
    //     if(j != i){
    //       if(singleGeometry.vertices[j].x == singleGeometry.vertices[i].x && singleGeometry.vertices[j].y == singleGeometry.vertices[i].y && singleGeometry.vertices[j].z == singleGeometry.vertices[i].z){
    //         singleGeometry.vertices[i] = "";
    //         singleGeometry.vertices[j] = "";
    //       }
    //     }
    //   }
    // }
    // for(var i=0; i<singleGeometry.vertices.length; i++){
    //   if(singleGeometry.vertices[i] !== ""){
    //     cleanVertices.push(singleGeometry.vertices[i]);
    //   }
    // }
    // console.log(cleanVertices);

    var material = new THREE.MeshStandardMaterial({color:0x83d46a, side: THREE.DoubleSide});
    mergedMesh = new THREE.Mesh(singleGeometry, material);
    mergedHiddenGeometry = singleGeometry2;
    //mergedHidden.translateY(50);
    //mergedHidden.geometry.translate(50,0,0);
    scene.add(mergedMesh);
    //scene.add(mergedHidden);

    if( mesh.length > 0 ){
      for(var i=0; i<mesh.length; i++){
        if(mesh[i]){
          scene.remove(mesh[i]);
        }
      }
    }
    console.log("SCENE has " + scene.children.length + " objects, including two lights and the merged mesh");

    // var serverInput = document.getElementById("serverInput");
    // serverInput.value = singleGeometry;
    // console.log(singleGeometry);
    // console.log(serverInput.value);

    document.getElementById("hollow_mode").classList.remove("btn-unavailable");
    document.getElementById("mold_mode").classList.remove("btn-unavailable");

    historyText.push('MERGE');

    firstMesh = null;
    pre_selectedMesh = null;
    selectedMesh = null;
    ini = 0;
    mergeSwitch = null;
    num = 1;
  }
  else if(scene.children.length < 3){
    alert("There is nothing to merge!");
  }
  else if(mergeSwitch == null){
    alert("Already merged!");
  }
}

//STLExporter
var exporter = new THREE.STLExporter();
var link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link );

function save( blob, filename ) {
  link.href = URL.createObjectURL( blob );
  link.download = filename;
  link.click();
}
function saveString( text, filename ) {
  save( new Blob( [ text ], { type: 'text/plain' } ), filename );
}
function saveArrayBuffer( buffer, filename ) {
  save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );
}

function exportBinary() {
  // 停止計時的timeout
  clearTimeout(t);

  // 下方的binary 設定為false的會就會直接輸出ASCII
  var result = exporter.parse( scene, { binary: true } ),
      mergedInput = document.getElementById("mergedInput"),
      historyInput = document.getElementById("historyInput"),
      timerInput = document.getElementById("timerInput"),
      submitBtn = document.getElementById("hiddenInput");

  mergedInput.value = result;
  historyInput.value = JSON.stringify({history: historyText});
  timerInput.value = JSON.stringify({Minute: timerM, Second: timerS});

  // 把hiddenInput獨立出來按  這樣可以在未通過if審核之前不觸發
  // 如果直接在html裡面用 for="hiddenInput" 觸發的話 無論有沒有通過if審核都會直接觸發
  // submitBtn.click();

  saveArrayBuffer( result, 'giftGO.stl' );
}

var exporting = document.getElementById("export");
exporting.addEventListener("click", function(){
  if(num>0 && mergeSwitch == null){
    historyText.push('Export_STL');

    exportBinary();
  }
  else{
    alert("Please merge before export");
  }
});

// FAV exporter
document.getElementById('exportFAV').addEventListener('click', function () {
  var voxels = [];

  for (var object of scene.children) {
    if (object.geometry && object.geometry.name == 'single') {
      var objectCopied = object.clone();
      objectCopied.position.x = object.position.z;
      objectCopied.position.y = object.position.x;
      objectCopied.position.z = object.position.y;
      voxels.push(objectCopied);
    }
  }

  var favExporter = new THREE.FAVExporter();
  var data = favExporter.parse(voxels, {}, 10);
  var blob = new Blob([data], {type: 'application/xml'});
  var date = new Date();
  var timestamp = [date.getHours(), date.getMinutes()].join('');

  // if(scene.children.length>2 && mergeSwitch == null){
    save(blob, "giftGO.fav");
  // }
  // else{
    // alert("Please merge before export");
  // }
});

//use raycaster() to select objects
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector3(0,0,0);
var selectedMesh = null;
var firstMesh = null;
var touch;
var pre_selectedMesh = null;

function onMouseMove( event ) {
   event.preventDefault();
 // calculate mouse position in normalized device coordinates
 // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderHeight ) * 2 + 1;
 }

 // (重要!) 防止在 modal 的狀況下誤選了方塊並執行移動或是複製等指令
 var modalDisplay = "no";

 function modalLock(){
   modalDisplay = "no";
   var modals = document.getElementsByClassName("modal");
   for(var i=0; i<modals.length; i++){
     if(modals[i].className == "modal fade show"){
       modalDisplay = "yes";
     }
   }
 }

//selecting object by mouse clicking
webGLRenderer.domElement.addEventListener("click", clickChoose);
function clickChoose() {
  modalLock();
  if(touch.length>0 && modalDisplay == "no"){
    //點下時有碰到該物件才反應
    if(pre_selectedMesh){
      pre_selectedMesh.material.color.setHex(0xffffff);
      //讓上一個選擇變回原色可直接用selectedMesh  但分開較清楚
    }
    selectedMesh = firstMesh;
    pre_selectedMesh = selectedMesh;
  }
  else{
    if(modalDisplay == "no"){
      if(pre_selectedMesh){
        pre_selectedMesh.material.color.setHex(0xffffff);
        //讓上一個選擇變回原色可直接用selectedMesh  但分開較清楚
      }
      selectedMesh = null;
    }
  }
}

//update the view constantly then sctually see the change of camera/scene/object...
//ini = 陣列盒子數量  num = 實際物件數量(用clear selected之後有所不同)
var num = 0;
var Bnum = 0;
var pre_firstMesh;

render();
function render() {

  if(status === "running"){
    displayLoader.className = "loader-background";
  }
  else if(status === "complete"){
    displayLoader.classList.add("loader-hide");
  }
  //counter number
  document.getElementById("counter").innerHTML = "Object: " + num;
  document.getElementById("blockCounter").innerHTML = "Total blocks: " + Bnum;
   // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
   // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children );

  touch = intersects;
  if(intersects.length>0 && mergeSwitch){ // && ini>0){
     //變色語法 intersects[0].object.material.color.set( 0xff0000 );
     //先將交集的第一個物件存出來
     firstMesh = intersects[0].object;
     firstMesh.material.color.set( 0xff0000 );

     // 直接物件移動到另一個物件的時候 也要還原前一個被碰到的物件的顏色
     // if(selectedMesh != pre_firstMesh && pre_firstMesh != null && pre_firstMesh != firstMesh){
     if(pre_firstMesh && pre_firstMesh != selectedMesh && pre_firstMesh != firstMesh){
       pre_firstMesh.material.color.set(0xffffff);
     }
       // pre_firstMesh.material.color.set(0xffffff);
     // }

     pre_firstMesh = firstMesh;

     //變色

   }
   else{
     //先回歸原色
     if(pre_firstMesh){
      pre_firstMesh.material.color.set(0xffffff);
    }
     if(selectedMesh){
      selectedMesh.material.color.set(0xff0000);
    }

    }
    controls.update();
    webGLRenderer.clear();
    webGLRenderer.render(scene2, camera);
    webGLRenderer.clearDepth();
    webGLRenderer.render(scene, camera);
    requestAnimationFrame(render);
}
