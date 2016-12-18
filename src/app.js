/* eslint-env jquery */

/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {

    const parent = $(this).parent('div');
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    checkWin();
  });
});

/* win state - loop over array of ids and if they are mapped
in a particular order, console.log('WIN'); */

const winningArrayPattern = [];
const currentArrayPattern = [];

// creates X number of parents and adds id's and classes and special class empty
const createAmtOfParents = function parentcreation(num) {
  const arrayOfParentsNoKids = [];
  for (let i = 0; i < num; i += 1) {
    const parent = document.createElement('div'); // TILE
    parent.setAttribute('class', 'parent');
    parent.setAttribute('id', i);
    arrayOfParentsNoKids.push(parent);
    if (i === num - 1) {
      parent.classList.add('class', 'empty');
    }
  }
  return arrayOfParentsNoKids;
};
const parents = createAmtOfParents;
const parentsArr = parents(4);

// create children, 1 less than number of parents
const createAmtOfChildren = function kidcreation(num) {
  const childrenArray = [];
  for (let i = 0; i < num - 1; i += 1) {
    const child = document.createElement('div'); //TILE
    child.setAttribute('class', 'square');
    child.innerHTML = i.toString();
    childrenArray.push(child);
  }
  return childrenArray;
};
const kids = createAmtOfChildren;
const kidsArray = kids(4);

// shuffle chidren to render upon start
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = function mix(array) {
  const arr1 = array;
  let currentIndex = arr1.length;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);  // TILE
    currentIndex -= 1;
    temporaryValue = arr1[currentIndex];
    arr1[currentIndex] = arr1[randomIndex];
    arr1[randomIndex] = temporaryValue;
  }
  return array;
};

/* append children to Parents
if they get a child they also get the class full else empty
move shuffle above */
// after
const familyGathering = function appendkidtoparent(kidsGroup, parentsGroup) {
  shuffle(kidsGroup); // shuffled child Array to append to parents
  const board = document.getElementById('board');
  for (let i = 0; i < parentsGroup.length; i += 1) {   // TILE
    if (i !== 3) {
      parentsGroup[i].append(kidsGroup[i]);
      parentsGroup[i].classList.add('class', 'full');
      board.append(parentsGroup[i]);
    } else {
      board.append(parentsGroup[i]);
    }
  }
  return parentsGroup;
};
familyGathering(kidsArray, parentsArr);

// get innerHtml of children in order/ befor shuffle, set that winningArrayPattern
// same as familyGathering except kids aren't shuffled and no board append
const setWinArrPattern = function winarrpattern(parentKidArray) {
  const tempArr = [];
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
  return winningArrayPattern;
}; // function

setWinArrPattern(parentsArr);

// display winning message
const createWinDiv = function winmessage() {
  const winDivMessage = document.createElement('div'); // GAME
  winDivMessage.setAttribute('id', 'win');
  winDivMessage.setAttribute('class', 'pulse');
  winDivMessage.textContent = 'You Won!';
  document.body.appendChild(winDivMessage);
};

// equals function to compare array possitions
// http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
const equals = function equal(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) { // GAME
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  createWinDiv();
  return true;
};

const checkWin = function check() {
  const idParents = document.querySelectorAll('.parent'); //NodeList
  idParents.forEach(function(item, index) {
    if (item.children.length === 1) {
      currentArrayPattern[index] = item.children[0].innerHTML; // GAME
    } else {
      currentArrayPattern[index] = null;
    }
  }); // forEach
  equals(currentArrayPattern, winningArrayPattern);
}; // function
