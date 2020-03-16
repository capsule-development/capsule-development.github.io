// Listen for user
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("Saved previous sesssion!");
        console.log("User email: " + user.email);
        $("#subtitle").text("Hello, " + user.displayName);
        $("#guest-buttons").hide();
        $("#delete").show();
    } else {
        console.log("No user logged in.");
        $("#subtitle").text("Capsule Accounts have access to many features!");
        $("#guest-buttons").show();
        $("#delete").hide();
    }
});


// Signup JS
const signupForm = document.querySelector("#signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // user info
        const name = signupForm["name"].value;
        const email = signupForm["email"].value;
        const password = signupForm["pswd"].value;

        // Sign-up user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {

			auth.currentUser.updateProfile({
				displayName: name
			}).then(function() {
				console.log("Account created!");
				signupForm.reset();
				window.location.href = "../";
			}).catch(function(error) {
				$("#subtitle-sign").text(error);
			});
		});
	});
}

// Loggout
const logout = document.querySelector("#logout");
if (logout) {
    logout.addEventListener("click", (e) => {
        e.preventDefault();

        // Sign-out user
        auth.signOut().then(() => {
            console.log("User has logged out!");
        });
    });
}


// Login
const loginForm = document.querySelector("#login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get user info
        const email = loginForm["email"].value;
        const password = loginForm["pswd"].value;

		auth.signInWithEmailAndPassword(email, password).then(cred => {
			console.log("Login succesful!");
			loginForm.reset();
			window.location.href = "../";
		}).catch(function(error) {
			console.log(error)
			$("#subtitle-sign").text("Email and password do not match.");
		});;
	});
}

// Delete Account
const deleteButton = document.querySelector("#delete");
if (deleteButton) {
    deleteButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Ask for confirmation
		if (prompt("ARE YOU SURE?") == "yes") {
			auth.currentUser.delete().then(() => {
				console.log("User deleted");
			}).catch(function(error) {
				$("#subtitle-sign").text(error);
			});
		}
    })
}

// Send Email Reset Code
const resetForm = document.querySelector("#reset-form");
if (resetForm) {
	resetForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// Get form data
		const email = resetForm["email"].value;
		// Send
		auth.sendPasswordResetEmail(email).then(() => {
			console.log("Email sent");
			$("#subtitle-sign").text("Go check your email!");
		}).catch(function(error) {
			$("#subtitle-sign").text(error);
		});

		$("#subtitle-sign").text("Please wait...");
	});
}