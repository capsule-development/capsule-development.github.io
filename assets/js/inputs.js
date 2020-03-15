console.log("Something happened")

$("#email > input").on("keyup paste", function() {
    if ($("#email > input").val() == "") {
        $("#email > span").text("Enter your email.");
    } else {
        $("#email > span").text($("#email > input").val());
    }
});

$("#pswd > input").on("keyup paste", function() {
    if ($("#pswd > input").val() == "") {
        $("#pswd > span").text("Enter your password.");
    } else {
        $("#pswd > span").text($("#pswd > input").val());
    }
});