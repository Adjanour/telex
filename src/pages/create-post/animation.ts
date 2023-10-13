function animateEmoji(emoji:any, characters:any) {
    // Hide the emoji and each character.
    emoji.style.opacity = 0;
    for (const character of characters) {
      character.style.opacity = 0;
    }
  
    // Reveal the emoji and then each character one by one at a set interval.
    setTimeout(() => {
      emoji.style.opacity = 1;
    }, 0);
  
    for (let i = 0; i < characters.length; i++) {
      setTimeout(() => {
        characters[i].style.opacity = 1;
      }, (i + 1) * 100);
    }
  }
  // Get the emoji and character elements.
  const emoji = document.getElementById('emoji');
  const characters = document.querySelectorAll('h3 span:not(#emoji)');

  // Animate the emoji and each character.
  animateEmoji(emoji, characters);

  export{}