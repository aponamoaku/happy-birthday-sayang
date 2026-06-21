const enterBtn = document.getElementById("enterBtn");
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const music = document.getElementById("bgMusic");
const roseTransition = document.getElementById("roseTransition");

/* ==========================
   TAP UNTUK MEMULAI
========================== */

if (startBtn) {
    startBtn.addEventListener("click", () => {

        music.play().catch(() => {
            console.log("Autoplay diblok browser");
        });

        intro.style.display = "none";

        roseTransition.style.display = "block";
        roseTransition.classList.add("opening");

        setTimeout(() => {
            roseTransition.style.display = "none";
        }, 2500);

    });
}

/* ==========================
   BUKA HADIAH
========================== */

if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        window.location.href = "pages/letter.html";

    });
}