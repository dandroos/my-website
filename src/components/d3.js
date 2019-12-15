import * as d3 from 'd3';

var data = [100, 95, 85, 50, 35, 40]

const node = document.createElement('div')

const width = 960
const height = 500

var svg = d3.select(node).selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .style('width', (d)=>{ return d + "px"})



module.exports = node;