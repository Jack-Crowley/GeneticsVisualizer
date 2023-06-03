class Tester extends Game{
    constructor (score, board, simulation) {
        if (simulation) {
            for (let i = 0; i < 10; i++) {
                board.createMover(new Agent(null, new Circle(new Position(), 20, "#ff0000",{canLeaveEdge:false})))        
            }   
        }
        else board.createMover(new Player(new Circle(new Position(), 20, "#ff0000", {canLeaveEdge:false})))

        super(score, board, simulation);
    }

    createMap() {
        for (let i = 0; i < 10; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#00ff00", {fillColor: "#00ff00", onCollide: () => {addScore(50)}})

            board.addShape(s)
            s.collisions.push(board.mover.shape)
        }

        for (let i = 0; i < 5; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#0000ff", {fillColor: "#0000ff", onCollide: () => {addScore(-50)}})

            board.addShape(s)
            s.collisions.push(board.mover.shape)
        }

        let s = new Circle(new Position(250,250), 5, "#ffff00", {fillColor: "#ffff00", onCollide: () => {end()}})

        board.addShape(s)
        s.collisions.push(board.mover.shape)
    }

    start() {
        this.taskIDs.push(setInterval(() => {addScore(-5)}, 1000))
        super.start()
    }
}