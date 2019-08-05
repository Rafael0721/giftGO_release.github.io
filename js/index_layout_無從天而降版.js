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
square.addEventListener("click", function(){
  //用if來判定當下是暗著的
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_square.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    square.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_square.className = "col-md-6 menuGroup";
    }, 100);
  }
});

circular.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_circular.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    circular.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_circular.className = "col-md-6 menuGroup";
    }, 100);
  }
});

cut.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_cut.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    cut.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_cut.className = "col-md-6 menuGroup";
    }, 100);
  }
});

hollow_1.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_hollow_1.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    hollow_1.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_hollow_1.className = "col-md-6 menuGroup";
    }, 100);
  }
});

hollow_2.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_hollow_2.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    hollow_2.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_hollow_2.className = "col-md-6 menuGroup";
    }, 100);
  }
});

hollow_3.addEventListener("click", function(){
  var group_light = document.getElementsByClassName("menuGroup")[0];
  if(group_hollow_3.className === "col-md-6 menuGroup2 position-absolute"){
    group_light.className = "col-md-6 menuGroup2";
    modeAllDown();
    hollow_3.className = "modeMenu-icon-up";
    //為避免按鍵瞬間跑版，在setTimeout後才加入position-absolute
    setTimeout(function(){
      group_light.classList.add("position-absolute");
      group_hollow_3.className = "col-md-6 menuGroup";
    }, 100);
  }
});


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
var hidden = [];
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
    if(mergeSwitch){
      loader.load(reader.result, function (geometry) {
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      mesh[ini].scale.set(1, 1, 1);
      scene.add(mesh[ini]);
      hidden[ini] = mesh[ini].clone();
      //mesh[ini].add(hidden[ini]);
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
    else{
      alert("Already merged! Please EXPORT STL or RESTART!");
    }
  }
}

//menu icon switch
var mergeSwitch = "a";
//loading the default STL files
//做出單顆方塊後再直接用Letris環境疊出俄羅斯方塊，之後插入才不會產生跑位
var cube = document.getElementById("cube");
cube.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/hide/4_4 cube_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      geometry.center();
      //geometry.translate(0, 90, 0);
      //hidden[ini].position.y = 10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/4_4 cube.stl", function (geometry) {
      var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
      mesh[ini] = new THREE.Mesh(geometry, mat);
      geometry.name = "cube";
      mesh[ini].scale.set(1, 1, 1);
      geometry.center();
      // mesh[ini].position.y = 10;
      geometry.translate(0, 100, 0);
      //group.add(mesh[ini]);
      scene.add(mesh[ini]);
      mesh[ini].add(hidden[ini]);
        });

    function drop(){
      if(mesh[ini]){
        mesh[ini].geometry.computeBoundingBox();
        if(mesh[ini].geometry.boundingBox.min.y > 0){
          mesh[ini].geometry.translate(0, -10, 0);
          setTimeout(drop, 30);
        }
        if(mesh[ini].geometry.boundingBox.min.y == 0){
          preCount[ini] = 8;
          ini = ini+1;
          num = num+1;
          Bnum = Bnum+8;
        }
      }
    }
    // 第一次執行drop()需設有timeOut 否則同時執行時 mesh[ini]還是空值 就不重複執行了
    setTimeout(drop, 30);

    // var 或是 function 都算是"定義式" 在JS引擎中，並非完全照順序，定義式會優先被執行(預編譯)
    // 所以若把以下定義式寫在loader.load()的外面，會比loader.load()優先被執行
    // 進而影響到mesh[ini]的填序，ini[0]將為空值(被跳過)
    // preCount[ini] = 8;
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
    loader.load("stl/hide/seven_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/seven.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    mesh[ini].add(hidden[ini]);
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
    loader.load("stl/hide/snake_1_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/snake_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    mesh[ini].add(hidden[ini]);
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
    loader.load("stl/hide/stick_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/stick.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    mesh[ini].add(hidden[ini]);
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
    loader.load("stl/hide/T_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/T.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    mesh[ini].add(hidden[ini]);
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
    loader.load("stl/hide/top_hide.stl", function (geometry) {
      //hidden的material必須加上transparent:true && opacity: 0, 使其不會顯示出來
      var mat = new THREE.MeshStandardMaterial({color:0x0000ff, transparent: true, side: THREE.DoubleSide, opacity: 0});
      hidden[ini] = new THREE.Mesh(geometry, mat);
      hidden[ini].scale.set(1, 1, 1);
      hidden[ini].position.y = -10;
      geometry.name = "hidden";
      // hidden[ini].parent = group;
      //group.add(hidden[ini]);
        });
    loader.load("stl/top.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
    mesh[ini].scale.set(1, 1, 1);
    scene.add(mesh[ini]);
    mesh[ini].add(hidden[ini]);
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

var cube2 = document.getElementById("cube2");
cube2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/4_4_cube_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cube";
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

var tShape2 = document.getElementById("T2");
tShape2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/T_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
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

var seven2 = document.getElementById("seven2");
seven2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/seven_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
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

var snake2 = document.getElementById("snake2");
snake2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/snake_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
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

var stick2 = document.getElementById("stick2");
stick2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/stick_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
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

var cover2 = document.getElementById("top2");
cover2.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/2ver/top_2ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
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

var cube3 = document.getElementById("cube3");
cube3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/4_4_cube_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cube";
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

var tShape3 = document.getElementById("T3");
tShape3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/T_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
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

var seven3 = document.getElementById("seven3");
seven3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/seven_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
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

var snake3 = document.getElementById("snake3");
snake3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/snake_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
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

var stick3 = document.getElementById("stick3");
stick3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/stick_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
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

var cover3 = document.getElementById("top3");
cover3.addEventListener("click", function(){
  if(mergeSwitch){
    loader.load("stl/3ver/top_3ver.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
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

var advanceSwitch = "on";
var cube4 = document.getElementById("cube4");
cube4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/4_4_cube_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cube";
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

var tShape4 = document.getElementById("T4");
tShape4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/T_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
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

var seven4 = document.getElementById("seven4");
seven4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/seven_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
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

var snake4 = document.getElementById("snake4");
snake4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/snake_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
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

var stick4 = document.getElementById("stick4");
stick4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/stick_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
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

var cover4 = document.getElementById("top4");
cover4.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_1/top_hollow_1.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
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

var cube5 = document.getElementById("cube5");
cube5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/4_4_cube_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cube";
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

var tShape5 = document.getElementById("T5");
tShape5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/T_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
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

var seven5 = document.getElementById("seven5");
seven5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/seven_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
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

var snake5 = document.getElementById("snake5");
snake5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/snake_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
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

var stick5 = document.getElementById("stick5");
stick5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/stick_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
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

var cover5 = document.getElementById("top5");
cover5.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_2/top_hollow_2.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
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

var cube6 = document.getElementById("cube6");
cube6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/4_4_cube_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cube";
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

var tShape6 = document.getElementById("T6");
tShape6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/T_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "tShape";
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

var seven6 = document.getElementById("seven6");
seven6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/seven_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "seven";
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

var snake6 = document.getElementById("snake6");
snake6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/snake_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "snake";
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

var stick6 = document.getElementById("stick6");
stick6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/stick_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "stick";
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

var cover6 = document.getElementById("top6");
cover6.addEventListener("click", function(){
  if(mergeSwitch){
    advanceSwitch = "off";
    loader.load("stl/hollow_3/top_hollow_3.stl", function (geometry) {
    var mat = new THREE.MeshStandardMaterial({color:0xffffff, side: THREE.DoubleSide});
    mesh[ini] = new THREE.Mesh(geometry, mat);
    geometry.name = "cover";
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

// molding from merged mesh
var xFactor;
var yFactor;
var zFactor;
function meshSize(object){
  object.geometry.computeBoundingBox();
  //取得merge後的物體x,y,z分別的尺寸
  xFactor = object.geometry.boundingBox.max.x - object.geometry.boundingBox.min.x;
  yFactor = object.geometry.boundingBox.max.y - object.geometry.boundingBox.min.y;
  zFactor = object.geometry.boundingBox.max.z - object.geometry.boundingBox.min.z;
}

//宣告molding function所需變數
var mold, moldCube, mold_bsp, prey_bsp, subtract_bsp, moldResult;

mold = document.getElementById("mold_mode");
mold.addEventListener("click", function(){
  if(mergedMesh && advanceSwitch == "on"){
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
    alert("Successfully molded");
  }
  else if(mergedMesh == null){
    alert("Please merge first");
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
  if(mergedHidden  && advanceSwitch == "on"){
    scene.remove(mergedMesh);
    mergedHidden.geometry.center();
    hollow(mergedHidden); //取得由mergedHidden製作成的emptyMat

    mergedMesh.geometry.center();
    //mergedMesh.translateY(1); //2.25
    var outerMix = new ThreeBSP(mergedMesh);
    emptyMat = new ThreeBSP(emptyMat_mesh);
    var hollowSub = outerMix.subtract(emptyMat);
    lampResult = hollowSub.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
    meshSize(lampResult);
    lampResult.translateY(yFactor / 2);
    lampResult.rotateX(Math.PI);
    scene.add(lampResult);
  }
  else if(mergedMesh == null){
    alert("Please merge first");
  }
  else if(advanceSwitch == "off"){
    alert("This function only supports solid modes");
  }
});

//clear previous button
var preCount = [];
var clearPre = document.getElementById("clearPrevious");
clearPre.addEventListener("click", function(){
  if(ini>0){
    if(mesh[ini-1].geometry.name !== "noExist"){
      if(num>0){
        num = num-1;
      }
      if(Bnum>0){
        Bnum = Bnum - preCount[ini-1];
      }
    }
    else{
      alert("Already removed by CLEAR SELECTED, please continue!");
    }
    scene.remove(mesh[ini-1]);
    mesh[ini-1].geometry.dispose();
    mesh[ini-1].material.dispose();
    mesh[ini-1] = undefined;
    ini = ini-1;
    //ini = ini-1必須放在if(ini>0)中，否則會往負數減少
  }
  //clear previous button = ini有隨之減少
});
//clear selected button
var clearSelected = document.getElementById("clearSelected");
clearSelected.addEventListener("click", function(){
  if(selectedMesh && num>0 && Bnum>0){
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
    }
    num = num-1;
  }
  scene.remove(selectedMesh);
  //更改geometry.name避免因為clearSelected而產生的clearPrevious的空格
  selectedMesh.geometry.name = "noExist";
  selectedMesh = null;
  //clear selected button = ini沒有隨之減少
});
//clear all button
var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function(){
  while(scene.children.length > 2){
    scene.remove(scene.children[2]);
     }
  if(mergedMesh){
    mergedMesh.geometry.dispose();
    mergedMesh.material.dispose();
    mergedMesh = undefined;
  }
  if(moldResult){
    moldResult.geometry.dispose();
    moldResult.material.dispose();
    moldResult = undefined;
  }
  if(lampResult){
    lampResult.geometry.dispose();
    lampResult.material.dispose();
    lampResult = undefined;
  }
  for(var i=0; i<mesh.length; i++){
    scene.remove(mesh[i]);
    mesh[i].geometry.dispose();
    mesh[i].material.dispose();
    mesh[i] = undefined;
    hidden[i].geometry.dispose();
    hidden[i].material.dispose();
    hidden[i] = undefined;
  }
  ini = 0;
  num = 0;
  Bnum = 0;
  mergeSwitch = "a";
});

// function moveHide(object){
//   if(object.geometry.name == "cube"){
//     hiddenGeometry = cube_hide;
//   }
// }

//move and rotate objects
var hiddenGeometry;
window.addEventListener("keydown", function(e){
  switch(e.keyCode){
    //move object
    case 39:
      selectedMesh.translateX(10);
      selectedMesh.children[0].translateX(10);
      // console.log(hidden[0]);
      // console.log(selectedMesh.children[0]);
      break;
    case 37:
      selectedMesh.translateX(-10);
      selectedMesh.children[0].translateX(-10);
      break;
    case 38:
      selectedMesh.translateZ(-10);
      selectedMesh.children[0].translateZ(-10);
      break;
    case 40:
      selectedMesh.translateZ(10);
      selectedMesh.children[0].translateZ(10);
      break;
    case 65:
      selectedMesh.translateY(10);
      selectedMesh.children[0].translateY(10);
      break;
    case 83:
      selectedMesh.translateY(-10);
      selectedMesh.children[0].translateY(-10);
      break;
    //rotate object
    case 90:
      selectedMesh.rotateX(Math.PI/2);
      selectedMesh.children[0].rotateX(Math.PI/2);
      break;
    case 88:
      selectedMesh.rotateY(Math.PI/2);
      selectedMesh.children[0].rotateY(Math.PI/2);
      break;
    case 67:
      selectedMesh.rotateZ(Math.PI/2);
      selectedMesh.children[0].rotateZ(Math.PI/2);
      break;
    // 調整初始STL用  可刪除
    case 82:
      selectedMesh.translateZ(-0.85);
      selectedMesh.children[0].translateZ(-0.85);
      break;
    case 84:
      selectedMesh.translateX(-0.85);
      selectedMesh.children[0].translateX(-0.85);
      break;
    }
  }, false);

//merge all the blocks into one piece
var mergeAll = document.getElementById("merge");
var mergedMesh = null;
var mergedHidden = null;
mergeAll.addEventListener("click", merging);
function merging(){
  // merge by ThreeCSG.js (BSP後的geometry位置會跑回原位，需在上下左右移動mesh之前先生成BSP，並一起做移動)
  // var geo = new THREE.Geometry().fromBufferGeometry(scene.children[2].geometry);
  // var sceneBSP = new ThreeBSP(geo);
  // for(var i=3; i<scene.children.length; i++){
  //   var geo2 = new THREE.Geometry().fromBufferGeometry(scene.children[i].geometry);
  //   var childrenBSP = new ThreeBSP(geo2);
  //   sceneBSP = sceneBSP.union( childrenBSP );
  // }
  // var mg = sceneBSP.toMesh(new THREE.MeshStandardMaterial({color:0x4ab3df, side: THREE.DoubleSide}));
  // mg.scale.set(1,1,1);
  // scene.add(mg);
  // console.log(mg);

  // merge by geometry.merge directly (merge後的geometry位置不變)
  var singleGeometry = new THREE.Geometry();
  // scene.children從[2]開始才是匯入的方塊，前兩個物件是light
  // var geo = new THREE.Geometry().fromBufferGeometry(scene.children[2].geometry);
  // scene.children[2].updateMatrix();
  // singleGeometry.merge(geo, scene.children[2].matrix);
  for(var i=2; i<scene.children.length; i++){
    var geo = new THREE.Geometry().fromBufferGeometry(scene.children[i].geometry);
    scene.children[i].updateMatrix();
    singleGeometry.merge(geo, scene.children[i].matrix);
  }
  //console.log(singleGeometry.vertices);
  singleGeometry.mergeVertices();
  singleGeometry.verticesNeedUpdate = true;
  //console.log(singleGeometry.vertices);

  var singleGeometry2 = new THREE.Geometry();
  for(var i=0; i<hidden.length; i++){
    var geo = new THREE.Geometry().fromBufferGeometry(hidden[i].geometry);
    hidden[i].updateMatrix();
    singleGeometry2.merge(geo, hidden[i].matrix);
  }
  singleGeometry2.mergeVertices();
  singleGeometry2.verticesNeedUpdate = true;

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
  mergedHidden = new THREE.Mesh(singleGeometry2, material);
  //mergedHidden.translateY(50);
  //mergedHidden.geometry.translate(50,0,0);
  scene.add(mergedMesh);
  //scene.add(mergedHidden);

  for(var i=0; i<mesh.length; i++){
    scene.remove(mesh[i]);
  }
  console.log("SCENE has " + scene.children.length + " objects, including two lights and the merged mesh");
  firstMesh = null;
  preMesh = null;
  selectedMesh = null;
  ini = 0;
  mergeSwitch = null;
  num = 1;
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
  if(intersects.length>0 && mergeSwitch){// && ini>0){
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
