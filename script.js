const enterBtn = document.getElementById("enterBtn");
const overlay = document.querySelector(".overlay");
const music = document.getElementById("bgMusic");

// Enter gallery
enterBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  music.play().catch(() => {
    console.log("Autoplay blocked until user interaction.");
  });
});

// Convert vertical scroll into horizontal scroll
window.addEventListener("wheel", (e) => {
  window.scrollBy({
    left: e.deltaY,
    behavior: "smooth"
  });
});
