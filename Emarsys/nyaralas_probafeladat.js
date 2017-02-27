'use strict';

var targetsAndDependencies = [['u', 0], ['v', 0], ['w', 0], ['x', 0], ['y', 0], ['z', 0]];

function routeOptimum(inputTargets) {

  var result = [];
  var targets = [];
  var targetsWithDependencies = [];
  var inputLength = inputTargets.length;

  // Error handling - duplicated target
  for (let i = 0; i < inputLength; i++) {
    if (targets.indexOf(inputTargets[i][0]) === -1) {
      targets.push(inputTargets[i][0]);
    } else {
      return 'input error: duplicated target';
    }
  }

  // separating targets with and without dependencies
  for (let i = 0; i < inputLength; i++) {
    if (inputTargets[i][1] == false) {
      result.push(inputTargets[i][0]);
    } else {
      targetsWithDependencies.push(inputTargets[i]);
    }
  }

  // Error handling - we need at lest one target without dependency
  if (result.length == 0) {
    return 'input error: missing entry point';
  }

  // filling up result variable with the rest of the targets
  while (targetsWithDependencies.length > 0) {

    let lastRound = true;

    for (let i = 0; i < targetsWithDependencies.length; i++) {
      if (result.includes(targetsWithDependencies[i][1])) {
        result.push(targetsWithDependencies[i][0]);
        targetsWithDependencies[i][1] = 0;
        lastRound = false;
      }
    }

    if (lastRound) {
      return 'input error: circular dependencies';
    }

    targetsWithDependencies = targetsWithDependencies.filter(function(e){
      return e[1];
    });
  }
  return result;
}

console.log(routeOptimum(targetsAndDependencies));

module.exports = routeOptimum;
