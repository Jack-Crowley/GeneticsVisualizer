class Tester extends Game{
    constructor (simulation) {
        super(simulation);

        if (simulation) {
            for (let i = 0; i < 10; i++) {
                let mov = new Agent(null);
                this.addMover(mov);
                mov.setShape(new Circle(mov.board, new Position(), 20, "#ff0000",{canLeaveEdge:false}))
            }   
        }
        else {
            let mov = new Player();
            this.addMover(mov);
            mov.setShape(new Circle(mov.board, new Position(), 20, "#ff0000",{canLeaveEdge:false}))
        }

        this.setMover(this.movers[0])
        this.mover.setShape(new Circle(this.mover.board, new Position(), 20, "#000000",{canLeaveEdge:false}));


        this.createMap()
    }

    

    createMap() {
        this.movers.forEach((mover) => {
            for (let i = 0; i < 50; i++) {
                let s = new Circle(mover.board, new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#00ff00", {fillColor: "#00ff00", onCollide: () => {mover.addScore(50)}})
    
                mover.board.addShape(s)
                s.collisions.push(mover.shape)
            }
    
            for (let i = 0; i < 15; i++) {
                let s = new Circle(mover.board, new Position(Math.random()*canvas.width, Math.random()*canvas.height), 5, "#0000ff", {fillColor: "#0000ff", onCollide: () => {mover.addScore(-50)}})
    
                mover.board.addShape(s)
                s.collisions.push(mover.shape)
            }
    
            let s = new Circle(mover.board, new Position(250,250), 5, "#ffff00", {fillColor: "#ffff00", onCollide: () => {end()}})
    
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