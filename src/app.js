/* eslint-env jquery */


/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {

    const parent = $(this).parent('div');
    //console.log(this);
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    checkWin();
  });
});

/* win state - loop over array of ids and if they are mapped
in a particular order, console.log('WIN'); */

let winningArrayPattern = ['0', '1', '2', null]; //parent id's in order, immutable
let currentArrayPattern = []; // i will look for the child element with parent id of the index of the winning Arr
                                //  i will then set that index value in currentArray to that child value,
                                // when the arrays match, win!!

const classSquares = document.querySelectorAll('.square'); // children in a NodeList
const idParents = document.querySelectorAll('.parent'); //NodeList


// i have the values, now to map them to parent indexes

function checkWin () { // upon click arrays are returning pre click check
    idParents.forEach(function(item,index){

  if (item.children.length === 1){
    console.log(item.children[0].innerHTML, index);
    currentArrayPattern[index]= item.children[0].innerHTML;
  } else {
    currentArrayPattern[index] = null;
    console.log('parent is empty', index);
  }
    });// forEach*/
   console.log(currentArrayPattern, winningArrayPattern);
  }// function end

