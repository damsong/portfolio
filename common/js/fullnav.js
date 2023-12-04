
$(document).ready(function() {
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover( //전체
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:320},'fast').clearQueue();  // 높이 수정하기 넉넉하게
       },function() {
          $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:153},'normal').clearQueue();
     }); //원래 header높이로 돌아오기
     
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#023793');
           //$('ul',this).css('background','#f8f8f8');
       },function() {
          $('.depth1',this).css('color','#333');
          //$('ul',this).css('background','#fff');
     });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:320},'fast').clearQueue();
     });// 높이 수정하기 넉넉하게

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:153},'normal').clearQueue();
    });//원래 header높이로 돌아오기

   //   푸터 페밀리 사이트
 	
	// $('.family .arrow').click(function(){
	// 	$('.family .aList').fadeIn('slow');			  
	// });

	// $('.family .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });

	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.family .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });

   //상단이동 메뉴 스크롤 처리
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
 
    $("html,body").stop().animate({"scrollTop":0},500);
 
 })


});
