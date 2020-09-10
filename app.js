$(document).ready(function(){
   
    $('.accordian > li').on('click', function(e){
       var $details = $(e.currentTarget).find('.details').toggle()
    });
    
 });

// ON CLICK EVENTS 
$(".title").on('click', function(){
    window.location = "https://ktmc.com/new-cases/alteryx-inc#overview";    
  });


// letter A 
  $("#a").on('click', function(){
   $("#alpha-A").show();
   // hide ALL others 
   $("#alpha-B, #alpha-C, #alpha-D").hide();
 });

// letter B 
 $("#b").on('click', function(){
   $("#alpha-B").show();
   // hide ALL others 
   $("#alpha-A, #alpha-C, #alpha-D").hide();
 });

 // letter C
 $("#c").on('click', function(){
  $("#alpha-C").show();
  // hide ALL others 
  $("#alpha-A, #alpha-B, #alpha-D").hide();
});

// letter D 
$("#d").on('click', function(){
  $("#alpha-D").show();
  // hide ALL others 
  $("#alpha-A, #alpha-B, #alpha-C").hide();
});

 $("#alpha-A").hide();
 $("#alpha-B").hide();
 $("#alpha-C").hide();
 $("#alpha-D").hide();