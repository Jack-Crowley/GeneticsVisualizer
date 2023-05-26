class Player {

    // Basic Constructor
    constructor(inputsHeaders, agent, weights) {
        this.inputsHeaders = inputsHeaders;
        this.agent = agent;
        this.weights = weights;

        this.nn = null; // Create neural net with first layer headers in inputsHeaders and weights
        // Prob 3 layer (1 hidden) but not too sure
    }

    // Calculates inputs and stores in this.inputs
    setMoves() {
        this.inputs = [];

        this.inputsHeaders.forEach((input) => {
            this.inputs.push(agent.calcInput(input));
        })
    }

    get move() {
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
}