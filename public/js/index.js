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
});
