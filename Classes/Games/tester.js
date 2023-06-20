class Tester extends Game{
    constructor (simulation, numPlayers, model=null, ...baseAgent) {
        super(simulation, numPlayers, baseAgent, new Circle("Mover", null, new Position(), 20, "#ff0000",{canLeaveEdge:false}), model, ["green","blue","yellow"]);
    }

    createMap() {
        for (let i = 0; i < 50; i++) {
            let xPos = Math.random()*canvas.width;
            let yPos = Math.random()*canvas.height;
            this.movers.forEach((mover) => {
                let s = new Circle("green", mover.board, new Position(xPos, yPos), 5, "#00ff00", {fillColor: "#00ff00", onCollide: () => {mover.addScore(50)}})
    
                mover.board.addShape(s)
                s.collision = (mover.shape)
            })
        }

        for (let i = 0; i < 15; i++) {
            let xPos = Math.random()*canvas.width;
            let yPos = Math.random()*canvas.height;
            this.movers.forEach((mover) => {
                let s = new Circle("blue", mover.board, new Position(xPos, yPos), 5, "#0000ff", {fillColor: "#0000ff", onCollide: () => {mover.addScore(-50)}})

                mover.board.addShape(s)
                s.collision = (mover.shape)
            })
        }

        this.movers.forEach((mover) => {
            let s = new Circle("yellow", mover.board, new Position(250,250), 5, "#ffff00", {fillColor: "#ffff00", onCollide: () => {mover.endSimulation();this.playerFinished()}})
    
            mover.board.addShape(s)
            s.collision = (mover.shape)
        })

        console.log(this.mover.board.shapes)
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