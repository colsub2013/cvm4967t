// JavaScript Document
function showDiv() {
    if ($(window).scrollTop() > 100 && !($('#sticky-sign-up-bar').data('positioned') == 'true')) {
        $("#sticky-sign-up-bar").hide().css({
            "position": "fixed",
            "top": "0px",
			"display": "block"
        }).addClass('sticky-show').data('positioned', 'true');
    } else if ($(window).scrollTop() <= 100) {
        $("#sticky-sign-up-bar").css({
            "position": "fixed",
            "top": "-70px",
			"display": "block"
        }).removeClass('sticky-show').data('positioned', 'false');
    }
}
$(window).scroll(showDiv);