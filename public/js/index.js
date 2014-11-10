$( document ).ready( function() {
    // routing
    var route = window.location.pathname.split('/');
    route = route[ route.length-1 ];
    switch ( route ) {
        case "":
            $( ".home" ).addClass( "underline" );
            break;
        case "mission": 
            $( ".mission" ).addClass( "underline" );
            break;
        case "culture": 
            $( ".culture" ).addClass( "underline" );
            break;
        case "services": 
            $( ".services" ).addClass( "underline" );
            break;
        case "services:social": 
            $( ".services" ).addClass( "underline" );
            scrollTo( $( ".social.service-title" ) );
            break;
        case "services:web": 
            $( ".services" ).addClass( "underline" );
            scrollTo( $( ".web.service-title" ) );
            break;
    }    

    // sticky nav
    var nav = $( "nav" ),
        navPosition= $( "nav" ).position().top;

    $( window ).scroll( function() {
        if( $( this ).scrollTop() > navPosition ) {
            nav.addClass( "stick" );
        } else {
            nav.removeClass( "stick" );
        }
    });

    // trigger buttons
    $( ".service-action.social" ).click( function() {
        location.href = "/services:social";
    });
    $( ".service-action.web" ).click( function() {
        location.href = "/services:web";
    });

});

function scrollTo( el ) {
    console.log( "SCROLLING" );
    $('html,body').animate({
        scrollTop: el.offset().top - 90
    }, 600);
};
