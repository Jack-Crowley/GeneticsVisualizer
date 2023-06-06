class Agent extends Mover {

    // Basic Constructor
    constructor(brain) {
        super("Agent")
        this.brain = brain;

        if (brain instanceof NeuralNetwork) {
            this.brain = brain.copy();
            this.brain.mutate(0.1);
        } else {
            this.brain = new NeuralNetwork(8, 10, 2);
        }
        // Create neural net with first layer headers in inputsHeaders and weights
        // Prob 3 layer (1 hidden) but not too sure
        // Weights and inputHeaders both arrays, with the 0 index of both representating same obj
    }

    // move() {
    //     if (this.finished) {return}
    //     this.shape.position.setVector(new Vector((Math.random()*2-1)*4, (Math.random()*2-1)*4))
    // }

    move() {
        // TODO
        // creates predictions based off of this.inputs (which is an array)
        if (this.finished) {return};
        let closeGreen = this.board.sortPositions(this,"green").pop();
        let closeBlue = this.board.sortPositions(this,"blue").pop();
        let greenXDist = closeGreen.position.xPos-this.shape.position.xPos;
        let greenYDist = closeGreen.position.yPos-this.shape.position.yPos;
        let blueYDist = closeBlue.position.yPos-this.shape.position.yPos;
        let blueXDist = closeBlue.position.xPos-this.shape.position.xPos;
        let yellowXDist = 250-this.shape.position.xPos;
        let yellowYDist = 250-this.shape.position.yPos;
        let action = this.brain.predict([greenXDist,greenYDist,blueXDist,blueYDist,yellowXDist,yellowYDist,this.shape.position.xPos,this.shape.position.yPos])
        console.log(action);
        this.shape.position.setVector(new Vector(action[0],action[1]));
    }

    get fitness() {
        // Placeholder
        return this.score;
    }

    createClones(number) {
        let clonesWeights = [];
        for (let i = 0; i < number; i++) {
            clonesWeights.push();
        }

        return clonesWeights;
    }

    static compareFn(a, b) {
        return (a.fitness-b.fitness)
    }
}