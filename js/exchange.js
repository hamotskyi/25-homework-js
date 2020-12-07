function toExchange() {
    var userData = document.getElementById('userMoney').value;
    var userMoney = parseInt(userData);
    var list = document.getElementById('ol');
    var answer = document.getElementById('answer');

    if (userMoney <= 0) {
        list.insertAdjacentHTML("beforeEnd", '<li><p id="answer">Нє друг, так діла не буде!</p></li>');
    } else {
        list.insertAdjacentHTML("beforeEnd", '<li><p>Шо хочеш купити?</p></li><li><input onchange="toChooseCurrency()" id="exchangeUsd" type="radio" name="exchange" value="28.3"><label for="exchangeUsd">USD</label> <input onchange="toChooseCurrency()" id="exchangeEur" type="radio" name="exchange" value="33.7"><label for="exchangeEur">EUR</label> <input onchange="toChooseCurrency()" id="exchangePln" type="radio" name="exchange" value="7.5"><label for="exchangePln">PLN</label></li><li><p id="answer"></p></li>');
    }

};

function toChooseCurrency() {
    var radioArr = document.getElementsByName('exchange');
    var userData = document.getElementById('userMoney').value;
    var userMoney = Number(userData).toFixed(2);    //parseInt(userData);

    for (var i = 0; i < radioArr.length; i++) {

        if (radioArr[i].type == "radio" && radioArr[i].checked) {

            var floorNumber = Math.floor(userMoney / radioArr[i].value);
            var moneyChange = (userMoney - (floorNumber * radioArr[i].value)).toFixed(0);

            if (radioArr[i].value == 28.3) {
                var symbol = '$'
            } else if (radioArr[i].value == 33.7) {
                var symbol = '€'
            } else {
                var symbol = 'zł'
            };
            
            if (userMoney <= radioArr[i].value) {
                answer.innerHTML = 'Це получається ' + (userMoney / radioArr[i].value).toFixed(2) + symbol + '. Але мєлочью я не торгую!'
/*TODO*/    } else if ((userMoney % radioArr[i].value) != 0) {
                answer.innerHTML = 'Це получається ' + floorNumber + symbol;
            } else {
                answer.innerHTML = 'Це получається ' + floorNumber + symbol + ' і ' + moneyChange + 'грн здачі.';
            }
        
        } 
    }

};