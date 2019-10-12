$(() => {
   $('.vitamin--letter, .vitamin--letter__first').mouseover(function() {
       $(this).addClass("fullAnimation");
   });
    $(".vitamin--letter, .vitamin--letter__first").on("animationend", function() {
        $(this).removeClass("fullAnimation");
    }
    )}
);
