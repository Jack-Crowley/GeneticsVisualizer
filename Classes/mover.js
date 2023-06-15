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
        let min = this.binSearchSide(minX,maxX,arr,Math.floor((maxX+minX)/2),false);
        console.log(min)
        let max = this.binSearchSide(minX,maxX,arr,Math.floor((maxX+minX)/2),true);
        console.log(max)
        return [min,max];
    }

    binSearchSide(minX, maxX, arr, mid, bool) {
        if (maxX < minX || mid >= arr.length || mid < 0) return -1;
        if (bool) {
            if (arr[mid].position.xPos > maxX) {
                return this.binSearchSide(minX,maxX,arr,mid-1,bool)
            }
            else if (mid < arr.length) {
                if (arr[mid+1].position.xPos < maxX) {
                    return this.binSearchSide(minX,maxX,arr,mid+1,bool);
                }
                else {
                    console.log(mid);
                    return mid;
                }
            }
            else {
                console.log(mid);
                return mid;
            }
        }
        else {
            if (arr[mid].position.xPos < minX) {
                return this.binSearchSide(minX,maxX,arr,mid+1,bool)
            }
            else if (mid > 0) {
                if (arr[mid-1].position.xPos > minX) {
                    return this.binSearchSide(minX,maxX,arr,mid-1,bool);
                }
                else {
                    console.log(mid);
                    return mid;
                }
            }
            else {
                console.log(mid);
                return mid;
            }
        }
    }

    update() {
        if (this.shape.position.xPos - this.shape.r <= 0 || this.shape.r + this.shape.position.xPos >= 500 || this.shape.position.yPos - this.shape.r <= 0 || this.shape.r + this.shape.position.yPos >= 500) { this.addScore(-5) }
        if (this.finished) { return }
        console.log(this.binSearchForRange(this.shape.position.xPos-this.shape.r,this.shape.position.xPos+this.shape.r,this.board.shapes));
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