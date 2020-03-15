var user = firebase.auth().currentUser;

if (user) {
   console.log("User is still logged in");
}


// Signup JS
try {
	const signupForm = document.querySelector("#signup-form");

	signupForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// user info
		const name = signupForm["name"].value;
		const email = signupForm["email"].value;
		const password = signupForm["pswd"].value;

		// Sign-up user
		auth.createUserWithEmailAndPassword(email, password).then(cred => {
			console.log(cred.user);
			signupForm.reset();
			window.location.href = "../";
		});
	});
} catch(e) {}

// Loggout
try {
	const logout = document.querySelector("#logout");
	logout.addEventListener("click", (e) => {
		e.preventDefault();

		// Sign-out user
		auth.signOut().then(() => {
			console.log("User has logged out!");
		});
	});
} catch(e) {}