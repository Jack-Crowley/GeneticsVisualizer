let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const canvas = document.querySelector("canvas");
const score = document.querySelector(".scoreAmount");
const addScore = (amount) => {score.textContent = Number(score.textContent)+amount}

sb.addEventListener("click", startSimulation)
eb.addEventListener("click", endSimulation)

let game = new Tester(addScore, new Board(canvas))

function startSimulation() {
    running = true;
    
    sb.style.display = "none";
    eb.style.display = "block";

    game.start()
}

function endSimulation() {
    running = false;

    addScore(3)

    sb.style.display = "block";
    eb.style.display = "none";

    game.end()
}