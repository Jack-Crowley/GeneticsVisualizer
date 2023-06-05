class Agent extends Player {

    // Basic Constructor
    constructor(nn, location=0) {
        super(location);
        // this.inputsHeaders = inputsHeaders;
        // this.player = player;
        // this.weights = weights;

        if (nn instanceof NeuralNetwork) {
            this.nn = nn.copy();
            this.nn.mutate(0.1);
        } else {
            this.nn = new NeuralNetwork(3, 5, 2);
        }
        // Create neural net with first layer headers in inputsHeaders and weights
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
        let action = this.nn.predict([123, 182, 812])
        console.log(action);
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