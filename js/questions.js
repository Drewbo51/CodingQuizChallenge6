var quest1 = "Which of the following is not a reserved word in JavaScript?";
var quest1ans = ["1. default", "2. finally", "3. throw", "4. undefined"];
var quest2 =  "Is JavaScript a front-end, back-end, or full-stack programming language?";
var quest2ans = ["1. front-end", "2. back-end", "3. full-stack"];
var quest3 = "Who created JavaScript?";
var quest3ans = ["1. Microsoft", "2. Sun Microsystems", "3. Oracle", "4. Netscape"];
var quest4 = "JavaScript wasn’t always called that. What other name has it been released under?";
var quest4ans = ["1. Mocha", "2. BScript", "3. Latte", "4. Spidermonkey"];
var quest5 = "What year was Javascript created?";
var quest5ans = ["1. 1990", "2. 1999", "3. 1995", "4. 2000"];
var userScore = 0;
var rightAns;
var wrong1;
var wrong2;
var wrong3;

function question1() {
    startBut.setAttribute("class", "hide");
    startTime();

    questPlace.textContent = quest1;

quest1ans.forEach(function(question) {

    var createBut = document.createElement("button");

    createBut.textContent = question;

    choices.appendChild(createBut);

    rightAns = document.body.children[2].children[1].children[1].children[3];
    wrong1 = document.body.children[2].children[1].children[1].children[0]; 
    wrong2 = document.body.children[2].children[1].children[1].children[1];
    wrong3 = document.body.children[2].children[1].children[1].children[2]; 
 });
    rightAns.addEventListener("click", function() {
        alert("CORRECT!");
        userScore += 1;
        emptyDiv();
        question2();
        });
    wrong1.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question2();
        });
    wrong2.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question2();
        });
    wrong3.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question2();
        });          

}

function question2() {

    questPlace.textContent = quest2;

quest2ans.forEach(function(question) {

    var createBut = document.createElement("button");

    createBut.textContent = question;

    choices.appendChild(createBut);

    rightAns = document.body.children[2].children[1].children[1].children[2];
    wrong1 = document.body.children[2].children[1].children[1].children[0]; 
    wrong2 = document.body.children[2].children[1].children[1].children[1];
 });
    rightAns.addEventListener("click", function() {
        alert("CORRECT!");
        userScore += 1;
        emptyDiv();
        question3();
        });
    wrong1.addEventListener("click", function() {
        alert("wrong");
        time -= 15;
        emptyDiv();
        question3();
        });
    wrong2.addEventListener("click", function() {
        alert("wrong");
        time -= 15;
        emptyDiv();
        question3();
        });
 
}

function question3() {

    questPlace.textContent = quest3;

quest3ans.forEach(function(question) {

    var createBut = document.createElement("button");

    createBut.textContent = question;

    choices.appendChild(createBut);

    rightAns = document.body.children[2].children[1].children[1].children[3];
    wrong1 = document.body.children[2].children[1].children[1].children[0]; 
    wrong2 = document.body.children[2].children[1].children[1].children[1];
    wrong3 = document.body.children[2].children[1].children[1].children[2]; 
 });
    rightAns.addEventListener("click", function() {
        alert("CORRECT!");
        userScore += 1;
        emptyDiv();
        question4();
        });
    wrong1.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question4();
        });
    wrong2.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question4();
        });
    wrong3.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question4();
        });          

}

function question4() {

    questPlace.textContent = quest4;

quest4ans.forEach(function(question) {

    var createBut = document.createElement("button");

    createBut.textContent = question;

    choices.appendChild(createBut);

    rightAns = document.body.children[2].children[1].children[1].children[0];
    wrong1 = document.body.children[2].children[1].children[1].children[1]; 
    wrong2 = document.body.children[2].children[1].children[1].children[2];
    wrong3 = document.body.children[2].children[1].children[1].children[3]; 
 });
    rightAns.addEventListener("click", function() {
        alert("CORRECT!");
        userScore += 1;
        emptyDiv();
        question5();
        });
    wrong1.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question5();
        });
    wrong2.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question5();
        });
    wrong3.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        emptyDiv();
        question5();
        });          

}

function question5() {

    questPlace.textContent = quest5;

quest5ans.forEach(function(question) {

    var createBut = document.createElement("button");

    createBut.textContent = question;

    choices.appendChild(createBut);

    rightAns = document.body.children[2].children[1].children[1].children[2];
    wrong1 = document.body.children[2].children[1].children[1].children[0]; 
    wrong2 = document.body.children[2].children[1].children[1].children[1];
    wrong3 = document.body.children[2].children[1].children[1].children[3]; 
 });
    rightAns.addEventListener("click", function() {
        alert("CORRECT!");
        userScore += 1;
        questPlace.textContent = "";
        emptyDiv();
        document.getElementById("end-screen").removeAttribute("class");
        document.getElementById("final-score").textContent = userScore;
        });
    wrong1.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        questPlace.textContent = "";
        emptyDiv();
        document.getElementById("end-screen").removeAttribute("class");
        document.getElementById("final-score").textContent = userScore;
        });
    wrong2.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        questPlace.textContent = "";
        emptyDiv();
        document.getElementById("end-screen").removeAttribute("class");
        document.getElementById("final-score").textContent = userScore;
        });
    wrong3.addEventListener("click", function() {
        alert("Wrong");
        time -= 15;
        questPlace.textContent = "";
        emptyDiv();
        document.getElementById("end-screen").removeAttribute("class");
        document.getElementById("final-score").textContent = userScore;       
        });     
}
