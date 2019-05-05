class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 8;
        this.directions = [];
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
        
    }
    move() {

        var newCell = random(this.chooseCell(0));
        if (newCell) {
            this.energy--;
            var newx = newCell[0];
            var newy = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newy][newx] = this.index;
            this.x = newx;
            this.y = newy;
        }
    }
    eat() {
        var grass = random(this.chooseCell(1))
        if (grass) {
            var newx = grass[0];
            var newy = grass[1];
            matrix[newy][newx] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (newx == grassArr[i].x && newy == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break
                }
            }
            this.x = newx;
            this.y = newy;
            this.energy += 2;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (this.energy >= 10 && newCell) {
            var newxotaker = new Xotaker(newCell[0], newCell[1], this.index);
            xotakerArr.push(newxotaker);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 8;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}