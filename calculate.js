const numberOfTrainings = 10000;
const learningRate = 0.000001;
const delay = 5;


let weights = {
  x: Math.random() * 2 -1,
  y: Math.random() * 2 -1,
}


const train = (weights, point) => {
  const guessResult = guessTeam(weights, point);
  const error = point.teamActual - guessResult;
  weights = {
    x: weights.x + (point.x * error * learningRate),
    y: weights.y + (point.y * error * learningRate),
  };

  return weights;
}


const guessTeam = (weights, point) => {
  const sum = point.x * weights.x + point.y * weights.y;
  const team = (sum > 0) ? 1 : -1;

  return team;
}


for (var x = 0; x < numberOfTrainings; x += 1) {
  setTimeout(() => {
    const randomPoint = points[Math.floor(Math.random()*points.length)];
    weights = train(weights, randomPoint);
    for (var x = 0; x < points.length; x += 1) {
      points[x].teamPredicted = guessTeam(weights, points[x]);
    }

    console.log(new Date().getTime());
    console.log(weights);
    draw();
  }, x * delay);
}
