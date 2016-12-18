console.log("game.js is loaded!");
class Game {
  constructor() {
    this.winningArrayPattern = [];
    this.currentArrayPattern = [];
  }// constructor

    // get innerHtml of children in order/ before shuffle, set that winningArrayPattern
    // same as familyGathering except kids aren't shuffled and no board append
  static setWinArrPattern(parentKidArray) {
    const tempArr = [];
    parentKidArray.forEach(function parentkidarr(item, index) { // GAME
      if (item.children.length === 1) {
        this.winningArrayPattern.push(item.children[0].innerHTML);
      } else {
        this.winningArrayPattern[index] = null;
      }
    }); // forEach
    this.winningArrayPattern.sort(function winpattern(a, b) {
      return b < a;
    }); // sort, now remove null and add to end
    for (let i = 0; i < this.winningArrayPattern.length; i += 1) {
      if (this.winningArrayPattern[i] !== null) {
        tempArr.push(this.winningArrayPattern[i]);
        this.winningArrayPattern[i] = tempArr[i];
      }
    } // for, now add null
    if (tempArr.length < this.winningArrayPattern.length) {
      tempArr.push(null);
    } // NOW RESET WINNINGARRAYPATTERN
    for (let i = 0; i < tempArr.length; i += 1) {
      this.winningArrayPattern[i] = tempArr[i];
    }
    return this.winningArrayPattern;
} // function

  // display winning message
  static createWinDiv() {
    const winDivMessage = document.createElement('div'); // GAME
    winDivMessage.setAttribute('id', 'win');
    winDivMessage.setAttribute('class', 'pulse');
    winDivMessage.textContent = 'You Won!';
    document.body.appendChild(winDivMessage);
  }

  // equals function to compare array possitions
  // http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
  static equals(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i += 1) { // GAME
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    this.createWinDiv();
    return true;
  }

  static checkWin() {
    const idParents = document.querySelectorAll('.parent'); // NodeList
    idParents.forEach(function idparents(item, index) {
      if (item.children.length === 1) {
        this.currentArrayPattern[index] = item.children[0].innerHTML; // GAME
      } else {
        this.currentArrayPattern[index] = null;
      }
    }); // forEach
    this.equals(this.currentArrayPattern, this.winningArrayPattern);
  } // function
} // class


/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {
    const parent = $(this).parent('div');
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    this.checkWin();
  });
});
