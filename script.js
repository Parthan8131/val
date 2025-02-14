// Function to create a heart animation
function createHeartAnimation() {
  const heart = document.createElement('div');
  heart.classList.add('love-heart');
  heart.textContent = '❤️';

  // Position the heart randomly
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  heart.style.left = `${randomX}px`;
  heart.style.top = `${randomY}px`;

  // Append the heart to the love-background div
  document.getElementById('love-background').appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 3000); // Matches the animation duration
}

// Trigger heart pop-up when "Click Me!" button is clicked
document.getElementById('gift-btn').addEventListener('click', function() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeartAnimation, i * 100);  // Adding slight delay for effect
  }
});

// Trigger heart pop-up on button clicks (Yes/No buttons)
document.getElementById('surprise-btn').addEventListener('click', function() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeartAnimation, i * 100);  // Adding slight delay for effect
  }
});
