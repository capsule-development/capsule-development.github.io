// Listen for user
auth.onAuthStateChanged(user => {
	console.log(user.email);

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
			console.log("Account created!");
			
			signupForm.reset();
			window.location.href = "../";
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
		});
	});
}