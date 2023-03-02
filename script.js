$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // togle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); 
        $('.menu-btn i').toggleClass("active"); 
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Operator", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $('.first li').click(function(){
      $(this).toggleClass("shadow-1").siblings();
      $(this).toggleClass("fill-color").siblings();
    });
    $('.second li').click(function(){
      $(this).toggleClass("shadow-2").siblings();
      $(this).toggleClass("fill-color").siblings();
    });

});

