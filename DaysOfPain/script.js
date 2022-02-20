let hours = 9;
let minutes = 0;
let noon = false;
let period = "AM";
let hunger = document.getElementById("hunger").style.width;
let hungerPercent = document.getElementById("hungerPercent");
let grades = document.getElementById("grades").style.width;
let gradesPercent = document.getElementById("gradesPercent");
let happy = document.getElementById("happiness").style.width;
let happyPercent = document.getElementById("happinessPercent");
let score = 0;
var displayTime, displayHunger, displayHappiness, displayScore;
let hungerCounter = 0;
let happyCounter = 0;

document.cookie = hours + ", " + minutes + ", " + noon + ", " + period + ", " + hunger + ", " + grades + ", " + happy;


function openDialog() {
  stop();
  document.getElementById("background").style.display = "block";
  document.getElementById("instructions").innerHTML = "<br><br>Oh no! <br><br>You did not meet your needs!<br>Your score was " + score + ".<br>Time management and wellbeing are both important, <br>so learn to prioritize both!";
  document.getElementsByClassName("nextButtons")[0].innerHTML = "Play Again?";
}

function closeDialog() {
  start("all");
  document.getElementById("background").style.display = "none";
}

function start(event) {
  if (event.localeCompare("time") == 0) {
    displayTime = setInterval(incrementSeconds, 1000);
  }
  else if (event.localeCompare("hunger") == 0) {
    displayHunger = setInterval(incrementHunger, 1000);
  }
  else if (event.localeCompare("happiness") == 0) {
    displayHappiness = setInterval(decrementHappiness, 2000);
  }
  else if (event.localeCompare("all") == 0) {
   displayTime = setInterval(incrementSeconds, 1000);
   displayHunger = setInterval(incrementHunger, 1000); 
   displayHappiness = setInterval(decrementHappiness, 2000);
   displayScore = setInterval(changeScore, 1000); 
  }
}

function stop() {
  clearInterval(displayTime);
  clearInterval(displayHunger);
  clearInterval(displayHappiness);
  clearInterval(displayScore);
}

function changeScore() {
  if (parseInt(hunger) == 100 || parseInt(happy) == 0) {
    if (score - 1 < 0) {
      score = 0;
    }
    else {
      score = score - 1;
    }
  }
  else {
    if (parseInt(grades) > 0) {
      score = score + parseInt(parseInt(grades) / 10);
    }
    else {
      score = score + 1;
    }
  }
  document.getElementById("score").innerHTML = score;
}

function checkNeeds() {
  if (parseInt(hunger) == 100 && parseInt(happy) == 0) {
    openDialog();
  }
}

var check = setInterval(checkNeeds, 1000);

function incrementSeconds() {
  minutes = minutes + 1;
  if (minutes < 10) {
    document.getElementById("time").innerHTML = hours + ":0" + minutes + " " + period;
  }
  else if (minutes < 10) {
    document.getElementById("time").innerHTML = hours + ":0" + minutes + " " + period;
  }
  else if (minutes >= 10) {
    document.getElementById("time").innerHTML = hours + ":" + minutes + " " + period;
  }
  if (minutes >= 60) {
    hours = hours + 1;
    if (hours == 12) {
      noon = !noon;
    }
    else if (hours == 13) {
      hours = 1;
    }
    if (noon) {
      period = "PM";
    }
    else {
      period = "AM";
    }
    minutes = 0;
    document.getElementById("time").innerHTML = hours + ":0" + minutes + " " + period;
  }
}

function incrementHunger() {
  if (parseInt(hunger) == 99) {
    clearInterval(displayHunger);
    hungerCounter = 0;
  }
  if (parseInt(hunger) >= 75) {
    document.getElementById("hunger").className = "progress-bar bg-danger progress-bar-striped progress-bar-animated";
  }
  else if (parseInt(hunger) >= 50) {
    document.getElementById("hunger").className = "progress-bar bg-warning progress-bar-striped progress-bar-animated";
  }
  hunger = String(parseInt(hunger) + 1);
  document.getElementById("hunger").style.width = hunger + "%";
  hungerPercent.innerHTML = hunger + "%";
}

function decrementHunger(percent) {
  hungerCounter++;
  if (hungerCounter == 1) {
    clearInterval(displayHunger);
    start("hunger");
  }
  if (parseInt(hunger) - percent < 0) {
    hunger = String(0);
  }
  else {
    hunger = String(parseInt(hunger) - percent);
  }
  if (parseInt(hunger) >= 75) {
    document.getElementById("hunger").className = "progress-bar bg-danger progress-bar-striped progress-bar-animated";
  }
  else if (parseInt(hunger) >= 50) {
    document.getElementById("hunger").className = "progress-bar bg-warning progress-bar-striped progress-bar-animated";
  }
  document.getElementById("hunger").style.width = hunger + "%";
  hungerPercent.innerHTML = hunger + "%";
}


function incrementGrades(percent) {
  if (parseInt(grades) + percent > 100) {
    grades = String(100);
  }
  else {
    grades = String(parseInt(grades) + percent);
  }
  document.getElementById("grades").style.width = grades + "%";
  gradesPercent.innerHTML = grades + "%";
}

function decrementGrades(percent) {
  if (parseInt(grades) - percent < 0) {
    grades = String(0);
  }
  else {
    grades = String(parseInt(grades) - percent);
  }
  document.getElementById("grades").style.width = grades + "%";
  gradesPercent.innerHTML = grades + "%";
}

function decrementHappiness() {
  if (parseInt(happy) == 1) {
    clearInterval(displayHappiness);
    happyCounter = 0;
  }
  if (parseInt(happy) <= 25) {
    document.getElementById("happiness").className = "progress-bar bg-danger progress-bar-striped progress-bar-animated";
  }
  else if (parseInt(happy) <= 50) {
    document.getElementById("happiness").className = "progress-bar bg-warning progress-bar-striped progress-bar-animated";
  }
  happy = String(parseInt(happy) - 1);
  document.getElementById("happiness").style.width = happy + "%";
  happyPercent.innerHTML = happy + "%";
}


function incrementHappiness(percent) {
  happyCounter++;
  if (happyCounter == 1) {
    clearInterval(displayHappiness);
    start("happiness");
  }
  if (parseInt(happy) + percent > 100) {
    happy = String(100);
  }
  else {
    happy = String(parseInt(happy) + percent);
  }
  if (parseInt(happy) <= 25) {
    document.getElementById("happiness").className = "progress-bar bg-danger progress-bar-striped progress-bar-animated";
  }
  else if (parseInt(happy) <= 50) {
    document.getElementById("happiness").className = "progress-bar bg-warning progress-bar-striped progress-bar-animated";
  }
  document.getElementById("happiness").style.width = happy + "%";
  happyPercent.innerHTML = happy + "%";
}


function openGoToClass() {
  alert("Let's go to class!");
  document.getElementById("goToClass").style.display="block";
  document.getElementById("relax").style.display="none";
  document.getElementById("eat").style.display="none";

  document.getElementById("calcCourse").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
}

function openRelax() {
  alert("Let's go relax a bit!");
  document.getElementById("goToClass").style.display="none";
  document.getElementById("relax").style.display="block";
  document.getElementById("eat").style.display="none";
  document.getElementById("getMovies").style.display="none";
  document.getElementById("getFriends").style.display="none";
  document.getElementById("getMusic").style.display="none";

  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
}

function openEat() {
  alert("Let's go eat!");
  document.getElementById("memoryGamePizza").style.display="none";
  document.getElementById("memoryGameFruit").style.display="none";
  document.getElementById("memoryGameCookies").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("relax").style.display="none";
  document.getElementById("eat").style.display="block";

  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
  
}

/* RELAX MOVIE LIST */
function openMovieList() {
  incrementHappiness(10);
  document.getElementById("getMovies").style.display="block";
  document.getElementById("getFriends").style.display="none";
  document.getElementById("getMusic").style.display="none";
  
  /* Accessing API data */
  var req = new XMLHttpRequest()
  req.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
  
  req.onload = function () {
    // Access JSON data here
    let movieList = [];
    var movies = JSON.parse(this.response)
    
    movies.forEach(movie => {
      movieList.push(movie.title + ": " + movie.description);
    })
    let index = Math.floor(Math.random() * (movieList.length-5));
    let output = "Here are a few Studio Ghibli movies for you to watch (to see some new options, click the button again)!<br><br>";
    output += "<ul>";
    for (let i = index; i < index+5; i++) {
      output += "<li>" + movieList[i] + "</li><br>";
    }
    output += "</ul>"
    document.getElementById("getMovies").innerHTML = output;
  }
  req.send()
}

/* RELAX FRIENDS */
function openFriends() {
  incrementHappiness(10);
  document.getElementById("getMovies").style.display="none";
  document.getElementById("getFriends").style.display="block";
  document.getElementById("getMusic").style.display="none";
}

/* RELAX MUSIC */
function openMusic() {
  incrementHappiness(10);
  document.getElementById("getMovies").style.display="none";
  document.getElementById("getFriends").style.display="none";
  document.getElementById("getMusic").style.display="block";
}

function showCalcCourse() {
  document.getElementById("calcCourse").style.display="block";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
}

function showCsCourse() {
  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="block";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
}

function showBioCourse() {
  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="block";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="none";
}

function showPsychCourse() {
  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="block";
  document.getElementById("econCourse").style.display="none";
}

function showEconCourse() {
  document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="none";
  document.getElementById("csCourse").style.display="none";
  document.getElementById("bioCourse").style.display="none";
  document.getElementById("psychCourse").style.display="none";
  document.getElementById("econCourse").style.display="block";
}


function checkCalc() {    
  if(document.getElementById('CalcOp1').checked) {
      decrementGrades(20); 
    alert("Incorrect!");  
  }   
  else if(document.getElementById('CalcOp2').checked) {
      incrementGrades(20); 
      alert("Correct!");  
  }   
  else if(document.getElementById('CalcOp3').checked) {
      decrementGrades(20);   
      alert("Incorrect!");   
  }   
  else {
      decrementGrades(20);
      alert("You didn't select anything :(");   
  }   
   document.getElementById("calcCourse").style.display="none";
  document.getElementById("goToClass").style.display="block";
  document.getElementById('CalcOp1').checked = false;
  document.getElementById('CalcOp2').checked = false;
  document.getElementById('CalcOp3').checked = false;
}   

function checkCS() {    
  if(document.getElementById('CsOp1').checked) {
      incrementGrades(20); 
    alert("Correct!");  
  }   
  else if(document.getElementById('CsOp2').checked) {
      decrementGrades(20); 
      alert("Incorrect!");  
  }   
  else if(document.getElementById('CsOp3').checked) {
      decrementGrades(20);   
      alert("Incorrect!");   
  }   
  else {
      decrementGrades(20);
      alert("You didn't select anything :(");   
  }   
  document.getElementById("csCourse").style.display="none";
  document.getElementById("goToClass").style.display="block";
  document.getElementById('CsOp1').checked = false;
  document.getElementById('CsOp2').checked = false;
  document.getElementById('CsOp3').checked = false;
}   

function checkBio() {    
  if(document.getElementById('BioOp1').checked) {
      decrementGrades(20);   
      alert("Incorrect!"); 
  }   
  else if(document.getElementById('BioOp2').checked) {
      incrementGrades(20); 
      alert("Correct!");  
  }   
  else if(document.getElementById('BioOp3').checked) {
      decrementGrades(20);   
      alert("Incorrect!");   
  }   
  else {
      decrementGrades(20);
      alert("You didn't select anything :(");   
  }   
   document.getElementById("bioCourse").style.display="none";
  document.getElementById("goToClass").style.display="block";
  document.getElementById('BioOp1').checked = false;
  document.getElementById('BioOp2').checked = false;
  document.getElementById('BioOp3').checked = false;
}   

function checkPsych() {    
  if(document.getElementById('PsychOp1').checked) {
      incrementGrades(20);   
      alert("Correct!"); 
  }   
  else if(document.getElementById('PsychOp2').checked) {
      decrementGrades(20); 
      alert("Incorrect!");  
  }   
  else if(document.getElementById('PsychOp3').checked) {
      decrementGrades(20);   
      alert("Incorrect!");   
  }   
  else {
      decrementGrades(20);
      alert("You didn't select anything :(");   
  }   
   document.getElementById("psychCourse").style.display="none";
  document.getElementById("goToClass").style.display="block";
  document.getElementById('PsychOp1').checked = false;
  document.getElementById('PsychOp2').checked = false;
  document.getElementById('PsychOp3').checked = false;
}   

function checkEcon() {    
  if(document.getElementById('EconOp1').checked) {
      incrementGrades(20);   
      alert("Correct!"); 
  }   
  else if(document.getElementById('EconOp2').checked) {
      decrementGrades(20); 
      alert("Incorrect!");  
  }   
  else if(document.getElementById('EconOp3').checked) {
      decrementGrades(20);   
      alert("Incorrect!");   
  }   
  else {
      decrementGrades(20);
      alert("You didn't select anything :(");   
  }   
   document.getElementById("econCourse").style.display="none";
  document.getElementById("goToClass").style.display="block";
  document.getElementById('EconOp1').checked = false;
  document.getElementById('EconOp2').checked = false;
  document.getElementById('EconOp3').checked = false;
}   

/* MEMORY GAME */
function openCookies() {
  document.getElementById("memoryGameCookies").style.display="block";
  document.getElementById("memoryGameFruit").style.display="none";
  document.getElementById("memoryGamePizza").style.display="none";
}

function openFruit() {
  document.getElementById("memoryGameCookies").style.display="none";
  document.getElementById("memoryGameFruit").style.display="block";
  document.getElementById("memoryGamePizza").style.display="none";
}

function openPizza() {
  document.getElementById("memoryGameCookies").style.display="none";
  document.getElementById("memoryGameFruit").style.display="none";
  document.getElementById("memoryGamePizza").style.display="block";
}

var numList = [0,1,2,3,4,5];
function memory(numSpeed, nameOutput) {
  
  count = 0;
  const interval = setInterval(printNums, numSpeed);
  function printNums() {
    if (count > 5) {
      clearInterval(interval);
      document.getElementById(nameOutput).innerHTML = "Start guessing!";
    }
    else {
      let number = Math.floor(Math.random() * 10);
      numList[count] = number;
      document.getElementById(nameOutput).innerHTML = number;
      count ++;
    }
    
  }
  
}

function getInput(decrementVal, nameOut, nameInput) {
  var inval = document.getElementById(nameInput).value;
  var str ="";
  for (let j = 0; j < numList.length; j ++) {
    str += numList[j];
  }
  let resultMessage;
  if (str != inval) {
    resultMessage = "You did not remember correctly :( the sequence was: " + numList;
  }
  else {
    resultMessage = "You remembered correctly! :)";
    decrementHunger(decrementVal);
  }
  alert(resultMessage);
  document.getElementById("eat").style.display="block";
   document.getElementById("memoryGameCookies").style.display="none";
  document.getElementById("memoryGameFruit").style.display="none";
  document.getElementById("memoryGamePizza").style.display="none";
}

var displayBlob = setInterval(changePic, 1000);

function changePic() {
  if (parseInt(hunger) <= 30 && parseInt(grades)==100 && parseInt(happy)>=75) {
    document.getElementById("blobIMG").src = "all status.png";
  }
  else if (parseInt(hunger)>=75) {
    document.getElementById("blobIMG").src = "hungry blob.png";
  }
  else if (parseInt(happy)<=45) {
    document.getElementById("blobIMG").src = "sad blob.png";
  }
  else if (parseInt(hunger)<=15) {
    document.getElementById("blobIMG").src = "full blob.png";
  }
  else if (parseInt(grades)>=80) {
    document.getElementById("blobIMG").src = "smart blob.png";
  }
  else if (parseInt(hunger)>=80 && parseInt(grades)==0 && parseInt(happy)<=20) {
    document.getElementById("blobIMG").src = "none status.png";
  }
  else {
    document.getElementById("blobIMG").src = "happy blob.png";
  }
}


let count = 0;

function showNextInstructions() {
  count++;

  if (count==1) {
  document.getElementById("instructions").innerHTML = "<br><br>Beware of your needs! <br><br> If your hunger goes to 100% or your happiness drops to 0%, the game ends! <br>Both will gradually decrease over time, and faster than you think. <br><br> Your grades are a different matter,and must be earned through correct answers. <br>This will be explained shortly.";
  } else if (count==2) {
  document.getElementById("instructions").innerHTML = "<br><br>You'll find three options after you exit this screen; <br>Go To Class - improve your grades<br>Relax - do activities to increase your happiness<br>Eat - complete a game to decrease your hunger<br><br>Stay vigilant and tend to your needs to get as many points as you can! <br>Your grades act as your score multiplier, so the higher your grades, the better!";
  } else if (count==3) {
  document.getElementById("instructions").innerHTML = "<br><br>Keep track of your status in the top right corner. <br><br>You can also check your top left corner to see your blob self :) <br><br> Finally, your score is located on the bottom left. <br><br> Best of luck!";
  document.getElementsByClassName("nextButtons")[0].innerHTML = "Play!";
  } else if (count == 4) {
    start("all");
    document.getElementById("background").style.display = "none";
  }
  else {
    window.location.reload();
  }
}