'use strict';
function scaleBalance(strArr) {
  let scaleNumbers = strArr[0];
  let weightNumbers = strArr[1];
  let weightOne;
  let weightTwo;
  // test for one weight on each side
  // test left side start first
  for (let i = 0; i < weightNumbers.length; i++) {
    let pairOne = scaleNumbers[0] + weightNumbers[i];
    for (let y = i + 1; y < weightNumbers.length; y++) {
      let pairTwo = scaleNumbers[1] + weightNumbers[y];
      if (pairOne === pairTwo) {
        weightOne = weightNumbers[i];
        weightTwo = weightNumbers[y];
        let outputArray = [weightOne, weightTwo].sort();
        let outputString = outputArray.toString();
        return outputString;
      }
    }
  }
  // test right side start second
  for (let i = 0; i < weightNumbers.length; i++) {
    let pairOne = scaleNumbers[1] + weightNumbers[i];
    for (let y = i + 1; y < weightNumbers.length; y++) {
      let pairTwo = scaleNumbers[0] + weightNumbers[y];
      if (pairOne === pairTwo) {
        weightOne = weightNumbers[i];
        weightTwo = weightNumbers[y];
        let outputArray = [weightOne, weightTwo].sort();
        let outputString = outputArray.toString();
        return outputString;
      }
    }
  }

  // test for two weights on one side
  let smaller;
  let bigger;
  if (scaleNumbers[0] > scaleNumbers[1]) {
    smaller = scaleNumbers[1];
    bigger = scaleNumbers[0];
  } else {
    smaller = scaleNumbers[0];
    bigger = scaleNumbers[1];
  }
  for (let i = 0; i < weightNumbers.length; i++) {
    let smallerOneWeight = smaller + weightNumbers[i];
    for (let y = i + 1; y < weightNumbers.length; y++) {
      let smallerTwoWeight = smallerOneWeight + weightNumbers[y];
      if (smallerTwoWeight === bigger) {
        weightOne = weightNumbers[i];
        weightTwo = weightNumbers[y];
        let outputArray = [weightOne, weightTwo].sort();
        let outputString = outputArray.toString();
        return outputString;
      }
    }
  }

  // test for one weight on one side
  for (let i = 0; i < weightNumbers.length; i++) {
    let smallerOneWeightTest = smaller + weightNumbers[i];
    if (smallerOneWeightTest === bigger) {
      let weightOne = weightNumbers[i];
      return weightOne.toString();
    }
  }
  return 'not possible';
}

module.exports = scaleBalance;
