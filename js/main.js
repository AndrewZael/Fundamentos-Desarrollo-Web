$(document).ready(function() {
    // Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // Smoth Scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#menu').removeClass('menu-show');
            $('#btn-toogle-menu>i').removeClass('fa-times');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });

}); 

// Menu
function toogleMenu(){
    $('#menu').toggleClass('menu-show');
    $('#btn-toogle-menu>i').toggleClass('fa-times');
}