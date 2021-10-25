// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   const confetti = new JSConfetti(); 

  var vol = document.getElementById('volume');
  var volIcon = document.querySelector("#volume-controls img");
  var finVol = 0.4;

  var horn = document.getElementsByClassName("hidden"); 
  var currImg = document.querySelector('img');

    vol.addEventListener('input', (event)=> {
        finVol = vol.value * 0.01; 
        if(vol.value == 0) {
            volIcon.src = "assets/icons/volume-level-0.svg";
        }
        if (vol.value >= 1 && vol < 33) {
            volIcon.src = "assets/icons/volume-level-1.svg";
        }
        if (vol.value >= 33 && vol < 67) {
            volIcon.src = "assets/icons/volume-level-2.svg";
        }
        if (vol.value >= 67) {
            volIcon.src = "assets/icons/volume-level-3.svg";
        }
    });

    document.querySelector("#horn-select").addEventListener("change", (e)=>{ 
        if (e.target.value == 'air-horn') {
          currImg.src = "assets/images/air-horn.svg";
          horn.src = "assets/audio/air-horn.mp3";
        }
        else if (e.target.value == 'car-horn') {
          currImg.src = "assets/images/car-horn.svg";
          horn.src = "assets/audio/car-horn.mp3";
        }
        else {
          currImg.src = "assets/images/party-horn.svg";
          horn.src = "assets/audio/party-horn.mp3";
        }

    });

  const volume = document.getElementById("volume"); 
  const playButt = document.querySelector('button');

  playButt.addEventListener("click", function() {
    var finAudio = new Audio(horn.src);
    finAudio.volume = finVol;

    if(horn.src == "assets/audio/party-horn.mp3" && finVol > 0){
        confetti.addConfetti();
    }
        
    finAudio.play(); 
  });
