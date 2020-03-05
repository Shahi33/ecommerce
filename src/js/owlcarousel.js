$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText : ["<i class='fas fa-angle-left fa-2x pre'></i>","<i class='fas fa-angle-right fa-2x nex'></i>"],
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
  })

  $('.carousel').carousel({
    interval: 2000
  })
  