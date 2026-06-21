let score = 0;

const gameArea = document.getElementById("game-area");
const scoreText = document.getElementById("score");
const winMessage = document.getElementById("win-message");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*90 + "%";

    heart.style.top = Math.random()*80 + "%";

    heart.onclick = () => {

        score++;

        scoreText.innerHTML =
        `Hati terkumpul: ${score} / 20`;

        heart.remove();

        if(score >= 20){

            winMessage.style.display = "block";

            clearInterval(spawn);
        }

    };

    gameArea.appendChild(heart);

    setTimeout(() => {

        if(heart.parentNode){

            heart.remove();

        }

    },6000);

}

const spawn = setInterval(createHeart,500);