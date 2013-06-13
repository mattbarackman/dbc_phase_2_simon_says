$(document).ready(function() {

  $('#get_color').on('click', function() {
    var data = $.ajax({
      url: '/color',
      method: 'POST',
      dataType: 'json'
    }).done(function(response) {
      add_colored_square(response);
    });
  });

  function add_colored_square(response) {
    var color = response.color;
    var cell = response.cell;
    $('li:nth-of-type(' + cell + ')').css('background-color', color);
  }
});