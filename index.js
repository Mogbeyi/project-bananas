$( document ).ready(function() {
  var background = $('.wrapper');
  var form = $('#main');
  var close = $('#close');
  var result = $('#result');
  result.hide();
  form.hide();
  $('#demo-button').click(function() {
    background.slideUp("easeout", function() {
      form.show();
    });
  })
  $('#close').click(function() {
    form.slideDown("swing", function() {
      background.slideDown("slow");
      $(this).hide();
      result.hide();
    });
  })
  $('.app-input').focus(function () {
    result.fadeOut();
  })

  //When calculate button is clicked...
  $('#app-form').on('submit', function(e){

    let bananas = $("#bananas").val();
    let distance = $("#distance").val();
    let camels = $("#camels").val();
    let consumption = $("#consumption").val();
    $.ajax({
      url: './back/submitForm.php',
      type: 'POST',
      async: false,
      data: {"calculateBananas": 1, "bananas": bananas, "distance": distance, "camels": camels, "consumption": consumption},
      success: function(bananasLeft){
        // console.log(bananasLeft);
        $("#bananasLeft").html(bananasLeft);
        result.show();
        $('.app-input').val("");
      }
    });
    // console.log("Hello");
    e.preventDefault();
  });

});