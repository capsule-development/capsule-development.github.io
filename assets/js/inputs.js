console.log("// FORMS INPUT CSS BY MARY LOU //\n" + 
            "Here is her site: http://www.codrops.com\n" +
            "Great thanks to all open-sourcers!");

// This is to change to label text
$(".name > input").on("keydown paste", function() {
    if ($(".name > input").val() == "") {
        $(".name > label > span").text("Enter Your Username.");
    } else {
        $(".name > label > span").text("Username:");
    }
});

$(".email > input").on("keyup paste", function() {
    if ($(".email > input").val() == "") {
        $(".email > label > span").text("Enter your email.");
    } else {
        $(".email > label > span").text("Email:");
    }
});

$(".pswd > input").on("keyup paste", function() {
    if ($(".pswd > input").val() == "") {
        $(".pswd > label > span").text("Enter your password.");
    } else {
        $(".pswd > label > span").text("Password:");
    }
});

$("#account-pp").on("mousedown", function() {
    console.log("hi")
    $("#account-pp").css({"box-shadow": "inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;"});
});


// Makes sure that the input is always focused if there is text
(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }

    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
})();