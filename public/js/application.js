$(document).ready(function() {

  function add_colored_square(response) {
    var color = response.color;
    var cell = response.cell;
    $('li:nth-of-type(' + cell + ')').css('background-color', color);
  }

  $('#get_color').on('click', function() {
    $.ajax({
      url: '/color',
      method: 'POST',
      dataType: 'json'
    }).done(function(response) {
      add_colored_square(response);
    });
  });
});