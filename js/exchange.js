function toExchange(a) {
    var userData = document.getElementById('userMoney').value;
    var userMoney = parseInt(userData);
    var list = document.getElementById('ol');
    var answer = document.getElementById('answer');

    if (userMoney <= 0) {
        list.insertAdjacentHTML("beforeEnd", '<li><p id="answer">Нє друг, так діла не буде!</p></li>');
    } else {
        list.insertAdjacentHTML("beforeEnd", '<li><p>Шо хочеш купити?</p></li><li><form onchange="toChooseCurrency()"><input id="exchangeUsd" type="radio" name="exchange" value="28.3"><label for="exchangeUsd">USD</label> <input id="exchangeEur" type="radio" name="exchange" value="33.7"><label for="exchangeEur">EUR</label> <input id="exchangePln" type="radio" name="exchange" value="7.5"><label for="exchangePln">PLN</label></form></li><li><p id="answer"></p></li>');
    }

    a.style.opacity = '0';
    a.style.cursor = 'auto';

};

function toChooseCurrency() {
    var radioArr = document.getElementsByName('exchange');
    var userData = document.getElementById('userMoney').value;
    var userMoney = parseFloat(userData)

    for (i = 0; i < radioArr.length; i++) {

        if (radioArr[i].type == "radio" && radioArr[i].checked) {

            var currencyValue = parseFloat(radioArr[i].value);
            var floorNumber = Math.floor(userMoney / currencyValue);
            var moneyChange = (userMoney - (floorNumber * currencyValue)).toFixed(0);

            if (radioArr[i].value == 28.3) {
                var symbol = '$'
            } else if (radioArr[i].value == 33.7) {
                var symbol = '€'
            } else {
                var symbol = 'zł'
            };

        }

    }

    if (userMoney <= currencyValue) {
        answer.innerHTML = 'Це получається ' + (userMoney / currencyValue).toFixed(2) + symbol + '. Але мєлочью я не торгую!'
    } else if (((userMoney*10) % (currencyValue*10)) == 0) {
        answer.innerHTML = 'Це получається ' + floorNumber + symbol;
    } else {
        answer.innerHTML = 'Це получається ' + floorNumber + symbol + ' і ' + moneyChange + 'грн здачі.';
    }

};