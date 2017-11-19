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
