class Agent extends Mover {

    // Basic Constructor
    constructor(brain) {
        super("Agent")
        this.brain = brain;

        this.nn = null; // Create neural net with first layer headers in inputsHeaders and weights
        // Prob 3 layer (1 hidden) but not too sure
        // Weights and inputHeaders both arrays, with the 0 index of both representating same obj
    }

    move() {
        if (this.finished) {return}
        this.shape.position.setVector(new Vector((Math.random()*2-1)*4, (Math.random()*2-1)*4))
    }

    calculateMove() {
        // TODO
        // creates predictions based off of this.inputs (which is an array)
    }

    get fitness() {
        // Placeholder
        return Math.random()*200-100;
    }

    createClones(number) {
        let clonesWeights = [];
        for (let i = 0; i < number; i++) {
            clonesWeights.push();
        }

        return clonesWeights;
    }
}