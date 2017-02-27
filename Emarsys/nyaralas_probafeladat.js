'use strict';

var targets = [['u', 0], ['v', 0], ['w', 0], ['x', 0], ['y', 0], ['z', 0]];
var targets2 = [['u', 0], ['v', 'w'], ['w', 'z'], ['x', 'u'], ['y', 'v'], ['z', 0]];

function routeOptimum(inputTargets) {

  var result = [];
  var dependencies = [];
  var inputLength = inputTargets.length;

  for (let i = 0; i < inputLength; i++) {

    if (result.indexOf(inputTargets[i][0]) === -1) {
      result.push(inputTargets[i][0]);
    } else {
      return 'input error: repeated target'
    }

    if (dependencies.indexOf(inputTargets[i][1]) != -1) {
      return 'input error: repeated dependency'
    } else if (inputTargets[i][1]) {
      dependencies.push(inputTargets[i][1]);
    }
  }

  for (let i = 0; i < inputLength; i++) {

    if (inputTargets[i][1] != false) {
      let targetPos = result.indexOf(inputTargets[i][0]);
      let dependencyPos = result.indexOf(inputTargets[i][1]);
      if (targetPos < dependencyPos) {
        result.splice(targetPos, 0, inputTargets[i][1]);
        result.splice(dependencyPos + 1, 1);
      }
    }
  }

  return result
}

console.log(routeOptimum(targets));
console.log(routeOptimum(targets2));

module.exports = routeOptimum;
