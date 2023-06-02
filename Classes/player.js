class Player {

    constructor(location=new Location()) {
        this.location = location;

        // UpPress, UpHold, DownPress, DownHold
        this.inputHandler = new KeyInputHandler()
    }

    move() {
        
    }

}

class KeyInputHandler {
    constructor() {
        this.upPressActions = new Map()
        this.upHoldActions = new Map()
        this.downPressActions = new Map()
        this.downHoldActions = new Map()

        this.currentVector = new Vector();
    }

    calculateVector() {
        let newVector = this.currentVector.clone();
        this.currentVector.clear()
        return newVector;
    }
}