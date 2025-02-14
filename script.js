// Heart pop-up animation effect
function createHeartAnimation() {
  const heart = document.createElement('div');
  heart.classList.add('heart-cry');
  heart.textContent = '❤️';
  document.getElementById('heart-cry-container').appendChild(heart);

  // Set a random position for the heart
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  heart.style.left = `${randomX}px`;
  heart.style.top = `${randomY}px`;

  // Remove the heart after the animation is complete
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// Crying emoji pop-up animation effect
function createCryAnimation() {
  const cry = document.createElement('div');
  cry.classList.add('heart-cry');
  cry.textContent = '😢';
  document.getElementById('heart-cry-container').appendChild(cry);

  // Set a random position for the cry
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  cry.style.left = `${randomX}px`;
  cry.style.top = `${randomY}px`;

  // Remove the cry after the animation is complete
  setTimeout(() => {
    cry.remove();
  }, 2000);
}

// Trigger heart and crying animations based on button clicks
document.getElementById('yes-btn').addEventListener('click', function() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeartAnimation, i * 100);  // Add slight delay for effect
  }
});

document.getElementById('no-btn').addEventListener('click', function() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createCryAnimation, i * 100);  // Add slight delay for effect
  }
});

// Animate Knight and Rook
window.onload = function() {
  const knight = document.getElementById('knight');
  const rook = document.getElementById('rook');
  
  // Wait for the page to load, then move the pieces
  setTimeout(() => {
    knight.classList.add('move');
    rook.classList.add('move');
  }, 1000);
};
