// JavaScript source code
//console.log ("In js file...")

// Some data that will eventually be in a cookie (once I learn how)
var loggedIn = false;
var loggedInUser = null;

// Some data that will eventually come from a data store (once I learn how)
var roundEnds = new Date("Dec 7, 2015 09:00:00");
var additionalMessage = "I had a really nice ham sandwich last weekend.";

// Init - Initialize data in the web page after the page loads
function init () {
    $("#round_ends").text(roundEnds.toDateString());
    document.getElementById("additional_message").innerHTML = additionalMessage;
    logout();
}

// Login - After user does faux login, track state and adjust what page shows
// It will show a "sign out" link at the top (instead of a sign in link), show who is
// is currently logged in, and disable "login form" (instead have submit results form)
function login() {
    //console.log ("+login");
    loggedIn = true;
    loggedInUser = document.getElementById("user_name").value;
    //console.log(loggedInUser);
    $(".user_name").text(loggedInUser);
    //console.log ($(".hide_if_not_logged_in").css("display").toString());
    //console.log ($(".hide_if_logged_in").css("display").toString());
    $(".hide_if_not_logged_in").css("display", "inline");
    $(".hide_if_logged_in").css("display", "none");
    //console.log ($(".hide_if_not_logged_in").css("display").toString());
    //console.log ($(".hide_if_logged_in").css("display").toString());
    //console.log ("-login");
}

// Logout - After user does faux logout, track state and adjust what the page shows
// It will show a "sign in" link at the top (instead of a sign out link), show no one
// is currently logged in, and disable "submit results" form (instead have login form)
function logout () {
    //console.log ("+logout");
    loggedIn = false;
    loggedInUser=null;
    //console.log ($(".hide_if_not_logged_in").css("display").toString());
    //console.log ($(".hide_if_logged_in").css("display").toString());
    $(".hide_if_not_logged_in").css("display", "none");
    $(".hide_if_logged_in").css("display", "inline");
    //console.log ($(".hide_if_not_logged_in").css("display").toString());
    //console.log ($(".hide_if_logged_in").css("display").toString());
    $("#results_confirmation").text("");
    //console.log ("-logout");
}

// submitResults - When user submits results, give them a confirmation
function reportResults() {
    console.log("+reportResults");
    $("#results_confirmation").text("Results reported!");
    console.log("-reportResults");
}


