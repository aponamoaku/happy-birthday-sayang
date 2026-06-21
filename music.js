const music = document.getElementById("bgMusic");

if (music) {

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    music.volume = 0.5;

    const shouldPlay = localStorage.getItem("musicPlaying");

    music.addEventListener("loadedmetadata", () => {

        const time = localStorage.getItem("musicTime");

        if (time) {
            music.currentTime = parseFloat(time);
        }

        if (shouldPlay === "true") {
            music.play().catch(() => {});
        }

    });

    setInterval(() => {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }, 1000);
}