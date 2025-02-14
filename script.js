// Heart pop-up animation effect
function createHeartAnimation() {
  const heart = document.createElement('div');
  heart.classList.add('love-heart');
  heart.textContent = '❤️';
  document.body.appendChild(heart);

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

// Trigger heart animation at random intervals
setInterval(createHeartAnimation, 300);

// Animate Knight and Rook
window.onload = function() {
  const knight = document.getElementById('knight');
  const rook = document.getElementById('rook');
  
  // Wait for the page to load, then move the pieces
  setTimeout(() => {
    knight.classList.add('move');
    rook.classList.add('move');
  }, 1000);

  // Surprise button interaction
  document.getElementById('surprise-btn').addEventListener('click', function() {
    document.getElementById('surprise-message').innerText = "You are my perfect match, just like a knight and rook on the chessboard!";
    
    // Displaying code in the interactive section
    let codeOutput = document.getElementById('code-output');
    codeOutput.innerHTML = `
      <code>const myLove = "❤️";</code><br>
      <code>console.log("To my love: " + myLove);</code><br>
      <code>output: "To my love: ❤️"</code>
    `;
  });

  // "Click Me for Your Gift" button interaction
  document.getElementById('gift-btn').addEventListener('click', function() {
    const roseLoveContainer = document.getElementById('rose-love-container');
    
    // Create a random number of roses and love emojis
    let emojis = '';
    for (let i = 0; i < 20; i++) {
      emojis += '🌹❤️ ';
    }
    
    roseLoveContainer.innerHTML = emojis; // Display emojis
  });
};
