const svg = d3.select('svg')

const width = parseFloat(svg.attr('width'));
const height = +svg.attr('height');

const g = svg.append('g')
  .attr('transform', 'translate(500, 250)');

// the 'circle' creates a circle, its not just a name
const circle = g.append('circle')
  .attr('r', height/2)
  .attr('stroke', 'black')
  .attr('fill', 'yellow')

const eyeSpacing = 100;
const eyeYoffset = 70;
const eyeSize = 30;

const eyesG = g.append('g')
  .attr('transform', 'translate(0, -70)');
  
const eyeBrowWidth = 50;
const eyeBrowHeight = 15;
  
const leftEyebrow = eyesG.append('rect')
  .attr('x', -eyeSpacing - eyeBrowWidth/2)
  .attr('y', -50)
  .attr('width', eyeBrowWidth)
  .attr('height', eyeBrowHeight)

const rightEyebrow = eyesG.append('rect')
  .attr('x', eyeSpacing - eyeBrowWidth/2)
  .attr('y', -50)
  .attr('width', eyeBrowWidth)
  .attr('height', eyeBrowHeight)

const leftEye = eyesG.append('circle')
  .attr('r', eyeSize)
  .attr('cx', -eyeSpacing)

const rightEye = eyesG.append('circle')
  .attr('r', eyeSize)
  .attr('cx', eyeSpacing)

const mouth = g.append('path')
  .attr('d', d3.arc()({
    innerRadius: 160,
    outerRadius: 170,
    startAngle: Math.PI/2,
    endAngle: Math.PI*3/2
  }))

