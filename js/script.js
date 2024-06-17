
jQuery(function ($){

    // bottom-to-top
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    $(document).ready(function() {
        $(".primary-menu li.menu-dropdown > a").append('<span class="dropdown-btn"><i class="fas fa-chevron-down"></i></span>');
    
        $('.dropdown-btn').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var $parentLi = $(this).parent().parent();
            $parentLi.toggleClass('open').siblings().removeClass('open');
            $parentLi.find("ul.sub-menu").first().slideToggle();
            $parentLi.siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');
        });
    
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.menu-dropdown').length) {
                $('.menu-dropdown').removeClass('open');
                $('.sub-menu').slideUp();
            }
        });
    });
    
    $('.primary-menu li').has('ul').addClass('menu-dropdown');


    // sticky header
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop();
    
        if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        $('.pre-header nav').removeClass("sticky");
        } else {
        // Scrolling up
        if (currentScrollTop > 100) {
            $('.pre-header nav').addClass("sticky");
        } else {
            $('.pre-header nav').removeClass("sticky");
        }
        }
    
        lastScrollTop = currentScrollTop;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {  
        $('.pre-header nav').addClass("is-hidden");
        }
        else if ($(this).scrollTop() > 0) {
        $('.pre-header nav').addClass("mobile-view");
        } 
        else {
        $('.pre-header nav').removeClass("is-hidden mobile-view");
        }
    });

    $(document).ready(function() {
        var currentPath = window.location.pathname.replace(/\/$/, '');
        // console.log("Current Path:", currentPath);

        $('.primary-menu a').each(function() {
            var href = $(this).attr('href').replace(/\/$/, '');
            // console.log(href);
            var lastPartHref = href.substring(href.lastIndexOf('/') + 1);
            // console.log(lastPartHref);
            if (currentPath.endsWith(lastPartHref)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    $(document).ready(function(){
        $('.hamburger').click(function(){
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.primary-menu').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        });
    
        $('.overlay').click(function(){
            $('.overlay').removeClass('active');
            $('.hamburger').removeClass('active');
            $('.primary-menu').removeClass('active');
            $('body').removeClass('overflow-hidden');
        });
    });

    // issotop

    var $grid = $('.grid').isotope({
        itemSelector: '.shop-categorie-sec .shop-filter-list',
        layoutMode: 'fitRows'
    });

    // filter functions
    var filterFns = {
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    $('.single-accordion-item .accordion-title').click(function () {
        var $accordionItem = $(this).closest('.single-accordion-item');
        var $accordionContent = $accordionItem.find('.accordion-content');
        if (!$accordionItem.hasClass('active')) {
            $('.single-accordion-item').removeClass('active');
            $('.accordion-content.active').slideUp().removeClass('active');
            $accordionItem.addClass('active');
            $accordionContent.slideDown().addClass('active');
        } else {
            $accordionItem.removeClass('active');
            $accordionContent.slideUp().removeClass('active');
        }
    });

    $('.cart-offer-box .close-btn').click(function(){
        $('.cart-offer-box').slideUp();
    });
    $('.promo-code .code-title').click(function(){
        $('.promo-code form').slideToggle();
        $('.promo-code .icon').toggleClass('active');
    });

    // zoom image
    $(document).ready(function() {
        const zoom = $('.single_main .image');
        const s = 2;

        zoom.on('mousemove', function(e) {
          const x = e.pageX - $(this).offset().left - zoom.width() / 2;
          const y = e.pageY - $(this).offset().top- zoom.height() / 2;

          var xc = - x / s;
          var yc = - y / s;
    
            $('.single_main .image img').css('transform', 'translate(' + xc + 'px, ' + yc + 'px) scale(1.5)');

        });

        zoom.on('mouseleave', function () {
            $('.single_main .image img').css('transform', 'translate(0, 0) scale(1)');
        });
    });
    

    $(window).on('resize', function() {
        var margin = ($('.whistlist-modal .container').width() - $(window).width()) / 2;
        // console.log(margin);
        $('.modal-dialog').css('--space-left', - margin + 'px');
    }).trigger('resize');

    $('.whistlist-btn').click(function(){
        $(this).toggleClass('active');
    });

});

new WOW().init();


if(document.querySelector('.banner-slide')){
    banner_slide = new Splide('.banner-slide',{
        perPage:1,
    }).mount();
}
if(document.querySelector('.single_main')){
    // single-shop
    var single_main = new Splide( '.single_main', {
      type       : 'fade',
      pagination : false,
      arrows     : false,
      cover      : true,
    } );
  
    var single_thumbnails = new Splide( '.single_thumbnail', {
      rewind          : true,
      isNavigation    : true,
      pagination      : false,
      arrows          : false,
      breakpoints: {
        575: {
            fixedWidth      : 85,
        },
      },
    });
  
    single_main.sync( single_thumbnails );
    single_main.mount();
    single_thumbnails.mount();
}

if (document.querySelector('.single-related-slide')) {
    var single_slide = new Splide('.single-related-slide', {
        perPage: 3,
        perMove: 1,
        pagination: false,
        gap: 16,
        breakpoints: {
            1024: {
                perPage: 3,
                gap: 20,
            },
            991: {
                perPage: 2,
            },
            575: {
                perPage: 1,
            },
        },
    });
  
    // single_slide.on('mounted move', function () {
    //     var bar = single_slide.root.querySelector('.my-slider-progress-bar');
        
    //     if (bar) {
    //         var end = single_slide.Components.Controller.getEnd() + 1;
    //         var rate = Math.min((single_slide.index + 1) / end, 1);
    //         bar.style.width = String(100 * rate) + '%';
    //     } else {
    //         console.error("Progress bar element not found.");
    //     }
    // });
  
    single_slide.mount();
}
function toggleContent(optionType) {
    var deliverOptions = document.querySelector('.deliver-list-option');
    var shopOptions = document.querySelector('.shop-option');
    var storeButton = document.querySelector('.btn-box.store');
    var deliverButton = document.querySelector('.btn-box.deliver');

    if (optionType === 'deliver') {
        deliverOptions.style.display = 'block';
        shopOptions.style.display = 'none';
        deliverButton.classList.add('active');
        storeButton.classList.remove('active');
    } else if (optionType === 'store') {
        shopOptions.style.display = 'block';
        deliverOptions.style.display = 'none';
        storeButton.classList.add('active');
        deliverButton.classList.remove('active');
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     var consultationBtns = document.querySelectorAll(".banner .big-image");
//     var cursors = document.querySelectorAll(".banner .shop-btn");

//     consultationBtns.forEach(function(consultationBtn, index) {
//         consultationBtn.addEventListener("mousemove", function(event) {
//             var buttonRect = consultationBtn.getBoundingClientRect();
//             var cursorSize = parseInt(getComputedStyle(cursors[index]).getPropertyValue('--size'));
//             var cursorHalfSize = cursorSize / 2;
//             var x = event.clientX - buttonRect.left - cursorHalfSize;
//             var y = event.clientY - buttonRect.top - cursorHalfSize;

//             cursors[index].style.left = x + "px";
//             cursors[index].style.top = y + "px";
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var consultationBtns = document.querySelectorAll(".banner .big-image");
    var cursors = document.querySelectorAll(".banner .shop-btn");
    var contentDiv = document.querySelector(".content.big-content"); // Select the content div

    consultationBtns.forEach(function(consultationBtn, index) {
        consultationBtn.addEventListener("mousemove", function(event) {
            // Check if the event is originating from within the content div
            if (contentDiv.contains(event.target)) {
                return; // If inside content div, do nothing
            }
            // Otherwise, proceed with handling the cursor position
            var buttonRect = consultationBtn.getBoundingClientRect();
            var cursorSize = parseInt(getComputedStyle(cursors[index]).getPropertyValue('--size'));
            var cursorHalfSize = cursorSize / 2;
            var x = event.clientX - buttonRect.left - cursorHalfSize;
            var y = event.clientY - buttonRect.top - cursorHalfSize;

            cursors[index].style.left = x + "px";
            cursors[index].style.top = y + "px";
        });
    });
});


function goBack() {
    window.history.back();
}


