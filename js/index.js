//3d part
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / 500, 1, 10000);
var webGLRenderer = new THREE.WebGLRenderer();
var exporter = new THREE.STLExporter();
//關閉.autoClear方法讓多個scene並存
webGLRenderer.autoClear = false;
webGLRenderer.setClearColor(0xEEEEEE);
webGLRenderer.setSize(window.innerWidth, 500);
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
var ini = 0;
function readSTL(event){
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
    loader.load(reader.result, function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    //mesh.geometry.center();
    scene.add(mesh[ini]);
    ini = ini+1;
    num = num+1;
    // var url = reader.result;
    // switch(url){
    //   case 'stl/4_4 cube.stl':
    //     console.log("hi");
    //     Bnum = Bnum+8;
    //     break;
    //   case 'stl/seven.stl':
    //     Bnum = Bnum+4;
    //     break;
    // }
        });
  }
}

//menu icon switch
var mergeSwitch = "a";
//loading the default STL files
var cube = document.getElementById("cube");
cube.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/4_4 cube.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    geometry.center();
    mesh[ini].position.y = 10;
    scene.add(mesh[ini]);
    preCount[ini] = 8;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+8;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var seven = document.getElementById("seven");
seven.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/seven.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    preCount[ini] = 4;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+4;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var snake = document.getElementById("snake");
snake.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/snake_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    preCount[ini] = 4;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+4;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var stick = document.getElementById("stick");
stick.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/stick.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    preCount[ini] = 4;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+4;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var tShape = document.getElementById("T");
tShape.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/T.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    preCount[ini] = 4;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+4;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

var cover = document.getElementById("top");
cover.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/top.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    preCount[ini] = 1.5;
    ini = ini+1;
    num = num+1;
    Bnum = Bnum+1.5;
        });
  }
  else{
    alert("Already merged! Please EXPORT STL or RESTART!");
  }
});

//clear previous button
var preCount = [];
var clearPre = document.getElementById("clearPrevious");
clearPre.addEventListener("click", function(){
  if(ini>0){
    if(num>0){
      num = num-1;
    }
    if(Bnum>0){
      Bnum = Bnum - preCount[ini-1];
    }
    scene.remove(mesh[ini-1]);
    //mesh[ini-1] = null;
    ini = ini-1;
  }
  //clear previous button = ini有隨之減少
});
//clear selected button
var clearSelected = document.getElementById("clearSelected");
clearSelected.addEventListener("click", function(){
  console.log(selectedMesh.id);
  scene.remove(selectedMesh);
//取消因為clearSelected而產生的clearPrevious的空格
  //if(selectedMesh != mesh[ini-1]){
    //for(var i=0; i<mesh.length+1; i++){
      //if(selectedMesh == mesh[i]){
        //for(var j=i; j<mesh.length+1; j++){
        //  mesh[j] = mesh[j+1];
          //mesh[j+1] = null;
          //console.log("hi");
        //}
    //  }
    //  else{
      //    break;
      //  }
    //  }
    //ini = ini-1;
  //}
  if(selectedMesh && num>0){
    selectedMesh = null;
    num = num-1;
  }
  //clear selected button = ini沒有隨之減少
});
//clear all button
var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function(){
  for(var i=0; i<mesh.length; i++){
    scene.remove(mesh[i]);
    mesh[i] = null;
  }
  ini = 0;
  num = 0;
  Bnum = 0;
  mergeSwitch = "a";
});

//move and rotate objects
var degreeX = true;
var degreeY = true;
  window.addEventListener("keydown", function(e){
    switch(e.keyCode){
      //move object
      case 39:
        selectedMesh.translateX(10);
        break;
      case 37:
        selectedMesh.translateX(-10);
        break;
      case 38:
        selectedMesh.translateZ(-10);
        break;
      case 40:
        selectedMesh.translateZ(10);
        break;
      case 65:
        selectedMesh.translateY(10);
        break;
      case 83:
        selectedMesh.translateY(-10);
        break;
      //rotate object
      case 90:
        // if(degreeX == true){
        //   selectedMesh.rotateX(-Math.PI/2);
        //   degreeX = false;
        //   break;
        // }
        // if(degreeX == false){
          selectedMesh.rotateX(Math.PI/2);
          break;
        //   degreeX = true;
        //   break;
        // }
      case 88:
        selectedMesh.rotateY(Math.PI/2);
        break;
      case 67:
        selectedMesh.rotateZ(Math.PI/2);
      }
    }, false);

//merge all the blocks into one piece
//var combined = new THREE.Geometry();
var mergeAll = document.getElementById("merge");
mergeAll.addEventListener("click", merging);
function merging(){
  for(var i=0; i<mesh.length; i++){
   mesh[i].material.color.set(0x83d46a);
  }
  firstMesh = null;
  preMesh = null;
  selectedMesh = null;
  ini = 0;
  mergeSwitch = null;
  //if(ini>0){
    //for(var i=0; i<mesh.length; i++){
      //mesh[i].updateMatrix();
    //  THREE.GeometryUtils.merge(combined, mesh[i]);
      //combined.merge(combined, mesh[i]);
    //  console.log("hi");
    //}
    //for(var i=0; i<ini; i++){
    //  THREE.GeometryUtils.merge(combined, mesh[i].geometry);
    //  scene.remove(mesh[i]);
    //}
    //mesh.updateMatrix();
    //mesh.geometry.merge(new THREE.BoxGeometry(100, 100, 100));
    //mesh.geometry.dynamic = true;
    //combined.mergeMesh(mesh);
    //var combined = THREE.BufferGeometryUtils.mergeBufferGeometries( mesh );
    //var mergeMat = new THREE.MeshStandardMaterial({color:0x83d46a, side: THREE.DoubleSide});
    //var mergedMesh = new THREE.Mesh(combined, mergeMat);
    //scene.add(mergedMesh);
    //ini = 0;
  //}
}

//STLExporter
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
var result = exporter.parse( scene, { binary: true } );
saveArrayBuffer( result, 'LeTris.stl' );
}

var exporting = document.getElementById("export");
exporting.addEventListener("click", function(){
  if(num>0 && mergeSwitch == null){
    exportBinary();
  }
  else{
    alert("Please merge before export");
  }
});

//use raycaster() to select objects
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector3(0,0,0);
var selectedMesh = null;
var firstMesh = null;
var touch;
var preMesh = null;

function onMouseMove( event ) {
   event.preventDefault();
 // calculate mouse position in normalized device coordinates
 // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / 500 ) * 2 + 1;
 }

//selecting object by mouse clicking
webGLRenderer.domElement.addEventListener("click", clickChoose);
function clickChoose() {
  if(touch.length>0){
    //點下時有碰到該物件才反應
    if(preMesh){
      preMesh.material.color.setHex(0xffffff);
      //讓上一個選擇變回原色可直接用selectedMesh  但分開較清楚
    }
    //for(var i=0; i<mesh.length; i++){
  //    mesh[i].material.color.setHex(0xffffff);
  //  }
    selectedMesh = firstMesh;
    preMesh = selectedMesh;
  }
  else{
    selectedMesh = null;
  }
}

//update the view constantly then sctually see the change of camera/scene/object...
//ini = 陣列盒子數量  num = 實際物件數量(用clear selected之後有所不同)
var num = 0;
var Bnum = 0;
render();
function render() {
  //counter number
  document.getElementById("counter").innerHTML = "Object: " + num;
  document.getElementById("blockCounter").innerHTML = "Total Block: " + Bnum;
   // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
   // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children );
  touch = intersects;
  if(intersects.length>0 && ini>0){
     //變色語法 intersects[0].object.material.color.set( 0xff0000 );
     //先將交集的第一個物件存出來
     firstMesh = intersects[0].object;
     //變色
     firstMesh.material.color.set( 0xff0000 );
    }
   else{
     //先回歸原色
     if(firstMesh){
      firstMesh.material.color.set(0xffffff);
    }
     // for(var i=0; i<mesh.length; i++){
     //    mesh[i].material.color.setHex(0xffffff);
      //}
     if (selectedMesh) {
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
