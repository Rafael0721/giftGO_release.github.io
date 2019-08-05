var submitBtn = document.getElementById("submit"),
    linkBtn = document.getElementById("linkBtn"),
    password = document.getElementById("password");
submitBtn.addEventListener("click", function(){
  if(password.value == "tanakalab"){
    linkBtn.click();
  } else{
    alert("Please enter the correct password");
  }
});

// enter key
window.addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 13:
      submitBtn.click();
      break;
  }
});
