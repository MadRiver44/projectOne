
/* stackoverflow question answered */

const tile = new Tile(4);
const parArr = tile.createAmtOfParents();
const kidArr = tile.createAmtOfChildren();
tile.shuffle(kidArr, parArr);
const group = tile.familyGathering(kidArr, parArr);
const game = new Game(group);
const set = game.setWinArrPattern(group);

/* stackoverflow question answered */
$('document').ready(function () {
  $('.square').click(function () {

    const parent = $(this).parent('div');
    $(this).appendTo('.empty');
    $('.empty').addClass('full').removeClass('empty');
    parent.addClass('empty').removeClass('full');
    game.checkWin(set);
  });
});

