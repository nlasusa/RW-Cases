$(document).ready(function(){
   
    $('.accordian > li').on('click', function(e){
       var $details = $(e.currentTarget).find('.details').toggle()
    });
    
 });

// ON CLICK EVENTS 
$("#learn-more-1").on('click', function(){
    window.location = "https://ktmc.com/";    
  });