const myAudio = document.querySelector("#my-audio");
console.log(myAudio);


//rewind 10 second button.

const rewindButton = document.querySelector("#rewind-button");

rewindButton.addEventListener("click", rewindAudio);
function rewindAudio() {
  myAudio.currentTime = Math.max(0, myAudio.currentTime - 10);
  
}





//play-pause button, every audio player needs a play/pause button.

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", playPauseVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function playPauseVideo() {
  if (myAudio.paused || myAudio.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myAudio.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    myAudio.pause();
  }
}





//fast forawrd button.

const fastForwardButton = document.querySelector("#fast-forward-button");
fastForwardButton.addEventListener("click", fastForwardAudio);
function fastForwardAudio() {
  myAudio.currentTime = Math.min(myAudio.duration, myAudio.currentTime + 30);
}





//mute button.

const muteButton = document.querySelector("#mute-button");
const muteButtonImg = document.querySelector("#mute-button-img");
muteButton.addEventListener("click", muteAudio);

function muteAudio() {
  if (myAudio.muted) {
      muteButtonImg.src = "https://img.icons8.com/ios-glyphs/30/mute.png";
      myAudio.muted = false;
  } else {
      muteButtonImg.src = "https://img.icons8.com/ios-glyphs/30/speaker.png";
      myAudio.muted = true;
  }
}

//replay button
const replayButton = document.querySelector("#replay-button");
const replayButtonImg = document.querySelector("#replay-button-img");

replayButton.addEventListener("click", replayAudio);

function replayAudio() {
  myAudio.currentTime = 0;
  myAudio.play();
}





//progress bar

const progressBar = document.querySelector("#progress");
    const progressBarContainer = document.querySelector(".progress-bar");
    myAudio.addEventListener("timeupdate", updateProgressBar);
    progressBarContainer.addEventListener("click", seek);

    function updateProgressBar() {
      const percentage = (myAudio.currentTime / myAudio.duration) * 100;
      progressBar.style.width = percentage + "%";
  }

  function seek(event) {
      const rect = progressBarContainer.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const width = rect.width;
      const duration = myAudio.duration;

      myAudio.currentTime = (offsetX / width) * duration;
  }


  
  
  
  
 