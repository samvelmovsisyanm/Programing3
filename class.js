// class Grass {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.multiply = 0;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];

//     }

//     chooseCell(character) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));

//         if (this.multiply >= 4 && newCell) {
//             var newGrass = new Grass(newCell[0], newCell[1], this.index);
//             grassArr.push(newGrass);
//             matrix[newCell[1]][newCell[0]] = 1;
//             this.multiply = 0;
//         }
//     }


// }
// class Xotaker {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 8;
//         this.directions = [];
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     chooseCell(character) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {

//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             this.energy--;
//             var newx = newCell[0];
//             var newy = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newy][newx] = this.index;
//             this.x = newx;
//             this.y = newy;
//         }
//     }
//     eat() {
//         var grass = random(this.chooseCell(1))
//         if (grass) {
//             var newx = grass[0];
//             var newy = grass[1];
//             matrix[newy][newx] = this.index;
//             matrix[this.y][this.x] = 0;
//             for (var i in grassArr) {
//                 if (newx == grassArr[i].x && newy == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break
//                 }
//             }
//             this.x = newx;
//             this.y = newy;
//             this.energy += 2;




//         }

//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));
//         if (this.energy >= 10 && newCell) {
//             var newxotaker = new Xotaker(newCell[0], newCell[1], this.index);
//             xotakerArr.push(newxotaker);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.energy = 8;
//         }
//     }
//     die() {
//         if (this.energy <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in xotakerArr) {
//                 if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
//                     xotakerArr.splice(i, 1);

//                 }
//             }
//         }

//     }
// }
// class Gishatich {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.index = 3;
//         this.multiply = 8;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x + 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x + 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2]

//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {

//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             this.multiply--;
//             var newx = newCell[0];
//             var newy = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newy][newx] = 3;
//             this.x = newx;
//             this.y = newy;
//         }
//     }
//     eat() {
//         var gishat = random(this.chooseCell(2))
//         if (gishat) {
//             var newx = gishat[0];
//             var newy = gishat[1];
//             matrix[newy][newx] = 3;
//             matrix[this.y][this.x] = 0;
//             for (var i in xotakerArr) {
//                 if (newx == xotakerArr[i].x && newy == xotakerArr[i].y) {
//                     xotakerArr.splice(i, 1);
//                     break
//                 }
//             }
//             this.x = newx;
//             this.y = newy;
//             this.multiply += 2;
//         }
//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));
//         if (this.multiply >= 12 && newCell) {
//             var newgishatich = new Gishatich(newCell[0], newCell[1], this.index);
//             gishatichArr.push(newgishatich);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.multiply = 8;
//         }
//     }
//     die() {
//         if (this.multiply <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in gishatichArr) {
//                 if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);

//                 }
//             }
//         }

//     }

// }
// class Mard {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.index = 4;
//         this.sov = 3;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x - 2, this.y - 1],
//             [this.x + 2, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y + 1],
//             [this.x + 2, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x - 3, this.y - 3],
//             [this.x - 2, this.y - 3],
//             [this.x - 1, this.y - 3],
//             [this.x, this.y - 3],
//             [this.x + 1, this.y - 3],
//             [this.x + 2, this.y - 3],
//             [this.x + 3, this.y - 3],
//             [this.x - 3, this.y - 2],
//             [this.x + 3, this.y - 2],
//             [this.x - 3, this.y],
//             [this.x - 3, this.y - 1],
//             [this.x + 3, this.y - 1],
//             [this.x + 3, this.y],
//             [this.x - 3, this.y + 1],
//             [this.x + 3, this.y - 1],
//             [this.x - 3, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 3, this.y + 3],
//             [this.x - 2, this.y + 3],
//             [this.x - 1, this.y + 3],
//             [this.x, this.y + 3],
//             [this.x + 1, this.y + 3],
//             [this.x + 2, this.y + 3],
//             [this.x + 3, this.y + 3]



//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {

//         var newCell = random(this.chooseCell(1));
//         if (newCell) {
//             this.sov--;
//             var newx = newCell[0];
//             var newy = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newy][newx] = 4;
//             this.x = newx;
//             this.y = newy;
//         }
//     }
//     eat() {
//         var eatArr = [];
//         var newCell = random(this.chooseCell(2));
//         var newCell1 = random(this.chooseCell(3));
//         eatArr.push(newCell);
//         eatArr.push(newCell1);
//         var mard = random(eatArr);

//         if (mard) {
//             var newx = mard[0];
//             var newy = mard[1];
//             matrix[newy][newx] = 4;
//             matrix[this.y][this.x] = 0;
//             if (mard == 2) {
//                 for (var i in xotakerArr) {
//                     if (newx == xotakerArr[i].x && newy == xotakerArr[i].y) {
//                         xotakerArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }
//             else {
//                 for (var i in gishatichArr) {
//                     if (newx == gishatichArr[i].x && newy == gishatichArr[i].y) {
//                         gishatichArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }

//             this.x = newx;
//             this.y = newy;
//             this.sov += 2;
//         }
//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));

//         if (this.sov >= 7 && newCell) {
//             var newmard = new Mard(newCell[0], newCell[1], this.index);
//             mardArr.push(newmard);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.sov = 3;
//         }
//     }
//     die() {
//         if (this.sov <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in mardArr) {
//                 if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
//                     mardArr.splice(i, 1);

//                 }
//             }
//         }

//     }
// }
// class Mutant {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.index = 5;
//         this.sov = 8;
//         this.directions = [];
//     }
//     getNewCoordinates() {
//         this.directions = [];
//         var b = 1;
//         for (var i = this.y; i > 0; i--) {
//             var t = [this.x, this.y - b];
//             this.directions.push(t);
//             b++;
//         }
//         var g = 1;
//         for (var i = this.y; i < matrix.length; i++) {
//             var c = [this.x, this.y + g];
//             this.directions.push(c);
//             g++;
//         }
//         var d = 1;
//         for (var i = this.x; i > 0; i--) {
//             var q = [this.x - d, this.y];
//             this.directions.push(q);
//             d++;
//         }
//         var n = 1;
//         for (var i = this.x; i < matrix.length; i++) {
//             var p = [this.x + n, this.y];
//             this.directions.push(p);
//             n++;
//         }
//     }

//     chooseCell(character) {
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {

//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             this.sov--;
//             var newx = newCell[0];
//             var newy = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newy][newx] = this.index;
//             this.x = newx;
//             this.y = newy;
//         }
//     }
//     eat() {
//         var eatArr = [];
//         var newCell = random(this.chooseCell(1));
//         var newCell1 = random(this.chooseCell(2));
//         var newCell2 = random(this.chooseCell(3));
//         var newCell3 = random(this.chooseCell(4));
//         eatArr.push(newCell);
//         eatArr.push(newCell1);
//         eatArr.push(newCell2);
//         eatArr.push(newCell3);
//         var mard = random(eatArr);

//         if (mard) {
//             var newx = mard[0];
//             var newy = mard[1];
//             matrix[newy][newx] = 4;
//             matrix[this.y][this.x] = 0;
//             if (mard == 2) {
//                 for (var i in xotakerArr) {
//                     if (newx == xotakerArr[i].x && newy == xotakerArr[i].y) {
//                         xotakerArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }
//             else if (mard == 3) {
//                 for (var i in gishatichArr) {
//                     if (newx == gishatichArr[i].x && newy == gishatichArr[i].y) {
//                         gishatichArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }
//             else if (mard == 1) {
//                 for (var i in grassArr) {
//                     if (newx == grassArr[i].x && newy == grassArr[i].y) {
//                         grassArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }
//             else if (mard == 4) {
//                 for (var i in mardArr) {
//                     if (newx == mardArr[i].x && newy == mardArr[i].y) {
//                         mardArr.splice(i, 1);
//                         break
//                     }
//                 }
//             }
//             this.x = newx;
//             this.y = newy;
//             this.sov += 2;
//         }
//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));

//         if (this.sov >= 12 && newCell) {
//             var newmutant = new Mutant(newCell[0], newCell[1], this.index);
//             mutantArr.push(newmutant);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.sov = 8;
//         }
//     }
//     die() {
//         if (this.sov <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in mutantArr) {
//                 if (this.x == mutantArr[i].x && this.y == mutantArr[i].y) {
//                     mutantArr.splice(i, 1);

//                 }
//             }
//         }

//     }
// }