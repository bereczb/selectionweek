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

test('duplicated target test', function (t) {
  t.deepEqual(routeOptimum([['u', 0], ['z', 'u'], ['u', 's'], ['s', 0]]), 'input error: duplicated target');
  t.end();
});

test('missing entry point test', function (t) {
  t.deepEqual(routeOptimum([['u', 'z'], ['x', 'u']]), 'input error: missing entry point');
  t.end();
});

test('circular dependencies test', function (t) {
  t.deepEqual(routeOptimum([['u', 'z'], ['x', 'u'], ['z', 'x'], ['w', 0]]), 'input error: circular dependencies');
  t.end();
});

test('empty string for no dependency', function (t) {
  t.deepEqual(routeOptimum([['u', ''], ['v', ''], ['w', ''], ['x', ''], ['y', ''], ['z', '']]), [ 'u', 'v', 'w', 'x', 'y', 'z' ]);
  t.end();
});

test('empty string for no dependency', function (t) {
  t.deepEqual(routeOptimum([['u', 0], ['v', 'w'], ['w', 'z'], ['x', 'u'], ['y', 'v'], ['z', 0]]), [ 'u', 'z', 'w', 'x', 'v', 'y' ]);
  t.end();
});

test('empty string for no dependency', function (t) {
  t.deepEqual(routeOptimum([['u', 0], ['v', 'w'], ['w', 'z'], ['x', 'u'], ['y', 'v'], ['z', 'u']]), [ 'u', 'x', 'z', 'w', 'v', 'y' ]);
  t.end();
});
