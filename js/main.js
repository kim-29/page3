$(document).ready(function(){
  $(".header .fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $(".header .navbar").toggleClass("active");
  })
  $(window).on("load scroll",function(){
    $(".header .fa-bars").removeClass("fa-times");
    $(".header .navbar").removeClass("active");
    
    let top = $(window).scrollTop();
    if(top>30){$(".header").addClass("active");}
    else{$(".header").removeClass("active");}
    
    $("section").each(function(){
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");  

      if(top>=offset && top < offset+height){
        $(".navbar ul li a").removeClass('active');
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    })
  })
  $(".accordion-header").click(function(){
    $(".accordion-body").slideUp();
    $('.accordion-header span').text("+");
    $(this).next(".accordion-body").slideDown();
    $(this).children('span').text("-");
  })
})