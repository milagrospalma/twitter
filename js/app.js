$(document).ready(function() {
  var $input = $('#textarea');
  var $count = $('#count');
  var $btnTweet = $('#tweet');
  var $container = $('#container');
  var time, MAXLENGTH = 140;

  $count.text(MAXLENGTH);

  function controlButton() {
    if ($input.val().length === 0 || $input.val().length > MAXLENGTH) {
      $btnTweet.attr('disabled', true);
      $btnTweet.removeClass('btn-primary').addClass('btn-secondary');
    } else {
      $btnTweet.removeClass('btn-secondary').addClass('btn-primary');
      $btnTweet.attr('disabled', false);
    }
  }

  $input.on('input', function() {
    var characteres = $(this).val();
    var totalCharacteres = characteres.length;
    var counterNumber = MAXLENGTH - totalCharacteres;
    controlButton();
    $count.text(counterNumber);

    $count.toggleClass('blue', totalCharacteres > 0 && totalCharacteres < 120);
    $count.toggleClass('green', totalCharacteres >= 120 && totalCharacteres < 130)
    $count.toggleClass('yellow', totalCharacteres >= 130 && totalCharacteres < MAXLENGTH);
    $count.toggleClass('red', totalCharacteres >= MAXLENGTH);
    // Para que crezca el textarea
    // setTimeout(function () {
    //   text.style.cssText = 'height:auto';
    //   // scrollHeight retorna la altura del contenido
    //   text.style.cssText = 'height:' + text.scrollHeight + 'px';
    // }, 0);
  });

  $btnTweet.on('click', function() {
    time = moment().format('LT');
    $('#container').prepend('<div class="tweet line-height">' + $input.val() + '<br>' + time + '</div>');
    $count.text(MAXLENGTH);
    $input.val('');
    controlButton();
    $count.removeClass();
  });
});