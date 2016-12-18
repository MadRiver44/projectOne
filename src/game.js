console.log("game.js is loaded!");
class Game {
  constructor(parentChildArray) {
    this .parentChildArray = parentChildArray;

  }// constructor
    // get innerHtml of children in order/ before shuffle, set that winningArrayPattern
    // same as familyGathering except kids aren't shuffled and no board append
  setWinArrPattern(parentKidArray) {
    const tempArr = [];
    const winningArrayPattern = [];
    parentKidArray.forEach(function parentkidarr(item, index) { // GAME
      if (item.children.length === 1) {
        winningArrayPattern.push(item.children[0].innerHTML);
      } else {
        winningArrayPattern[index] = null;
      }
    }); // forEach
    winningArrayPattern.sort(function winpattern(a, b) {
      return b < a;
    }); // sort, now remove null and add to end
    for (let i = 0; i < winningArrayPattern.length; i += 1) {
      if (winningArrayPattern[i] !== null) {
        tempArr.push(winningArrayPattern[i]);
        winningArrayPattern[i] = tempArr[i];
      }
    } // for, now add null
    if (tempArr.length < winningArrayPattern.length) {
      tempArr.push(null);
    } // NOW RESET WINNINGARRAYPATTERN
    for (let i = 0; i < tempArr.length; i += 1) {
      winningArrayPattern[i] = tempArr[i];
    }
    console.log(winningArrayPattern);
    return winningArrayPattern;
  } // function

  // display winning message
  createWinDiv() {
    const winDivMessage = document.createElement('div'); // GAME
    winDivMessage.setAttribute('id', 'win');
    winDivMessage.setAttribute('class', 'pulse');
    winDivMessage.textContent = 'You Won!';
    document.body.appendChild(winDivMessage);
  }

  // equals function to compare array possitions
  // http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
/*  equals(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    this.createWinDiv();
    return true;
  }*/

  checkWin(arr) {
    let winArr = arr;
    const currentArrayPattern = [];
    const idParents = document.querySelectorAll('.parent'); // NodeList
    idParents.forEach(function idparents(item, index) {
      if (item.children.length === 1) {
        currentArrayPattern[index] = item.children[0].innerHTML;
      } else {
        currentArrayPattern[index] = null;
      }
      return currentArrayPattern;
      console.log('THIS IS curr',currentArrayPattern, 'This is winArr',winArr);
    }); // forEach

      if (currentArrayPattern.length !== winArr.length) {
        return false;
      }
      for (let i = 0; i < winArr.length; i += 1) { // GAME
        if (currentArrayPattern[i] !== winArr[i]) {
          return false;
        }
      }
      this.createWinDiv();
      return true;
    //equals(currentArrayPattern, arr /*winningArrayPattern*/);
   }// function

} // class
