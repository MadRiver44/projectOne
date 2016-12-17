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

let winningArrayPattern = [];//['0', '1', '2', null]; //parent id's in order, immutable
let currentArrayPattern = [];
const classSquares = document.querySelectorAll('.square'); // children in a NodeList
const idParents = document.querySelectorAll('.parent'); //NodeList
let childrenArray = [];
let mixedArray = []

// creates X number of parents and adds id's and classes and special class empty
function createAmtOfParents(num) {
    for(let i = 0; i < num; i += 1) {
      let parent = document.createElement('div');
      parent.setAttribute('class', 'parent');
      parent.setAttribute('id', i);
      console.log(parent);
      winningArrayPattern[i] = parent;
      if(i === num-1){
        parent.classList.add('class', 'empty');

      }
    }
    //console.log(winningArrayPattern);
    return winningArrayPattern;
}
createAmtOfParents(4);


// create children, 1 less than number of parents
function createAmtOfChildren(num) {
  for(let i = 0; i < num-1; i += 1) {
    let child = document.createElement('div');
    child.setAttribute('class', 'square');
    child.innerHTML = i;
    childrenArray.push(child);
    //console.log(child);
  }
  return childrenArray;
}
createAmtOfChildren(4);


//append children to Parents ``` this is the place to add them randomly
// if they get a child they also get the class full else empty
function familyGathering(){
  let match = shuffle(); //
  for( let i = 0; i < match.lengh; i += 1){
    if (match[i] !== undefined) {


    }
  }

}









//get children
function getChildren() {
  idParents.forEach(function(item,index) {
      childrenArray.push(item.children[0]);
    }); // forEach
    //console.log(childrenArray);
    return childrenArray;
  } // function mix

let arraytoBeShuffled = getChildren;



//shuffle chidren to render upon start
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shuffle = function() {
  let array = arraytoBeShuffled();
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
  // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}



// use shuffledArray to append randomized children to parents
function childToParent(){
  let collection = shuffle();
  for( let i = 0; i < collection.length; i += 1){
    if (collection[i] !== undefined){
      parent.append(collection[i]); // appends only cldren up to parents.length -1
    }
  }
}




// equals function to comapre array possitions
// http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
function equals(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  createWinDiv();
  return true;
}

// winning condition logic
function checkWin () {
  idParents.forEach(function(item,index){
  if (item.children.length === 1){
    console.log(item.children[0].innerHTML, index);
    currentArrayPattern[index] = item.children[0].innerHTML;
  } else {
    currentArrayPattern[index] = null;
    console.log('parent is empty', index);
  }
    });// forEach*/
   console.log(currentArrayPattern, winningArrayPattern);
   equals(currentArrayPattern, winningArrayPattern);
}// function end



// display winning message
function createWinDiv() {
  let winDivMessage = document.createElement('div');
  winDivMessage.setAttribute('id', 'win');
  winDivMessage.setAttribute('class', 'pulse');
  winDivMessage.textContent = 'You Won!';
  document.body.appendChild(winDivMessage);
}




/*let generatedArray = [];

let board = function(input) { // takes input from propmt
  for (let i = 0; i < size; i += 1) {
    if (i === size - 1){
      generatedArray.push(null);
    }else{
      let stringVal = i.toString();
      generatedArray.push(stringVal);
    }
  }
  return generatedArray;
};*/

//let winningArrayPattern = board(input);
//winningArrayPattern;

//shuffle(winningArrayPattern);

