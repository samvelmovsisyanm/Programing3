var xSide = 30;
var ySide = 30;
var side = 30;
var matrix = [];
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mutantArr = [];
function setup() {
    frameRate(5);
    createCanvas(xSide * side, ySide * side);
    background('#acacac');
    for (var y = 0; y < ySide; y++) {
        matrix[y] = [];
        for (var x = 0; x < xSide; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5]);
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xotk = new Xotaker(x, y, 2)
                xotakerArr.push(xotk);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y)
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y)
                mardArr.push(mard);
            }
            else if (matrix[y][x] == 5) {
                var mut = new Mutant(x, y)
                mutantArr.push(mut);
            }
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].move();
        xotakerArr[i].eat();
        xotakerArr[i].mul();
        xotakerArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in mardArr) {
        mardArr[i].move();
        mardArr[i].eat();
        mardArr[i].mul();
        mardArr[i].die();
    }
    for (var i in mutantArr) {
        mutantArr[i].move();
        mutantArr[i].eat();
        mutantArr[i].mul();
        mutantArr[i].die();
    }
}
