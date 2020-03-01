if ($(window).width() < 897) {
	$(".shrink").hide();
	console.log("shrink");
} else {
	$(".shrink").show();
	console.log("unshrink");
}

$(window).on("resize", function() {
	if ($(window).width() < 897) {
		$(".shrink").hide();
		console.log("shrink");
	} else {
		$(".shrink").show();
		console.log("unshrink");
	}
});