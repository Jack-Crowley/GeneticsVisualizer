sb.addEventListener("click", () => {start(true)})
gb.addEventListener("click", () => {start(false)})
eb.addEventListener("click", end)

let game;

function start(simulation) {
    table.innerHTML=''

    running = true;

    setScore(0)

    game = new Tester(simulation, simulation ? 10 : 1);

    sb.style.display = "none";
    eb.style.display = "block";
    gb.style.display = "none";

    game.start()
}

function end() {
    running = false;

    sb.style.display = "block";
    gb.style.display = "block";
    eb.style.display = "none";

    game.end()
}