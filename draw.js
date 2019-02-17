const draw = () => {
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }

  drawIndicatorLine();
  drawLearningLine();

  for (var x = 0; x < points.length; x += 1) {
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', points[x].x);
    circle.setAttributeNS(null, 'cy', points[x].y);
    circle.setAttributeNS(null, 'r', 2);
    let color;
    if (points[x].teamPredicted === 1 ) {
      color = 'red';
    } else if (points[x].teamPredicted === -1) {
      color = 'blue';
    }
    circle.setAttributeNS(null, 'style', 'fill: ' + color + '; stroke-width: 0;');
    container.appendChild(circle);
  }
}


const drawIndicatorLine = () => {
  const indicationLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  indicationLine.setAttribute('id','indicatorLine');
  indicationLine.setAttribute('x1','0');
  indicationLine.setAttribute('y1','0');
  indicationLine.setAttribute('x2','600');
  indicationLine.setAttribute('y2','600');
  indicationLine.setAttribute("stroke", "black");
  indicationLine.setAttribute("stroke-width", "2");
  container.appendChild(indicationLine);
}


const drawLearningLine = () => {
  const learningLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  learningLine.setAttribute('id','learningLine');
  learningLine.setAttribute('x1','0');
  learningLine.setAttribute('y1','0');
  learningLine.setAttribute('x2',(weights.x*1000000).toString());
  learningLine.setAttribute('y2',(weights.y*1000000).toString());
  learningLine.setAttribute("stroke", "red");
  learningLine.setAttribute("stroke-width", "2");
  learningLine.setAttribute("transform", "rotate(270, 0, 0)");
  container.appendChild(learningLine);

  const learningLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
  learningLine2.setAttribute('id','learningLine2');
  learningLine2.setAttribute('x1','0');
  learningLine2.setAttribute('y1','0');
  learningLine2.setAttribute('x2',(weights.x*1000000).toString());
  learningLine2.setAttribute('y2',(weights.y*1000000).toString());
  learningLine2.setAttribute("stroke", "red");
  learningLine2.setAttribute("stroke-width", "2");
  learningLine2.setAttribute("transform", "rotate(90, 0, 0)");
  container.appendChild(learningLine2);
}
