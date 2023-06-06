class Tester extends Game{
    constructor (simulation, numPlayers, baseAgent=null) {
        super(simulation, numPlayers, baseAgent, new Circle(null, new Position(), 20, "#ff0000",{canLeaveEdge:false}));
    }

    createMap() {
        for (let i = 0; i < 50; i++) {
            let xPos = Math.random()*canvas.width;
            let yPos = Math.random()*canvas.height;
            this.movers.forEach((mover) => {
                let s = new Circle(mover.board, new Position(xPos, yPos), 5, "#00ff00", {fillColor: "#00ff00", onCollide: () => {mover.addScore(50)}})
    
                mover.board.addShape(s)
                s.collisions.push(mover.shape)
            })
        }

        for (let i = 0; i < 15; i++) {
            let xPos = Math.random()*canvas.width;
            let yPos = Math.random()*canvas.height;
            this.movers.forEach((mover) => {
                let s = new Circle(mover.board, new Position(xPos, yPos), 5, "#0000ff", {fillColor: "#0000ff", onCollide: () => {mover.addScore(-50)}})

                mover.board.addShape(s)
                s.collisions.push(mover.shape)
            })
        }

        this.movers.forEach((mover) => {
            let s = new Circle(mover.board, new Position(250,250), 5, "#ffff00", {fillColor: "#ffff00", onCollide: () => {mover.endSimulation();this.playerFinished()}})
    
            mover.board.addShape(s)
            s.collisions.push(mover.shape)
        })
    }

    start() {
        this.taskIDs.push(setInterval(() => {
            this.movers.forEach((mover) => {
                mover.addScore(-10);
            })            
        }, 1000))
        super.start()
    }
}