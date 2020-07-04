
userClickedPattern=[];
gamePattern=[];
buttonColours=["red", "blue", "green", "yellow"];
var level=0;


  $(document).keydown(function () {
    if (level === 0) {
        $("#level-title").text("Level "+level);
        nextSequence();
    }
  });



  $(".btn").click(function () {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });


if(i === gamePattern.length){
    setTimeout(1000);
    nextSequence();
}

function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(index){
    if(userClickedPattern[index]==gamePattern[index]){
        console.log("success");
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");    
        },200);
        userClickedPattern=[];
        gamePattern=[];
        $("h1").html("<h6>Game over :-( <br><br> Your Score: "+((level-1)*10)+"<br><br>Press Any Key to Restart</h6>");
        level=0;
        console.log("failure");
    }
    if(index==gamePattern.length-1){
        setTimeout(1000);
        userClickedPattern=[];
        nextSequence();
    }
}