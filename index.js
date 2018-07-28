$( document ).ready(function() {
  var background = $('.wrapper');
  var form = $('#main');
  var close = $('#close');
  var result = $('#result');
  var loader = $('#loader');
  result.hide();
  form.hide();
  loader.hide();
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
    loader.show();
    let bananas = $("#bananas").val();
    let distance = $("#distance").val();
    let camels = $("#camels").val();
    let consumption = $("#consumption").val();
    setTimeout(() => {
      $.ajax({
        url: './back/submitForm.php',
        type: 'POST',
        async: false,
        data: {"calculateBananas": 1, "bananas": bananas, "distance": distance, "camels": camels, "consumption": consumption},
        success: function(bananasLeft){
          loader.hide();
          var output = "";
          if (bananasLeft <= 0){
            output += "<p id='result-message'>OOPS! You don't have any more bananas left for sales.</p>"
          }else{
            output += "<p id='result-message'>You have <b>"+bananasLeft+"</b> bananas to sell. <br />HAPPY SELLING.</p>";
          }
          console.log(output);
          $("#result").html(output);
          result.show();
          $('.app-input').val("");
        }
      });
    }, 1000);
    // console.log("Hello");
    e.preventDefault();
  });

});