/*
"code is an art and therefore should be treated as such.
If not you could lose a handle on your sanity."- c0dine
*/

function renderUI(user) {
    $("body").fadeIn(500);
    if (user) {
        console.log("Saved previous sesssion!");
        console.log("User: " + user.displayName);
        $("#logout").parent().show();
        $("#subtitle").text("Hello, " + user.displayName);
        $("#guest-buttons").hide();
        $("#account-pp > img").attr("src", user.photoURL);
        $("#user-buttons").fadeIn("slow");
    } else {
        console.log("No user logged in.");
        $("#logout").parent().hide();
        $("#subtitle").text("Capsule Accounts have access to many features!");
        $("#guest-buttons").fadeIn("slow");
        $("#user-buttons").hide();
    }
}

// Listen for user
auth.onAuthStateChanged(user => {
    renderUI(user);
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

        if (name.length < 3) {
            $("#subtitle-sign").text("Please give a longer name.");
        } else {
            // Sign-up user
            auth.createUserWithEmailAndPassword(email, password).then(cred => {

                auth.currentUser.updateProfile({
                    displayName: name,
                    photoURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png"
                }).then(function() {
                    console.log("Account created!");
                    signupForm.reset();
                    window.location.href = "../";
                }).catch(function(error) {
                    $("#subtitle-sign").text(error);
                });
            }).catch(function(error) {
                $("#subtitle-sign").text(error);
            });
        }
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
        const conf = prompt("Are you sure about this? (yes | no)");
        if (conf != "" && conf.toLowerCase() == "yes") {
            auth.currentUser.delete().then(() => {
                console.log("User deleted");
            }).catch(function(error) {
                $("#subtitle").text("Re-login and try again.");
            });
        }
    })
}

// Change Name
const changeName = document.querySelector("#name-change");
if (changeName) {
    changeName.addEventListener("click", (e) => {
        e.preventDefault();

        const newName = prompt("UI still a work in progress; give the new name:");
        if (newName.length > 3) {
            auth.currentUser.updateProfile({
                displayName: newName
            }).then(function() {
                console.log("name changed");
                renderUI(auth.currentUser);
            }).catch(function(error) {
                alert(error);
            });
        } else {
            $("#subtitle").text("Pick a longer name.");
        }
    })
}

// Change Photo
const changePhoto = document.querySelector("#pp-change");
if (changePhoto) {
    changePhoto.addEventListener("click", (e) => {
        e.preventDefault();

        var url = prompt("UI still a work in progress (\"d\" for default); give the new url:");
        console.log("URL: [" + url + "]")
        if (url) {
            if (url == "d") {
                url = "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png";
            }
            auth.currentUser.updateProfile({
                photoURL: url
            }).then(function() {
                console.log("profile pic changed");
                renderUI(auth.currentUser);
            }).catch(function(error) {
                alert(error);
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
// if we need storage we can use this
/*
// Get a reference to the storage service, which is used to create references in our storage bucket
var storage = firebase.storage();
// Create a storage reference from fireBases storage service
var storageRef = storage.ref();
//Getting rid of all the variables before the code 
var imagesRef = storageRef.child('uuid/images');
var uuidRef = imagesRef.child()
var rootRef = spaceRef.root;
*/