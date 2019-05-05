class Mard extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.index = 4;
        this.sov = 3;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y],
            [this.x - 3, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]



        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }
    move() {

        var newCell = random(this.chooseCell(1));
        if (newCell) {
            this.sov--;
            var newx = newCell[0];
            var newy = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = 4;
            this.x = newx;
            this.y = newy;
        }
    }
    eat() {
        var eatArr = [];
        var newCell = random(this.chooseCell(2));
        var newCell1 = random(this.chooseCell(3));
        eatArr.push(newCell);
        eatArr.push(newCell1);
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
            else {
                for (var i in gishatichArr) {
                    if (newx == gishatichArr[i].x && newy == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
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

        if (this.sov >= 7 && newCell) {
            var newmard = new Mard(newCell[0], newCell[1], this.index);
            mardArr.push(newmard);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.sov = 3;
        }
    }
    die() {
        if (this.sov <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    mardArr.splice(i, 1);

                }
            }
        }

    }
}