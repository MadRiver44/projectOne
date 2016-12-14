/* eslint-env jquery */

const pageLoad = $('document').ready(function () {
  for (let i = 0; i < $('.parent').children().length; i += 1) {
    $('.square').click(function (e) {
      $(this).appendTo('.empty');
    });
  }
});

// * get  inner_square to move to empty div when clicked
$('.inner_square3').click(function () {
  $('.inner_square3').appendTo('.empty');
});

// when page loads all parent divs are clickable to .empty class div

