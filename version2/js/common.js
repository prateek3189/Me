function allowDrop(ev) {
    ev.preventDefault();
    document.getElementById("div1").style.background = "#0882c6";
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    document.getElementById("drag1").remove(); 
    document.getElementById("div1").style.background = "#CCCCCC";
}
$(window).load(function(){
  $("asside h3").click(function(){
    if($("asside").css("height") == "35px"){
      $("asside").css("height","600px");    
      $(".notification_bar").show();
      localStorage.setItem("notStatus","O")
    }else{
      $("asside").css("height","35px");    
      $(".notification_bar").hide();
      localStorage.setItem("notStatus","C")
    }
  });
  
  // Check browser support
  if (typeof(Storage) !== "undefined") {
      var notificationOpen  = localStorage.getItem("notStatus");
      if(notificationOpen === null || notificationOpen === 'C'){
        $("asside").css("height","35px");    
        $(".notification_bar").hide();
      }else{
        $("asside").css("height","600px");    
        $(".notification_bar").show();
      }
  }
});
