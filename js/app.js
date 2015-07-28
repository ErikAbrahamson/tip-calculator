// console.log('check');

// go.addEventListener('click', function(event) {
//     event.preventDefault();
//     returnPercent();
// });

// function returnPercent() {
//     var span = document.getElementById('result');
//     span.innerHTML = null;
//     var amount = document.getElementsByTagName('input')[0].value;
//     var options = document.getElementsByTagName('select')[0];
//     percentNum = options.selectedOptions[0].value;
//     var percent = percentNum / 100;
//     var getResult = amount * percent;
//     getResult = getResult.toFixed(2);
//     var resultText = document.createTextNode('You should tip $' + getResult);
//     span.appendChild(resultText);
// }


$('#go').on('click', function(event) {
    event.preventDefault();
    var $amount = $('#amount').val();
    var $percent = $('#percentage').val();
    var result = (($amount * $percent / 100)).toFixed(2);
    $('#result').html('You should tip $' + result);
});


