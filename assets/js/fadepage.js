// Fade pages on load
$("body").hide();

if (!$("#account-home").length) {
	$(document).ready(function() {
    	$("body").fadeIn(500);
	});
}


