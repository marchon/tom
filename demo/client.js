'use strict';

var React = require('react');
var router = require('./router.jsx');
var HistoryLocation = require('../lib/HistoryLocation');

// outputs debug messages to console
require('debug').enable('*');

// configure state
router.state = window.state;

// configure rendering
router.render = function (renderable) {
  React.render(renderable, document.getElementById('app'));
};

//
// start client
//
new HistoryLocation(router).start();
