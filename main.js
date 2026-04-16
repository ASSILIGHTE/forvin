const text = "Aku punya sesuatu yang indah untukmu...\nKlik dan lihat 🌸";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = () => {
  // typing effect
  if (document.getElementById("typingText")) {
    typeEffect();
  }

  // 🔥 aktifkan animasi bunga
  const container = document.querySelector(".container");
  if (container) {
    setTimeout(() => {
      container.classList.add("play");
    }, 300);
  }
};

function goToFlower() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.muted = true;
    music.play().catch((e) => {
      console.log("Music autoplay prevented:", e);
    });
    music.muted = false;
  }

  setTimeout(() => {
    window.location.href = "flower.html";
  }, 800);
}
