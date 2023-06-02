class Agent {

    // Basic Constructor
    constructor(inputsHeaders, weights, location=0) {
        super(location);
        this.inputsHeaders = inputsHeaders;
        this.weights = weights;

        this.nn = null; // Create neural net with first layer headers in inputsHeaders and weights
        // Prob 3 layer (1 hidden) but not too sure
        // Weights and inputHeaders both arrays, with the 0 index of both representating same obj
    }

    // Calculates inputs and stores in this.inputs
    setMoves() {
        this.inputs = [];

        this.inputsHeaders.forEach((input) => {
            this.inputs.push(player.calcInput(input));
        })
    }

    move() {
        this.setMoves();
        return this.calculateMove();
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