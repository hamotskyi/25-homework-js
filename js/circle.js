function toCreateFigures() {
    let circleWrapper = document.getElementById('circleWrapper');
    let squareWrapper = document.getElementById('squareWrapper');
    let ol = document.getElementById('ol');
    let circleLength = Number(document.getElementById('circleLength').value).toFixed(2);
    let circleRadius = (Number(circleLength / (2 * Math.PI))).toFixed(2);
    let circleD = circleRadius * 2;
    let cXcY = Number(circleRadius +++ 5);
    let circleWH = circleD +++ 10;
    let squarePerimeter = Number(document.getElementById('squarePerimeter').value).toFixed(2);
    let squareSide = squarePerimeter / 4;
    let squareWH = squareSide + 10;

    circleWrapper.insertAdjacentHTML("afterBegin", `<svg height="${circleWH}px" width="${circleWH}px" id="circle"><circle cx="${cXcY}px" cy="${cXcY}px" r="${circleRadius}px" stroke="#9cdcfe" stroke-width="3" fill="transparent"/></svg>`)
    squareWrapper.insertAdjacentHTML("afterBegin", `<svg width="${squareWH}px" height="${squareWH}px" id="square"><rect x="5px" y="5px" width="${squareSide}px" height="${squareSide}px" fill="transparent" stroke="#cd9077" stroke-width="3"/></svg>`)
    
    if (circleD <= squareSide) {
        ol.insertAdjacentHTML("beforeEnd", `<li><p id="answer">Дане коло можна вписати в цей квадрат</p></li>`)
    } else {
        ol.insertAdjacentHTML("beforeEnd", `<li><p id="answer">Дане коло не можна вписати в цей квадрат</p></li>`)
    }

    newFunction(cXcY, circleWH, circleD, circleRadius);

}

function newFunction(a, b, c, d) {
    console.log(`cXcY = ${a}`);
    console.log(`circleWH = ${b}`);
    console.log(`D = ${c}`);
    console.log(`R = ${d}`);
    console.log(`тип радіус = ${typeof (d)}`);
    console.log(`тип cXcY = ${typeof (a)}`);
}
