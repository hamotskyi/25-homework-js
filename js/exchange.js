function fnExchange() {
    let userData = document.getElementById('userMoney').value;
    let userMoney = parseInt(userData);
    let answer = document.getElementById('answer');
    let list = document.getElementById('ol');
    let radioArr = document.getElementsByName('exchange');

    console.log (radioArr)


    if (userMoney <= 0) {
        list.insertAdjacentHTML("beforeEnd", '<li><p id="answer">О нє, це дуже мало!</p></li>');
    } else {
        list.insertAdjacentHTML("beforeEnd", '<li><p>Шо хочеш купити?</p></li><li><input id="exchangeUsd" type="radio" name="exchange" value="usd"><label for="exchangeUsd">USD</label> <input id="exchangeEur" type="radio" name="exchange" value="eur"><label for="exchangeEur">EUR</label> <input id="exchangePln" type="radio" name="exchange" value="pln"><label for="exchangePln">PLN</label></li><li><p id="answer"></p></li>');
    }

    for (var i = 0; i < radioArr.length; i++) {
        if (radioArr[i].type == "radio" && radioArr[i].checked) {
            alert("selected: " + radioArr[i].value);
        }
    }

}
