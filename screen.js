let height = window.innerHeight;
let width = window.innerWidth;
const circles = document.body.querySelectorAll(`.tree-container > circle`);
const rectangle = document.body.querySelectorAll(`.tree-container > rect`);
const polygon = document.body.querySelectorAll(`.tree-container > polygon`);

function adjustViewbox() {
    const screen = document.body.querySelector(`.tree-container`);
    screen.style.height = `${height * .8}px`;
    screen.style.width = `${width * .8}px`;
};

function adjustAtr(nodeList, atr, mod = 0) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].setAttribute(`${atr}`, Number(nodeList[i].getAttribute(`${atr}`)) + mod);
    }
}

function transposePolygon(nodeList, x = 0, y = 0) {
    for (let i = 0; i < nodeList.length; i++) {
        const points = nodeList[i].getAttribute("points");
        let newVal = "";
        let arrx = [];
        let arry = [];
        let concStr = "";
        for (let j = 0; j <= points.length; j++) {
            const str = points.substring(j, j + 1);
            if (str === ",") {
                arrx.push(concStr);
                concStr = "";
            } else if (str === " ") {
                arry.push(concStr);
                concStr = "";
            } else if (j === points.length) {
                arry.push(concStr);
            } else {
                concStr = concStr + str;
            }
        }
        for (let l = 0; l < arrx.length; l++) {
            newVal = `${newVal}${Number(arrx[l]) + x},`;
            newVal = `${newVal}${Number(arry[l]) + y} `;
        }
        nodeList[i].setAttribute("points", newVal);
    }
}


// adjustAtr(circles, "r", .5);
// adjustAtr(rectangle, "x", 1);
// transposePolygon(polygon, 10, 5);

function run() {
    adjustViewbox();
}
run();

screen.addEventListener("resize", run);