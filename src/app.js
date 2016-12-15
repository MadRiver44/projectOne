/* eslint-env jquery */
/*const classSquares = document.querySelectorAll('.square'); // children
let elementIdOrder = [];
for (let i = 0; i < classSquares.length; i += 1) { // loop over class square
  //console.log(classSquares[i]); // all items are in div id order
  let x = classSquares[i].innerHTML
  elementIdOrder.push(parseInt(x));


  // now I have to go back and get that childs innerHTML
//console.log(parentID.id);
//console.log(parentID.id,classSquares[i].innerHTML);
//console.log(idParents);
//console.log(winningArrayPattern, currentArrayPattern);
}*/

/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {
    const parent = $(this).parent('div');
    //console.log(this);
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
  });
});

/* win state - loop over array of ids and if they are mapped
in a particular order, console.log('WIN'); */

let winningArrayPattern = [null, '1', '2', '0']; //parent id's in order, immutable
let currentArrayPattern = []; // i will look for the child element with parent id of the index of the winning Arr
                                //  i will then set that index value in currentArray to that child value,
                                // when the arrays match, win!!

const classSquares = document.querySelectorAll('.square'); // children in a NodeList
// console.log(classSquares[1].innerHTML) // finally !!  child's innerHTML - parse it to a number
const idParents = document.querySelectorAll('.parent'); //NodeList


// i have the values, now to map them to parent indexes
// for (let i = 0; i < classSquares.length; i += 1) {
  $('.square').click(function () {
// got parent id !!!!
    // let parentID = classSquares[i].parentNode; // have the child and that gave me the parent because of the loop
    currentArrayPattern = [];
    idParents.forEach(function(item){

  if (item.children.length === 1){
    //console.log(item.children[0].innerHTML);
    currentArrayPattern.push(item.children[0].innerHTML);
  } else {
    currentArrayPattern.push(null);
    console.log('parent is empty');
    // currentArrayPattern[i] = null;
  }
    });// forEach*/
    console.log(currentArrayPattern === winningArrayPattern);
  });// click
// }// for loop
