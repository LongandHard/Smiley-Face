const svg = d3.select('svg')

const width = parseFloat(svg.attr('width'));
const height = +svg.attr('height');

const g = svg.append('g')
  .attr('transform', 'translate(500, 250)');


const circle = g.append('circle')
  .attr('r', height/2)
  .attr('stroke', 'black')
  .attr('fill', 'yellow')

const eyeSpacing = 100;
const eyeYoffset = 70;
const eyeSize = 30;

const leftEye = g.append('circle')
  .attr('r', eyeSize)
  .attr('cx', -eyeSpacing)
  .attr('cy',  -eyeYoffset)
  .attr('fill', 'black')

const rightEye = g.append('circle')
  .attr('r', eyeSize)
  .attr('cx', eyeSpacing)
  .attr('cy',  -eyeYoffset)
  .attr('fill', 'black')

console.log(g)

const mouth = g.append('path')
  .attr('d', d3.arc()({
    innerRadius: 160,
    outerRadius: 170,
    startAngle: Math.PI/2,
    endAngle: Math.PI*3/2
  }))