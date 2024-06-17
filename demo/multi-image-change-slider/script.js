if(document.querySelector('.single_main')){
    // single-shop
    var single_main = new Splide( '.single_main', {
        type       : 'fade',
        // heightRatio: 0.5,
        height: '400px',
        pagination : false,
        arrows     : false,
        cover      : true,
    } );
  
    var single_thumbnails = new Splide( '.single_thumbnail', {
        rewind          : true,
        fixedWidth      : 104,
        fixedHeight     : 58,
        isNavigation    : true,
        gap             : 10,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 66,
            fixedHeight : 38,
          },
        },
    });
  
    single_main.sync( single_thumbnails );
    single_main.mount();
    single_thumbnails.mount();
}