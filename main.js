$(document).ready(function () {
  $('button').click(function() {
    $('p').append("*");
    $('img').toggle();
    console.log('click');
  });
})
