$(document).on('click', function(e) {



    if ( $(e.target).closest('.header-menu-icon').length || $(e.target).closest('.header-menu-icon').length  != 0) {

        if ($(".header-options-sm")[0].style.display == "none"){
            $(".header-options-sm").show();
            $("#main-body")[0].style.opacity = 0.3
        }
        else {
            $(".header-options-sm").hide();
            $("#main-body")[0].style.opacity = 1
        }
    }else {
        $('.header-options-sm').hide();
        $("#main-body")[0].style.opacity = 1
    }
});