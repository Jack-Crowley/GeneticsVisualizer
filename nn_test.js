let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const canvas = document.querySelector("canvas");
const score = document.querySelector(".scoreAmount");
const addScore = (amount) => {score.textContent = Number(score.textContent)+amount}

sb.addEventListener("click", startSimulation)
eb.addEventListener("click", endSimulation)

let a;
let b;
let c;

function startSimulation() {
    b = new NeuralNetwork(3, 5, 2);
    a = new Agent(b);
    console.log("first one")
    a.calculateMove();
    c = new Agent(b);
    console.log("mutated one")
    a.calculateMove();
}

function endSimulation() {
    running = false;

    addScore(3)

    sb.style.display = "block";
    eb.style.display = "none";

    game.end()
}