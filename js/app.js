window.addEventListener('load', function() {
  // Declarando variables
  var text = document.querySelector('textarea');
  var count = document.querySelector('span');
  var btn = document.querySelector('button');
  var section = document.querySelector('section');
  count.textContent = '140';
  // Evento para el textarea
  text.addEventListener('keyup', function() {
    btn.disabled = false;
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
