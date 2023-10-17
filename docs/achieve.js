const achievementSound = document.getElementById('achievement-sound');
achievementSound.volume = 0.5;
achievementSound.playbackRate = 2.0;

function playAchievementSound() {
  // Play the achievement sound
  achievementSound.currentTime = 0;
  achievementSound.play();
}

// Add event listener for each checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      playAchievementSound();
    }
  });
});
