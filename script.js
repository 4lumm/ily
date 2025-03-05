document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const flap = envelope.querySelector(".flap");
  const expandedLetter = document.getElementById("expanded-letter");
  const closeBtn = document.getElementById("close-btn");
  const vinyl = document.getElementById("vinyl");
  const music = document.getElementById("background-music");
  let isPlaying = false;
  

  // Open the envelope and reveal the letter
  envelope.addEventListener("click", (event) => {
    event.stopPropagation();  // Ensure vinyl click doesn’t interfere
    flap.style.transform = "rotateX(-180deg)";
    setTimeout(() => {
      expandedLetter.style.display = "block";
    }, 500);  // Delay to match the flap animation
  });

  // Close the letter
  closeBtn.addEventListener("click", () => {
    expandedLetter.style.display = "none";
    flap.style.transform = "rotateX(0deg)";
  });

  // Toggle play/pause on vinyl click
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

  // Stop spinning when the music ends
  music.addEventListener("ended", () => {
    vinyl.classList.remove("spin");
    isPlaying = false;
  });
});