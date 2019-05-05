class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.index = 3;
        this.multiply = 8;
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
            [this.x + 2, this.y + 2]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }
    move() {

        var newCell = random(this.chooseCell(0));
        if (newCell) {
            this.multiply--;
            var newx = newCell[0];
            var newy = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = 3;
            this.x = newx;
            this.y = newy;
        }
    }
    eat() {
        var gishat = random(this.chooseCell(2))
        if (gishat) {
            var newx = gishat[0];
            var newy = gishat[1];
            matrix[newy][newx] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (newx == xotakerArr[i].x && newy == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break
                }
            }
            this.x = newx;
            this.y = newy;
            this.multiply += 2;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 12 && newCell) {
            var newgishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newgishatich);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 8;
        }
    }
    die() {
        if (this.multiply <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);

                }
            }
        }

    }

}