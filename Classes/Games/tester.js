class Tester extends Game{
    constructor (score, board, simulation) {
        let shape = new Circle(new Position(), 20, "#ff0000");
        (!simulation) ? board.createMover(new Player(shape)) : board.createMover(new Agent(shape))        

        console.log(board.mover)

        for (let i = 0; i < 10; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#00ff00", "#00ff00", () => {addScore(50)})

            board.addShape(s)
            s.collisions.push(board.mover.shape)
        }

        for (let i = 0; i < 5; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#0000ff", "#0000ff", () => {addScore(-50)})

            board.addShape(s)
            s.collisions.push(board.mover.shape)
        }

        let s = new Circle(new Position(250,250), 5, "#ffff00", "#ffff00", () => {endSimulation()})

        board.addShape(s)
        s.collisions.push(board.mover.shape)

        super(score, board);
    }

    start() {
        this.taskIDs.push(setInterval(() => {addScore(-5)}, 1000))
        super.start()
    }
}