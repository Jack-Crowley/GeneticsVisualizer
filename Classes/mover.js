class Mover {
    constructor(type) {
        this.type = type;
        this.board = new Board();
        this.score = 0;
        this.shape = null;
        this.finished = false;
    }

    setShape(shape) {
        this.shape = shape;
    }

    draw() {
        this.shape.draw()
    }

    binSearchForRange(minX, maxX, arr) {
        let max = this.binSearchSide(minX,maxX,arr,false);
        let min = this.binSearchSide(minX,maxX,arr,true);
        return [min,max];
    }

    binSearchSide(l, r, arr, bool) {
        let lowBound = 0;
        let highBound = arr.length-1;
        let mid;
        while (highBound >= lowBound) {
            mid = lowBound + Math.floor((highBound - lowBound) / 2);    
            // If the element is present at the middle
            // itself
            if (bool && arr[mid] == l)
                return mid;
            else if (!bool && arr[mid] == r)
                return mid;
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (bool) {
                if (arr[mid].position.xPos > l)
                    highBound = mid - 1;
                else
                    lowBound = mid + 1
            }
            else {
                if (arr[mid].position.xPos < r)
                    lowBound = mid + 1;
                else
                    highBound = mid - 1;
            }   
        }
    
        // We reach here when element is not
        // present in array
        if (bool) return lowBound;
        else return highBound;
    }

    update() {
        if (this.shape.position.xPos - this.shape.r <= 0 || this.shape.r + this.shape.position.xPos >= 500 || this.shape.position.yPos - this.shape.r <= 0 || this.shape.r + this.shape.position.yPos >= 500) { this.addScore(-5) }
        if (this.finished) { return }
        let xArr = this.binSearchForRange(this.shape.position.xPos-this.shape.r,this.shape.position.xPos+this.shape.r,this.board.shapes);
        if (xArr[0] != -1 && xArr[1] != -1) {
            for (let i = xArr[1]; i >= xArr[0]; i--) {
                this.board.shapes[i].checkCollision();
            }
        }
        this.move()
        this.shape.update()
    }

    draw() {
        this.shape.draw()
    }

    addScore(score) {
        if (this.finished) { return }
        this.score += score;
        this.scoreField.textContent = this.getScore();
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }

    endSimulation() {
        this.finished = true
        this.finishedField.textContent = this.finished;
    }
}