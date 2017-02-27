'use strict';

var test = require('tape');
var routeOptimum = require('./nyaralas_probafeladat.js');

test('testing test', function (t) {
  t.equal(2 + 2, 4);
  t.end();
});

test('routeOptimum basic test of basic function', function (t) {
  t.deepEqual(routeOptimum([['u', 0], ['v', 0], ['w', 0], ['x', 0], ['y', 0], ['z', 0]]), [ 'u', 'v', 'w', 'x', 'y', 'z' ]);
  t.end();
});
