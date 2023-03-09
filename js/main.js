$(document).ready(function() {

    "use strict";
    $('.trusted-client').owlCarousel({
        loop:false,
        margin:10,
        merge:true,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:4,
            },
            1000:{
                items:4,
            }
        }
    })
    // $('.testimonial-quote').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     merge:true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:1,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    // })
//     function testimonial() {
//       var owl = $(".testimonial");
//       owl.owlCarousel({
//           loop: true,
//           margin: 0,
//           responsiveClass: true,
//           nav: true,
//           navText: ['<i class="lni-chevron-right arrow-right"></i>','<i class="lni-chevron-left arrow-left"></i>'],
//           items: 1,
//           animateIn: 'fadeIn',
//           smartSpeed: 1000,
//           dots: true,
//           autoplay: false,
//           autoplayTimeout: 4000,
//           center: true,
//           responsive: {
//               0: {
//                   items: 1
//               },
//               480: {
//                   items: 1
//               },
//               760: {
//                   items: 1
//               }
//           }
//       });
//   }
//   testimonial();
                  // more btn for add info
        //hide all tabs first
    // $('.inside-tab').hide();
    //show the first tab content
    // $('.tab-1').show();

    // $('.select-box').change(function () {
    //  var dropdown = $('.select-box').val();
    //   //first hide all tabs again when a new option is selected
    //   $('.inside-tab').hide();
    //   //then show the tab content of whatever option value was selected
    //   $('.' + $(this) + dropdown).show();
    //   // $('.'+$(this).val()).show();                                    
    // });

  //   $(document).ready(function (value) {
  //     $('.inside-tab').hide();
  //     $('.tab-1').show();
  //     $('.select-box').change(function () {
  //         $('.inside-tab').hide();
  //         $('.'+$(this).val()).show();
  //     });
  // });

  // $(document).ready(function(){
  //     $('.select-box').on('change', function(){
  //     var demovalue = $(this).val(); 
  //     console.log('drp', demovalue);
  //     $(".inside-tab").hide();
  //     $("#show"+demovalue).show();
  //     });
  //   });

$(document).ready(function(){
      $('.select-box').on('change', function(){
        var demovalue = $(this).val(); 
        console.log('drp', demovalue);
        $('.insideTab').hide();
        $('.hideContent-' + demovalue).show();
      });
});
  
    (function(){
        var words = [
            'Freelancer',
            'Frontend Developer',
            'Problem Solver',
            ], i = 0;
        setInterval(function(){
            $('#changingword').fadeOut(function(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 3000);
            
    })();
 
    // $(function() { 
    //     // for bootstrap 5 use 'shown.bs.tab'
    //     $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    //         // save the latest tab; use cookies if you like 'em better:
    //         localStorage.setItem('activeTab', $(this).attr('aria-controls'));
    //     });
    //     // go to the latest tab, if it exists:
    //     var activeTab = localStorage.getItem('activeTab');
    //     if (activeTab) {
    //         $('[aria-controls="' + activeTab + '"]').tab('show');
    //     }
    //     else if (activeTab == "" || activeTab == null) {
    //       $('[aria-controls="nav-home"]').tab('show');
    //     }
    //   });
  });

