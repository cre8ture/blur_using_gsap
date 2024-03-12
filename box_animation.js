
document.addEventListener("DOMContentLoaded", function () {
    
const box = document.getElementById("box");

// Ensure the box has some initial styling for visibility
box.style.position = "relative"; // Avoid fixed positioning

gsap.to(box, {
  duration: 2,
  x: 200,
  y: 100,
  ease: "bounce.out"
});

})
