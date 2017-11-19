window.addEventListener('load', function() {
  // Declarando variables
  var text = document.querySelector('textarea');
  var count = document.querySelector('span');
  var btn = document.querySelector('button');
  var section = document.querySelector('section');
  count.textContent = '140';
  // Evento para el textarea
  text.addEventListener('keyup', function() {
    var characteres = text.value.split(''); // Extrae caracteres en un array
    var totalCharacteres = characteres.length;
    // Siendo la cantidad máxima de caracteres 140, para que el contador disminuya conforme se ingresen los caracteres se resta la cantidad máxima menos la cantidad de caracteres ingresados
    var counterNumber = 140 - totalCharacteres;
    btn.disabled = false;
    btn.classList.add('btn-enabled');
    count.textContent = counterNumber;
    // Cambiando de color el contador
    if (totalCharacteres < 120) {
      count.classList.remove('count-red');
      count.classList.remove('count-yellow');
      count.classList.remove('count-green');
      count.classList.add('count-blue');
    } else if (totalCharacteres >= 120 && totalCharacteres < 130) {
      count.classList.remove('count-blue');
      count.classList.remove('count-red');
      count.classList.remove('count-yellow');
      count.classList.add('count-green');
    } else if (totalCharacteres >= 130 && totalCharacteres < 140) {
      count.classList.remove('count-green');
      count.classList.remove('count-blue');
      count.classList.remove('count-red');
      count.classList.add('count-yellow');
    } else if (totalCharacteres > 140) {
      // El botón se deshabilita si se supera los 140 caracteres
      btn.disabled = true;
      // Eliminando estilo del botón habilitado
      btn.classList.remove('btn-enabled');
    } else {
      count.classList.remove('count-yellow');
      count.classList.remove('count-green');
      count.classList.remove('count-blue');
      count.classList.add('count-red');
    }
    // Para que crezca el textarea
    setTimeout(function() {
      text.style.cssText = 'height:auto';
      // scrollHeight retorna la altura del contenido
      text.style.cssText = 'height:' + text.scrollHeight + 'px';
    }, 0);
  });
  // Evento para el botón
  btn.addEventListener('click', function() {
    var div = document.createElement('div');
    div.innerHTML = text.value;
    div.classList.add('tweet');
    div.classList.add('line-height');
    section.appendChild(div);
    text.value = '';
    count.textContent = '';
    btn.disabled = true;
    btn.classList.remove('btn-enabled');
  });
});
