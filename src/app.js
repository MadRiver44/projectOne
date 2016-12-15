/* eslint-env jquery */
/*const classSquares = document.querySelectorAll('.square'); // children
let elementIdOrder = [];
for (let i = 0; i < classSquares.length; i += 1) { // loop over class square
  //console.log(classSquares[i]); // all items are in div id order
  let x = classSquares[i].innerHTML
  elementIdOrder.push(parseInt(x));
}*/

/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {
    const parent = $(this).parent('div');
    console.log(this);
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
  });
});

/* win state - loop over array of ids and if they are mapped
in a particular order, console.log('WIN'); */

let winningArrayPattern = [0, 1, 2]; //parent id's in order, immutable
let currentArrayPattern = [44, 2, 3] // i will look for the child element with parent id of the index of the winning Arr
                                //  i will then set that index value in currentArray to that child value,
                                // when the arrays match, win!!

const classSquares = document.querySelectorAll('.square'); // children in a NodeList
//console.log(classSquares.length) // 3
//console.log(classSquares[1].innerHTML) // finally !!  child's innerHTML - parse it to a number


// i have the values, now to map them to parent indexes
for (let i = 0; i < classSquares.length; i += 1){
  // the parent of each child
 //console.log(classSquares[i].innerHTML)
//console.log(classSquares[i].parentNode);

// got parent id !!!!
let parentID = classSquares[i].parentNode;
console.log(parentID.id);

}





