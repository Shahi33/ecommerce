$(".fullwidth-banner").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class=' pre fas fa-angle-left fa-2x'></i>","<i class=' next fas fa-angle-right fa-2x'></i>"],
  responsive: {
    0: {
      items: 1
    },
  
    
  }
  });





$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText : ["<i class='fas fa-angle-left fa-2x pr'></i>","<i class='fas fa-angle-right fa-2x nex'></i>"],
   responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      },
      1200:{
          items:5
      }
    }
  });

  $('.carousel').carousel({
    interval: 2000
  });
  
  
$("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText : ["<i class=' pre fas fa-angle-left fa-2x'></i>","<i class=' next fas fa-angle-right fa-2x'></i>"],
  responsive: {
    0: {
      items: 1
    },
  
    
  }
  });
  
  $("#carous").owlCarousel({
    // autoplay: true,
    // loop: true,
    // margin: 10,
    // center:true,
    // item:1,
    // responsiveClass: true,
    // autoHeight: true,
    // autoplayTimeout: 8000,
    // autoplay:true,
    // smartSpeed: 700,
    // dots:true,
    // responsive: {
    //   0: {
    //     items: 1
    //   }
    
      // 600: {
      //   items: 1
      // },
    
      // 1024: {
      //   items: 1
      // },
    
      // 1366: {
      //   items: 1
      // }
    // }
    loop:true,
    margin:0,
    nav:false,
    items:1,
    // animateOut: 'fadeOut',
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout: 5000,
    dots:true,
    navText : ["<i class='fas fa-angle-left fa-2x'></i>","<i class='fas fa-angle-right fa-2x'></i>"],
    responsive:{
        0:{
            items:1
        }
    }
    });
    
    
    
  
  