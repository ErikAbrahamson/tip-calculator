console.log('check');

go.addEventListener('click', function() {
  returnPercent();
});

function returnPercent() {
  var span = document.getElementById('result');
  span.innerHTML = null;
  var amount = document.getElementsByTagName('input')[0].value;
  var options = document.getElementsByTagName('select')[0];
  percentNum = options.selectedOptions[0].value;
  var percent = percentNum / 100;
  var getResult = amount * percent;
  getResult = getResult.toFixed(2);
  var resultText = document.createTextNode('You should tip $' + getResult);
  span.appendChild(resultText);
}
