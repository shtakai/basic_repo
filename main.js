$(document).ready(function () {
  $('button').click(function() {
    $('p').append("clicked");
    console.log('click');
  });
})
