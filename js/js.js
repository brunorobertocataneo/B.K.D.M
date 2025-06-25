let heartInterval; 

function createHeart() {
  const heart = document.createElement('img');
  heart.src = 'logo.webp';  
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';  
  heart.style.animationDuration = (3 + Math.random() * 2) + 's'; 
  const size = 20 + Math.random() * 30;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startHearts() {
  if (!heartInterval) {
    heartInterval = setInterval(createHeart, 150); 
  }
}

document.getElementById('heartButton').addEventListener('click', startHearts);
