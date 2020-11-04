
exports.timer = function () {

  var seconds = 60;
  var interval;

  var intervalTime = 60;

  var updateButton = document.getElementById("update");
  var intervalInput = document.getElementById("intervalTime");

  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var sets = document.getElementById("set#");


  var secondsSpan = document.getElementById("seconds");

  updateButton.onclick = function() {
    secondsSpan.innerHTML = intervalInput.value;
    intervalTime = Math.floor(intervalInput.value * 1);
    reset();
  }

  startButton.onclick = function() {
    interval = setInterval(countdownSeconds, 1000);
    startButton.style.visibility = "hidden";
    updateButton.style.visibility = "hidden";
  }

  function countdownSeconds() {
    seconds -= 1;
    secondsSpan.innerHTML = seconds;
    if (seconds === 0) {
            seconds = intervalTime + 1;
            newSetNumber();
        }
  }

  function newSetNumber() {
      var sets = document.getElementById("set#");
      var setNumber = sets.innerHTML;
      setNumber++;
      sets.innerHTML = setNumber;
  }

  stopButton.onclick = function() {
    var setNumber = sets.innerHTML;
    if (setNumber < 10) {
      window.alert("Sets Completed: " + setNumber + ". Keep pushing until you hit 10.")
    } else {
      window.alert("Sets Completed: " + setNumber + ". Stay hard.");
    }
    reset();
  }

  function reset() {
    clearInterval(interval);
    seconds = intervalTime;
    secondsSpan.innerHTML = seconds;
    startButton.style.visibility = "visible";
    updateButton.style.visibility = "visible";
    sets.innerHTML = 1;
  }

}
