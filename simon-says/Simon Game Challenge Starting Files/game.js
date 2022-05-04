
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let started = false;

//button click handler
$(".btn").click(function() {

//get clicked button's id
    let userChosenColor = $(this).attr("id");

//add clicked button to history
    userClickedPattern.push(userChosenColor);

//play corresponding sound and animation to clicked button
playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userClickedPattern.length - 1);
})

//function to choose the next color in the sequence, indicate it to user through flash and sound
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //flashing effect
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //play sound corresponding to next button
    playSound(randomChosenColor);

    //increment level counter at top

}

//way to play sound corresponding to color button
function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3")
    audio.play();
}

//add animation to user click
function animatePress(currentColor) {
    $(`.${currentColor}`).addClass("pressed");
    setTimeout( function() {$(`.${currentColor}`).removeClass("pressed")}, 100)
}

//detect keyboard key press to start game
$(document).on("keydown", function() {
    //on first keypress, call nextSequence
    if (!started) {
        nextSequence();
        started = true;
    };
})

function checkAnswer(currentLevel) {
    //if list of ids of clicked button (userclickedpattern) matches gamepattern, call nextsequence. else end game, show score.

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence(), 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}