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
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_1").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";  
  };

  function floor_2() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_2").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";  
  };

  function floor_3() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_3").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";  
  };

  function floor_4() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_4").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";  
    };

  function floor_5() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_5").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";  
    };

  function floor_6() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_6").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";    
  };

  function floor_7() {
    document.getElementById("floor").innerHTML= document.getElementById("floor_selected_7").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";    
  };

  function floor_8() {
   document.getElementById("floor").innerHTML= document.getElementById("floor_selected_8").innerHTML;
    document.getElementById("txt").innerHTML= "Selected";
    document.getElementById("txt").style.display = "flex";
    document.getElementById("floor").style.display = "flex";
    document.getElementById("txt_cancel").style.display = "none"; 
    document.getElementById("txt_ok").style.display = "none"; 
    document.getElementById("txt_close").style.display = "none"; 
    document.getElementById("txt_open").style.display = "none"; 
    document.getElementById("txt_alarm").style.display = "none"; 
    document.getElementById("txt_call").style.display = "none"; 
    document.getElementById("txt_stop").style.display = "none";   
};

function floor_9() {
  document.getElementById("floor").innerHTML= document.getElementById("floor_selected_9").innerHTML;
  document.getElementById("txt").innerHTML= "Selected";
  document.getElementById("txt").style.display = "flex";
  document.getElementById("floor").style.display = "flex";
  document.getElementById("txt_cancel").style.display = "none"; 
  document.getElementById("txt_ok").style.display = "none"; 
  document.getElementById("txt_close").style.display = "none"; 
  document.getElementById("txt_open").style.display = "none"; 
  document.getElementById("txt_alarm").style.display = "none"; 
  document.getElementById("txt_call").style.display = "none"; 
  document.getElementById("txt_stop").style.display = "none";    
};
function floor_0() {
  document.getElementById("floor").innerHTML= document.getElementById("floor_selected_0").innerHTML;
  document.getElementById("txt").innerHTML= "Selected";
  document.getElementById("txt").style.display = "flex";
  document.getElementById("floor").style.display = "flex";
  document.getElementById("txt_cancel").style.display = "none"; 
  document.getElementById("txt_ok").style.display = "none"; 
  document.getElementById("txt_close").style.display = "none"; 
  document.getElementById("txt_open").style.display = "none"; 
  document.getElementById("txt_alarm").style.display = "none"; 
  document.getElementById("txt_call").style.display = "none"; 
  document.getElementById("txt_stop").style.display = "none";    
};
