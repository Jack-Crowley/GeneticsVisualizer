class Player extends Mover {

    constructor() {
        super()
        // UpPress, UpHold, DownPress, DownHold
        this.inputHandler = new KeyInputHandler()
    }

    move() {
        this.shape.position.setVector(this.inputHandler.getVector())
        super.move()
    }
}

class KeyInputHandler {
    constructor() {
        this.pressedActions = new Map()
        this.currentVector = new Vector();

        this.keys = []

        // TODO make it more customizable
        this.setMaps();

        document.addEventListener("keydown", (e) => {
            if (this.keys.indexOf(e.keyCode) == -1) {
                this.keys.push(e.keyCode);
            }
        })

        document.addEventListener("keyup", (e) => {
            if (this.keys.indexOf(e.keyCode) != -1) {
                this.keys.splice(this.keys.indexOf(e.keyCode), 1);
            }
        })
    }

    getVector() {
        this.keys.forEach((key) => {
            if (this.pressedActions.has(key)) {
                this.currentVector.add(this.pressedActions.get(key))
            }
        })

        let newVector = this.currentVector.clone();
        this.currentVector.clear()
        return newVector;
    }

    setMaps() {
        this.pressedActions.set(65, new Vector(-1,0))
        this.pressedActions.set(68, new Vector(1,0))
        this.pressedActions.set(87, new Vector(0,-1))
        this.pressedActions.set(83, new Vector(0,1))
    }
}