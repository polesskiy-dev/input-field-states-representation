const fs = require('fs');
const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render');

const RESULT_FILENAME = '/states-graph.svg';

const graphDescription = fs.readFileSync(__dirname + '/states-graph.dot', 'utf8');
new Viz({ Module, render }).renderString(graphDescription, { format: 'svg' })
    .then(svg => fs.writeFileSync(__dirname + RESULT_FILENAME, svg));

