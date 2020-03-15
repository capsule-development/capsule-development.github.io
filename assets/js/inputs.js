console.log("// FORMS INPUT CSS BY MARY LOU //\n" + 
            "Here is her site: http://www.codrops.com\n" +
            "Great thanks to all open-sourcers!");

$("#email > input").on("keyup paste", function() {
    if ($("#email > input").val() == "") {
        $("#email > label > span").text("Enter your email.");
    } else {
        $("#email > label > span").text("Email: " + $("#email > input").val());
    }
});

$("#pswd > input").on("keyup paste", function() {
    if ($("#pswd > input").val() == "") {
        $("#pswd > label > span").text("Enter your password.");
    } else {
        $("#pswd > label > span").text("Pass: " + $("#pswd > input").val());
    }
});