let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");
const score = document.querySelector(".scoreAmount");
const addScore = (amount) => {score.textContent = Number(score.textContent)+amount}

sb.addEventListener("click", startSimulation)
eb.addEventListener("click", endSimulation)

function startSimulation() {
    running = true;
    
    sb.style.display = "none";
    eb.style.display = "block";
}

function endSimulation() {
    running = false;

    addScore(3)

    sb.style.display = "block";
    eb.style.display = "none";
}