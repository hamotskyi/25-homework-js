function toCreateFigures() {
    let bg = document.getElementById('bg');
    let circleLength = Number(document.getElementById('circleLength').value).toFixed(2);
    let circleRadius = (Number(circleLength / (2 * Math.PI))).toFixed(2);
    let circleD = circleRadius * 2;
    let cXcY = Number(circleRadius +++ 5);
    let circleWH = circleD +++ 10;
    let squarePerimeter = Number(document.getElementById('squarePerimeter').value).toFixed(2);
    let squareSide = squarePerimeter / 4;
    let squareWH = squareSide + 10;

    bg.insertAdjacentHTML("beforeEnd", `<svg height="${circleWH}px" width="${circleWH}px" id="circle"><circle cx="${cXcY}px" cy="${cXcY}px" r="${circleRadius}px" stroke="#9cdcfe" stroke-width="3" fill="transparent"/></svg>   <svg width="${squareWH}px" height="${squareWH}px" id="square"><rect x="5px" y="5px" width="${squareSide}px" height="${squareSide}px" fill="transparent" stroke="#cd9077" stroke-width="3"/></svg>`);

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
//создати дів. в ньому два діва. кожному айді дати і вставляти фігури в них
