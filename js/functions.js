window.onload=function(){
}

function cancel() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "flex"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }
  function ok() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "flex"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }  
function closee() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "flex"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }
  function openn() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "flex"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }
  function alarm() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "flex"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }
  function call() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "flex"; 
    document.getElementById("txt_stop").style.display = "none"; 
  }
  function stop() {
    document.getElementById("txt").style.display = "none";
    document.getElementById("floor").style.display = "none";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "flex"; 
  }
  function sub() {
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
    document.getElementById("txt").innerHTML= "select a <br> subfloor";
  }

  function floor_1() {
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none"; 
    document.getElementById("floor").innerHTML= "1";
  }

  function floorNumbers() {
    let flooornumber = document.getElementsByClassName("btn_number").value;
    document.getElementById("floor").innerHTML = flooornumber;
  }