document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const flap = envelope.querySelector(".flap");
  const expandedLetter = document.getElementById("expanded-letter");
  const closeBtn = document.getElementById("close-btn");
  const vinyl = document.getElementById("vinyl");
  const music = document.getElementById("background-music");
  let isPlaying = false;
  
  envelope.addEventListener("click", (event) => {
    event.stopPropagation();  
    flap.style.transform = "rotateX(-180deg)";
    setTimeout(() => {
      expandedLetter.style.display = "block";
    }, 500);
  });

  closeBtn.addEventListener("click", () => {
    expandedLetter.style.display = "none";
    flap.style.transform = "rotateX(0deg)";
  });

  vinyl.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      vinyl.classList.remove("spin");
    } else {
      music.play();
      vinyl.classList.add("spin");
    }
    isPlaying = !isPlaying;
  });

  music.addEventListener("ended", () => {
    vinyl.classList.remove("spin");
    isPlaying = false;
  });
});