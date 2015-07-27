console.log('check');

submit.addEventListener('click', function() {
  returnPercent();
});

function returnPercent(percentNum) {

  var amount = document.getElementsByTagName('input')[0].value
  var options = document.getElementsByTagName('select')[0];
  var percent = percentNum / 100;

  percentNum = options.selectedOptions[0].value;

  return amount * percent;
}
