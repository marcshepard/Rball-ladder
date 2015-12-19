// JavaScript source code
//console.log ("In js file...")

// Some data that will eventually be in a cookie (once I learn how)
var loggedInUser = $.cookie("user");
var loggedIn = (loggedInUser != null);
console.log("Running script: loggedInUser = " + loggedInUser + ", loggedIn = " + loggedIn);

// Some data that will eventually come from a data store (once I learn how)
var roundEnds = new Date("Jan 4, 2016");

// Init - Initialize data in the web page after the page loads
function init() {
    console.log("+init");
    $("#round_ends").text(roundEnds.toDateString());
    if (loggedIn) {
        set_loggedin();
    } else {
        logout();
    }
    console.log("-init");
}

function login() {
    u = document.getElementById("user_name").value;
    console.log("login: user = " + u);
    $.cookie("user", u);
    set_loggedin();
}

function set_loggedin() {
    console.log ("+set_loggin");
    loggedIn = true;
    loggedInUser = $.cookie("user");
    console.log(loggedInUser);
    $(".user_name").text(loggedInUser);
    $(".hide_if_not_logged_in").css("display", "inline");
    $(".hide_if_logged_in").css("display", "none");
    console.log ("-set_loggin");
}

function logout () {
    console.log ("+logout");
    loggedIn = false;
    loggedInUser = null;
    $.removeCookie("user");
    $(".hide_if_not_logged_in").css("display", "none");
    $(".hide_if_logged_in").css("display", "inline");
    console.log ("-logout");
}

// submitResults - When user submits results, give them a confirmation
function reportResults() {
    console.log("+reportResults");
    $("#results_confirmation").text("Results reported!");
    console.log("-reportResults");
}


