$(document).ready(function(){
   
    $('.accordian > li').on('click', function(e){
       var $details = $(e.currentTarget).find('.details').toggle()
    });
    
 });

// ON CLICK EVENTS 
$("#learn-more-1").on('click', function(){
    window.location = "https://ktmc.com/new-cases/alteryx-inc#overview";    
  });

  $("#a").on('click', function(){
   $("#alpha-A").show();
   $("#alpha-B").hide();
 });

 $("#b").on('click', function(){
   $("#alpha-B").show();
   $("#alpha-A").hide();
 });


 $("#alpha-A").hide();
 $("#alpha-B").hide();