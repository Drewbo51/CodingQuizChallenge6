var clearBut = document.getElementById("clear");
var orderedLi = document.getElementById("highscores");
var mainDiv = document.querySelector(".wrapper");
var createLi = document.createElement("li");
var createForm = document.createElement("form");
var createInp = document.createElement("input");
var createInp2 = document.createElement("input");
var hiScoreList = [];

    var theirScore = localStorage.getItem("userTally");
    var theirInit = localStorage.getItem("userInitials");
    createLi.textContent = theirInit + " " + theirScore;
    orderedLi.appendChild(createLi);

//input2.addEventListener("click", function(event) {
    //event.preventDefault();
    //leaderboard.length = 0;
    //leaderboard.push(input1.value);
        //leaderboard.forEach(function() {
            //var createLi = document.createElement("li");
            //createLi.textContent = input1.value;
            //orderedLi.appendChild(createLi);            
        //});
//});

clearBut.addEventListener("click", function() {
    orderedLi.remove();
});



