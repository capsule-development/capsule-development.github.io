if ($(window).width() < 897) {
	$(".shrink").hide();
} else {
	$(".shrink").show();
}

$(window).on("resize", function() {
	if ($(window).width() < 897) {
		$(".shrink").hide();
	} else {
		$(".shrink").show();
	}
});