// 상단 이동
$(window).on('scroll',function(){ 
    var scroll = $(window).scrollTop(); 
    if(scroll>1000){ 
        $('.top_move').fadeIn('slow'); 
    }else{
        $('.top_move').fadeOut('fast');
    }
});


$('.top_move').click(function(e){

    e.preventDefault();

    $("html,body").stop().animate({"scrollTop":0},1000); 

});




//hambuger

$(document).ready(function() {
    $(".menuOpen").toggle(function() {
      $(".mainMenu").slideDown('slow');
    }, function() {
      $(".mainMenu").slideUp('fast');
    });
 
 
   //  네비높이 맞추기(페이지 로딩 시 1회)
   var screenSize = $(window).width(); 
   var winh=$(window).height();
   if( screenSize > 640){
     $('header .mainMenu').height('auto')
       }else{
 
    $('header .mainMenu').height(winh)
       }
 
    
     var current=0;
    $(window).resize(function(){ 
       var screenSize = $(window).width(); 
       if( screenSize > 640){
         $(".mainMenu").show();
         $('header .mainMenu').height('auto')
          current=1;
       }
       if(current==1 && screenSize < 640){
         $(".mainMenu").hide();
         $('header .mainMenu').height(winh)
          current=0;
       }
     }); 
     
   });
 
   
     // <![CDATA[
         try {
             window.addEventListener('load', function(){
                 setTimeout(scrollTo, 0, 0, 1); 
             }, false);
         } catch(e) {}
     // ]]>