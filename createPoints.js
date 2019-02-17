const pointsAmount = 300;
const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById('frame');
const points = [];


const getActualTeam = (point) => {
  if (point.x < point.y) {
    return 1;
  } else {
    return -1;
  }
}


for (var x = 0; x < pointsAmount; x += 1) {
  const point = {
    x: Math.floor(Math.random() * (600 + 1)),
    y: Math.floor(Math.random() * (600 + 1)),
  }
  point.teamActual = getActualTeam(point);
  points.push(point);
}
