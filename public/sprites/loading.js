jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(8000);
    $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(8000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});