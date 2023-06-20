class Agent extends Mover {

    // Basic Constructor
    constructor(brain, shapes) {
        super("Agent")
        this.brain = brain;
        this.inputs = shapes;

        if (brain instanceof NeuralNetwork) {
            this.brain = brain.copy();
            this.brain.mutate(0.1);
        } else {
            this.brain = new NeuralNetwork(this.inputs.length*2+2, this.inputs.length*3+2, 2);
        }
        // Create neural net with first layer headers in inputsHeaders and weights
        // Prob 3 layer (1 hidden) but not too sure
        // Weights and inputHeaders both arrays, with the 0 index of both representating same obj
    }

    move() {
        // TODO
        // creates predictions based off of this.inputs (which is an array)
        if (this.finished) {return};
        let values = [];
        for (let i = 0; i < this.inputs.length; i++) {
            console.log(this.inputs[i])
            let s = (this.board.getClosestShape(this,this.inputs[i]));
            console.log(s)
            let sXDist = Number(s.position.xPos)-Number(this.shape.position.xPos);
            let sYDist = Number(s.position.yPos)-(this.shape.position.yPos);
            values.push(sXDist);
            values.push(sYDist);
        }
        values.push(Number(this.shape.position.xPos));
        values.push(Number(this.shape.position.yPos));
        console.log(values)
        let action = this.brain.predict(values)
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