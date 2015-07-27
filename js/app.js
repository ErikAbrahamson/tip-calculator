console.log('check');

go.addEventListener('click', function() {
  returnPercent();
});

function returnPercent(percentNum) {

  var amount = document.getElementsByTagName('input')[0].value;
  var options = document.getElementsByTagName('select')[0];
  percentNum = options.selectedOptions[0].value;
  var percent = percentNum / 100;
  var getResult = amount * percent;

  var showResult = document.createElement('span');
  var resultText = document.createTextNode('You should tip $' + getResult);

  showResult.appendChild(resultText);
  document.getElementById('result').appendChild(showResult);

}
