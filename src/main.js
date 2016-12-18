
/* stackoverflow question answered */
/*
console.log('main.js is loaded');
$('document').ready(function () {
  $('.square').click(function () {

    const parent = $(this).parent('div');
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    game.checkWin();
  });
});
*/

let tile = new Tile(4);
console.log(tile);

const parArr = tile.createAmtOfParents();
const kidArr = tile.createAmtOfChildren();
tile.shuffle(kidArr, parArr);
const group = tile.familyGathering(kidArr, parArr);
let game = new Game(group);
console.log(game);
const set = game.setWinArrPattern(group);
console.log('this is set', set);



/* stackoverflow question answered */
console.log('main.js is loaded');
$('document').ready(function () {
  $('.square').click(function () {

    const parent = $(this).parent('div');
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    game.checkWin(set);
  });
});









