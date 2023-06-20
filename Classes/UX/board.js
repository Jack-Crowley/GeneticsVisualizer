class Board {
    constructor() {
        this.shapes= [];
        this.shapeNames = [];
        this.shapeMap = new Map()
    }

    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    addShape(shape) {
        let pos = 0;
        while (pos < this.shapes.length-1 && this.shapes[pos].position.xPos < shape.position.xPos) {pos++}
        this.shapes.splice(pos,0,shape)
        if (!this.shapeMap.has(shape.name)) {
            this.shapeNames.push();
            this.shapeMap.set(shape.name, [shape])
        }
        else {
            let p = 0;
            while (p < this.shapeMap.get(shape.name).length-1 && this.shapeMap.get(shape.name)[p].position.xPos < shape.position.xPos) {p++}
            this.shapeMap.get(shape.name).splice(p,0,shape)
        }
    }

    getShapes(name) {
        console.log(name)
        console.log(this.shapeMap.get(name))
        return this.shapeMap.get(name);
    }

    getClosestShape(player, name) {
        let closeValue = -1;
        let closeShape = null;
        this.getShapes(name).forEach((shape) => {
            let x = Math.sqrt((Number(shape.position.xPos)-Number(player.shape.position.xPos))**2+(Number(shape.position.yPos)-Number(player.shape.position.yPos))**2);
            if (closeValue == -1 || closeValue > x) {
                closeValue = x
                closeShape = shape;
            }
        })
        return closeShape;
    }

    draw() {
        clearCanvas()
        this.shapes.forEach((shape) => {
            shape.draw()
        })
    }

    update() {
        this.shapes.forEach((shape) => {
            shape.update()
        })
        // let bestMover = game.getBestAgent()
        // document.querySelectorAll('canvas.chart').forEach((canvas) => {
        //     canvas.dataset.values = canvas.dataset.values.split(',').slice(0,-1).join(',')
        //     canvas.dataset.values += bestMover.score
        //     console.log("Added: " + canvas.dataset.values)
        //     createChart()
        // })
    }

    deleteShape(shape) {
        if (this.shapes.indexOf(shape) != -1) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        }
    }
}