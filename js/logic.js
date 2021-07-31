var startBut = document.querySelector("#start");
var timeClock = document.querySelector("#time");
var questPlace = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var divHide = document.getElementsByTagName("div");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var time = 75;

function startTime() {
    setInterval(function() {
        time--; timeClock.textContent = time;
        
    },
        1000 );
               
}

function emptyInitials() {
    initials.remove();
}

submit.addEventListener("click", function() {

    localStorage.setItem("userTally", userScore);
    localStorage.setItem("userInitials", initials.value);
    emptyInitials();
    //window.location.href("scores.js");
});

startBut.addEventListener("click", function() {
    document.getElementById("questions").removeAttribute("class");
    question1();
});

function emptyDiv() {
    choices.innerHTML = "";
}