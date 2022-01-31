  $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["Anterior", "Próximo"],
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          360: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      });
  });

// AOS INIT

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  })