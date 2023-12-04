 $(document).ready(function(){
     
      $('.openBtn').on('click', function(e){
          e.preventDefault();
          
          $(this).parent('p').next('.big').fadeIn('slow');
          $('.box').show();
      });
     
     $('.closeBtn, .box').on('click', function(e){
          e.preventDefault();

          $('.big').fadeOut('fast');
          $('.box').hide();
     });
 });

