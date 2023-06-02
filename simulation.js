sb.addEventListener("click", () => {start(true)})
gb.addEventListener("click", () => {start(false)})
eb.addEventListener("click", end)

let game;

function start(simulation) {
    running = true;

    setScore(0)

    board = new Board(canvas);

    game = new Tester(addScore, board, simulation);

    sb.style.display = "none";
    eb.style.display = "block";
    gb.style.display = "none";

    game.start()
}

function end() {
    running = false;

    addScore(3)

    sb.style.display = "block";
    gb.style.display = "block";
    eb.style.display = "none";

    game.end()
}