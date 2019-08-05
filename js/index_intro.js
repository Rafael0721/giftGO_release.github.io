
unveil();
function unveil(){
  document.getElementById("cover").classList.add("white-cover-hidden");

  // dis掉cover之後才能按得到畫面上的按鈕
  setTimeout(function(){
    document.getElementById("cover").classList.add("white-cover-dis");
  }, 1000);
}

var mail = document.getElementById('mailPage');
mail.addEventListener("click", openPage);

function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

// 打開網頁時先執行一次
renderBGvideo();
// 改變視窗大小時再做檢查  這樣可以不用設定setInterval();消耗過多資源
window.onresize = function(event){
  renderBGvideo();
};

function renderBGvideo(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  var video = document.getElementById("bgVid");
  // 比16:9更扁時
  if(h < w * 9/16){
    video.style.width = "100%";
    video.style.height = "auto";
  }
  // 比16:9更高時
  if(h > w * 9/16){
    video.style.width = "auto";
    video.style.height = "100%";
  }
}

// modal circle selection
var circle1 = document.getElementById("modalCircle1"),
    circle2 = document.getElementById("modalCircle2"),
    circle3 = document.getElementById("modalCircle3"),
    experience = document.getElementById("experience");

experience.value = "No CAD experience";

function circleAllEmpty(){
  circle1.className = "selection-circle";
  circle2.className = "selection-circle";
  circle3.className = "selection-circle";
}

circle1.addEventListener("click", function(){
  circleAllEmpty();
  circle1.className = "selection-circle-pressed";
  experience.value = "No CAD experience";
});
circle2.addEventListener("click", function(){
  circleAllEmpty();
  circle2.className = "selection-circle-pressed";
  experience.value = "Intermediate CAD experience";
});
circle3.addEventListener("click", function(){
  circleAllEmpty();
  circle3.className = "selection-circle-pressed";
  experience.value = "Advanced CAD experience";
});

// modal check
var userName = document.getElementById("userName"),
    age = document.getElementById("userAge"),
    gender = document.getElementById("userGender"),
    totalInfo = document.getElementById("userInfo"),
    submit = document.getElementById("submitInfo"),
    hiddenInput = document.getElementById("hiddenInput");
    // changePage = document.getElementById("afterSubmit");

submit.addEventListener("click", function(){
  var reg = /^([1-9][0-9]*){1,3}$/; // 正則(regular expression) 驗證非0的正整數
  if(userName.value){
    if(age.value && reg.test(age.value)){
      if(gender.value){
        // 把hiddenInput獨立出來按  這樣可以在未通過if審核之前不觸發
        // 如果直接在html裡面用 for="hiddenInput" 觸發的話 無論有沒有通過if審核都會直接觸發
        hiddenInput.click();
      } else{
        alert("Please fill the gender blank before submit");
      }
    } else{
      alert("Age input only accepts numbers");
    }
  } else{
    alert("Please fill the name blank before submit");
  }
});



// scroll & show
window.addEventListener("scroll", function(){
  var ypos = window.pageYOffset;
  var introY = document.getElementById("introBlock").offsetTop;
  var featureY = document.getElementById("functionBlock").offsetTop;
  var galleryY = document.getElementById("galleryBlock").offsetTop;
  var bottomY = document.getElementById("bottomBlock").offsetTop;

  if(ypos > 1){
    document.getElementById("arrowSymbol").className = "arrow";
  } else{
    document.getElementById("arrowSymbol").className = "arrow arrow-show";
  }

  if(ypos > 10){
    document.getElementById("navRow").classList.add("navRow-background");
  } else{
    document.getElementById("navRow").className = "navRow";
  }

  if(ypos > introY-window.innerHeight*0.75){
    document.getElementById("introContent").className = "content-size intro-content-block";
    document.getElementById("introTitle").className = "title-size intro-title";
  } else {
    document.getElementById("introContent").className = "content-size intro-content-block up-down-block-moved";
    document.getElementById("introTitle").className = "title-size intro-title intro-title-moved";
  }

  if(ypos > featureY-window.innerHeight*0.75){
    document.getElementById("featureContent").className = "content-size function-content-block";
    document.getElementById("featureTitle").className = "title-size intro-title";
    // 滑到該div後才依序加入動畫
    setTimeout(function(){
      document.getElementById("circleIcon1").classList.add("circle-icon-animate");
    }, 1000);
    setTimeout(function(){
      document.getElementById("circleIcon2").classList.add("circle-icon-animate");
    }, 2000);
    setTimeout(function(){
      document.getElementById("circleIcon3").classList.add("circle-icon-animate");
    }, 3000);
    setTimeout(function(){
      document.getElementById("circleIcon4").classList.add("circle-icon-animate");
    }, 4000);
    setTimeout(function(){
      document.getElementById("circleIcon5").classList.add("circle-icon-animate");
    }, 5000);
  } else{
    document.getElementById("featureContent").className = "content-size function-content-block up-down-block-moved";
    document.getElementById("featureTitle").className = "title-size intro-title function-title-moved";
  }

  if(ypos > galleryY-window.innerHeight*0.75){
    document.getElementById("galleryTitle").className = "title-size intro-title";
    document.getElementById("galleryImg1").classList.remove("gallery-img-hide");
    setTimeout(function(){
      document.getElementById("galleryImg2").classList.remove("gallery-img-hide");
    }, 200);
    setTimeout(function(){
      document.getElementById("galleryImg3").classList.remove("gallery-img-hide");
    }, 400);
    setTimeout(function(){
      document.getElementById("galleryImg4").classList.remove("gallery-img-hide");
    }, 600);
    setTimeout(function(){
      document.getElementById("galleryImg5").classList.remove("gallery-img-hide");
    }, 800);
    setTimeout(function(){
      document.getElementById("galleryImg6").classList.remove("gallery-img-hide");
    }, 1000);
  }

  if(ypos > bottomY - window.innerHeight*0.75){
    document.getElementById("bottomBlock").classList.remove("up-down-block-moved");
  } else{
    document.getElementById("bottomBlock").classList.add("up-down-block-moved");
  }

});

var introBlock = document.getElementById("introBlock");
var introTrans = document.getElementById("introTrans");
introBlock.addEventListener("mouseover", function(){
  introTrans.className = "intro-white-trans";
  // console.log("hi");
});
introBlock.addEventListener("mouseout", function(){
  introTrans.className = "intro-white";
  // console.log("hi");
});



//var topImg = document.getElementById('topImg');

// var top1 = document.getElementById('img-1');
// var top2 = document.getElementById('img-2');
// var top3 = document.getElementById('img-3');
// var imgSet = document.getElementsByClassName('top-img');
var slogan1 = document.getElementById('topSlogan1');
var slogan2 = document.getElementById('topSlogan2');
var slogan3 = document.getElementById('topSlogan3');
var sloganShow = document.getElementsByClassName("slogan-show");

//top-img clock automatic img change
var num = 2;
setTimeout(showSlides, 6000);

function showSlides(){
  //hide all img first
  // for(var i=0; i < imgSet.length; i++){
  //   imgSet[i].classList.add("top-hidden");
  // }
  sloganShow[0].className = "central-slogan slogan-hidden";
  if(num == 1){
    // top1.className = "top-img img-abs";
    setTimeout(function(){
      slogan1.className = "central-slogan slogan-show";
      // slogan2.classList.add("position-absolute");
      // slogan3.classList.add("position-absolute");
      slogan2.classList.add("slogan-sink");
      slogan3.classList.add("slogan-sink");
    }, 400)
  }
  if(num == 2){
    // top2.className = "top-img img-abs";
    setTimeout(function(){
      slogan2.className = "central-slogan slogan-show";
      // slogan1.classList.add("position-absolute");
      // slogan3.classList.add("position-absolute");
      slogan1.classList.add("slogan-sink");
      slogan3.classList.add("slogan-sink");
    }, 400)
  }
  if(num == 3){
    // top3.className = "top-img img-real";
    setTimeout(function(){
      slogan3.className = "central-slogan slogan-show";
      // slogan1.classList.add("position-absolute");
      // slogan2.classList.add("position-absolute");
      slogan1.classList.add("slogan-sink");
      slogan2.classList.add("slogan-sink");
    }, 400)
    num = 0;
  }
  num++;
  setTimeout(showSlides, 5000)
}

// use of three.js
// if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
// 			var container;
// 			var camera, cameraTarget, scene, renderer;
// 			init();
// 			animate();
// 			function init() {
// 				container = document.getElementById("container");
// 				//document.body.appendChild( container );
// 				camera = new THREE.PerspectiveCamera( 35, window.innerWidth / 300, 1, 15 );
// 				camera.position.set( 3, 0.15, 3 );
// 				cameraTarget = new THREE.Vector3( 0, -0.25, 0 );
// 				scene = new THREE.Scene();
// 				scene.background = new THREE.Color( 0xffffff );
// 				scene.fog = new THREE.Fog( 0x72645b, 2, 15 );
// 				var loader = new THREE.STLLoader();
// 				// Binary files
//         var opacitySwitch = Boolean("true");
//         var mesh, mesh2;
// 				var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
// 				loader.load( 'stl/show.stl', function ( geometry ) {
// 					mesh = new THREE.Mesh( geometry, material );
// 					mesh.position.set( 0, -0.8, 0 );
// 					mesh.scale.set( 0.03, 0.03, 0.03 );
// 					scene.add( mesh );
// 				} );
//         var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
// 				loader.load( 'stl/show_explode.stl', function ( geometry ) {
// 					mesh2 = new THREE.Mesh( geometry, material );
// 					mesh2.position.set( 0, -0.8, 0 );
// 					mesh2.scale.set( 0.03, 0.03, 0.03 );
// 					scene.add( mesh2 );
// 				} );
//
//         if(opacitySwitch = true){
//           console.log("h");
//         }
//         else{
//           console.log("hi");
//         }
//         container.addEventListener("mouseenter", function(){
//           opacitySwitch = false;
//         });
// 				// Lights
// 				scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );
// 				addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
// 				addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );
// 				// renderer
// 				renderer = new THREE.WebGLRenderer( { antialias: true } );
// 				renderer.setPixelRatio( window.devicePixelRatio );
// 				renderer.setSize( window.innerWidth, 300 );
// 				renderer.gammaInput = true;
// 				renderer.gammaOutput = true;
// 				renderer.shadowMap.enabled = true;
// 				container.appendChild( renderer.domElement );
// 				//
// 				window.addEventListener( 'resize', onWindowResize, false );
// 			}
// 			function addShadowedLight( x, y, z, color, intensity ) {
// 				var directionalLight = new THREE.DirectionalLight( color, intensity );
// 				directionalLight.position.set( x, y, z );
// 				scene.add( directionalLight );
// 				directionalLight.castShadow = true;
// 				var d = 1;
// 				directionalLight.shadow.camera.left = -d;
// 				directionalLight.shadow.camera.right = d;
// 				directionalLight.shadow.camera.top = d;
// 				directionalLight.shadow.camera.bottom = -d;
// 				directionalLight.shadow.camera.near = 1;
// 				directionalLight.shadow.camera.far = 4;
// 				directionalLight.shadow.mapSize.width = 1024;
// 				directionalLight.shadow.mapSize.height = 1024;
// 				directionalLight.shadow.bias = -0.002;
// 			}
// 			function onWindowResize() {
// 				camera.aspect = window.innerWidth / 300;
// 				camera.updateProjectionMatrix();
// 				renderer.setSize( window.innerWidth, 300 );
// 			}
// 			function animate() {
// 				requestAnimationFrame( animate );
// 				render();
// 			}
// 			function render() {
// 				var timer = Date.now() * 0.0005;
// 				camera.position.x = Math.cos( timer ) * 3;
// 				camera.position.z = Math.sin( timer ) * 3;
// 				camera.lookAt( cameraTarget );
// 				renderer.render( scene, camera );
// 			}
