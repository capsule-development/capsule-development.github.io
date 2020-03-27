$('#main').toggleClass(localStorage.toggled);

function darkLight() {
    /*DARK CLASS*/
    if (localStorage.toggled != 'dark') {
        $('#main, p').toggleClass('dark', true);
        localStorage.toggled = "dark";

    } else {
        $('#main, p').toggleClass('dark', false);
        localStorage.toggled = "";
    }
}

/*Add 'checked' property to input if background == dark*/
if ($('main').hasClass('dark')) {
    $('#checkBox').prop("checked", true)
} else {
    $('#checkBox').prop("checked", false)
}
