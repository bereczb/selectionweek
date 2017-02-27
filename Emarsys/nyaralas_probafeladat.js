'use strict';

var inputTargets = [['x', 0], ['y', 0], ['z', 0], ['u', 0], ['v', 0], ['w', 0]];

function routeOptimum(inputTargets) {
  var result = [];
  for (let i = 0; i < inputTargets.length; i++) {
    result.push(inputTargets[i][0]);
  }
  return result
}

console.log(routeOptimum(inputTargets));
