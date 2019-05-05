class Mutant extends LivingCreature  {
    constructor(x, y) {
        super(x,y);
        this.index = 5;
        this.sov = 8;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [];
        var b = 1;
        for (var i = this.y; i > 0; i--) {
            var t = [this.x, this.y - b];
            this.directions.push(t);
            b++;
        }
        var g = 1;
        for (var i = this.y; i < matrix.length; i++) {
            var c = [this.x, this.y + g];
            this.directions.push(c);
            g++;
        }
        var d = 1;
        for (var i = this.x; i > 0; i--) {
            var q = [this.x - d, this.y];
            this.directions.push(q);
            d++;
        }
        var n = 1;
        for (var i = this.x; i < matrix.length; i++) {
            var p = [this.x + n, this.y];
            this.directions.push(p);
            n++;
        }
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }
    move() {

        var newCell = random(this.chooseCell(0));
        if (newCell) {
            this.sov--;
            var newx = newCell[0];
            var newy = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;
            this.x = newx;
            this.y = newy;
        }
    }
    eat() {
        var eatArr = [];
        var newCell = random(this.chooseCell(1));
        var newCell1 = random(this.chooseCell(2));
        var newCell2 = random(this.chooseCell(3));
        var newCell3 = random(this.chooseCell(4));
        eatArr.push(newCell);
        eatArr.push(newCell1);
        eatArr.push(newCell2);
        eatArr.push(newCell3);
        var mard = random(eatArr);

        if (mard) {
            var newx = mard[0];
            var newy = mard[1];
            matrix[newy][newx] = 4;
            matrix[this.y][this.x] = 0;
            if (mard == 2) {
                for (var i in xotakerArr) {
                    if (newx == xotakerArr[i].x && newy == xotakerArr[i].y) {
                        xotakerArr.splice(i, 1);
                        break
                    }
                }
            }
            else if (mard == 3) {
                for (var i in gishatichArr) {
                    if (newx == gishatichArr[i].x && newy == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                        break
                    }
                }
            }
            else if (mard == 1) {
                for (var i in grassArr) {
                    if (newx == grassArr[i].x && newy == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break
                    }
                }
            }
            else if (mard == 4) {
                for (var i in mardArr) {
                    if (newx == mardArr[i].x && newy == mardArr[i].y) {
                        mardArr.splice(i, 1);
                        break
                    }
                }
            }
            this.x = newx;
            this.y = newy;
            this.sov += 2;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));

        if (this.sov >= 12 && newCell) {
            var newmutant = new Mutant(newCell[0], newCell[1], this.index);
            mutantArr.push(newmutant);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.sov = 8;
        }
    }
    die() {
        if (this.sov <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mutantArr) {
                if (this.x == mutantArr[i].x && this.y == mutantArr[i].y) {
                    mutantArr.splice(i, 1);

                }
            }
        }

    }
}