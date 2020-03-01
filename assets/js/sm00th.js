// Smooth scroll link (jQuery)

// Only check for links with href="#<id>"
$('a[href*="#"]').on('click', function(e) {
	e.preventDefault() // Overide default animation
	let destination;

	// If href is #, then scroll to the top
	if ($(this).attr('href') == "#") {
		destination = 0;
	} else {
		// Scroll the difference from the tag specified as id
		destination = $($(this).attr('href')).offset().top;
	}

    $('html, body').animate({
        scrollTop: destination
    // time, animation
    }, 500, 'swing')
});

