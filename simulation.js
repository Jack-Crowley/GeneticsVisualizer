sb.addEventListener("click", () => {start(true)})
gb.addEventListener("click", () => {start(false)})
eb.addEventListener("click", end)

let game;
let interval = -1;

function start(simulation) {
    table.innerHTML=''

    running = true;

    if (simulation) {
        game = new Tester(simulation, 10);
        interval = setInterval(() => {
            table.innerHTML="";
            bestMovers = game.getBestAgents(2)
            game.end();
            console.log(bestMovers)
            game = new Tester(simulation, 10);
        }, 10000)
    }
    else {
        game = new Tester(simulation, 1);
    }

    sb.style.display = "none";
    eb.style.display = "block";
    gb.style.display = "none";
}

function end() {
    if (interval != -1) {
        clearInterval(interval)
    }

    running = false;

    sb.style.display = "block";
    gb.style.display = "block";
    eb.style.display = "none";

    game.end()
}