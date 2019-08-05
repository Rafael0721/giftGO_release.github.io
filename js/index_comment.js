var eva = document.getElementById('evaluate'),
    comment = document.getElementById('userComment'),
    q1 = document.getElementById('q1'),
    q2 = document.getElementById('q2'),
    q3 = document.getElementById('q3'),
    q4 = document.getElementById('q4'),
    q5 = document.getElementById('q5'),
    finishBtn = document.getElementById('finish'),
    submitBtn = document.getElementById('hiddenInput');


var stars = document.getElementsByClassName('fa'),
    grade;


for(var i=0; i<stars.length; i++){
  stars[i].addEventListener("click", checkPoint);
  stars[i].addEventListener("mouseover", showPoint);
  stars[i].addEventListener("mouseout", clearPoint);
}

function showPoint(){
  var hover = this.attributes["data-item"].value;
  for(var i=0; i<hover; i++){
    stars[i].classList.add("star-hover");
  }
}

function clearPoint(){
  for(var i=0; i<stars.length; i++){
    stars[i].classList.remove("star-hover");
  }
}

function checkPoint(){
  for(var i=0; i<stars.length; i++){
    stars[i].className = "fa fa-star";
  }

  grade = this.attributes["data-item"].value;
  eva.value = grade + " star";
  for(var i=0; i<grade; i++){
    stars[i].className = "fa fa-star checked";
  }
}

// finish btn
finishBtn.addEventListener("click", function(){
  if(eva.value && comment.value && q1.value && q2.value && q3.value && q4.value && q5.value){
    submitBtn.click();
  } else{
    alert("Please make an evaluation and fill every question before finish!");
  }
});
