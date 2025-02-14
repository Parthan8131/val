document.addEventListener("DOMContentLoaded", function () {
  // Floating hearts animation
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(createHeart, 500);

  // Chess animation
  setTimeout(() => {
    document.getElementById("knight").classList.add("move");
    document.getElementById("rook").classList.add("move");
  }, 1000);

  // Play background music on first interaction
  document.body.addEventListener("click", function () {
    document.getElementById("bg-music").play();
  }, { once: true });

  // Surprise button functionality
  document.getElementById("surprise-btn").addEventListener("click", function () {
    document.getElementById("code-output").textContent = "Love is the most beautiful code of all! ❤️";
  });

  // Show hidden love note on gift button click
  document.getElementById("gift-btn").addEventListener("click", function () {
    document.getElementById("love-note").style.display = "block";
  });

  // Easter egg feature
  document.querySelector(".main-title").addEventListener("mouseover", function () {
    this.textContent = "Forever Yours ❤️";
  });
  document.querySelector(".main-title").addEventListener("mouseout", function () {
    this.textContent = "To My Love 💖";
  });
});
