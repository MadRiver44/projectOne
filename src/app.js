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

let winningArrayPattern = ['0', '1', '2', null]; //parent id's in order, immutable
let currentArrayPattern = [];

const classSquares = document.querySelectorAll('.square'); // children in a NodeList
const idParents = document.querySelectorAll('.parent'); //NodeList

//http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
function equals (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  console.log('TRUE');
  return true;
}

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
