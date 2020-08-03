$(".col").mouseover(function(){
    $(this).css("background","blue").css("color", " white");
 });
 
 $(".col").mouseout(function(){
    $(this).css("background"," rgb(196, 216, 255)").css("color","black");
 });

 $(document).ready(function(){
   $('.carousel').carousel();
 });