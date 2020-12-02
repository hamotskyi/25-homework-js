function fnDiscount () {
    let money = Number(document.getElementById('userMoney').value).toFixed(2);
    let list = document.getElementById('ol');
    let three = (money - (money * 3 / 100)).toFixed(2);
    let five = (money - (money * 5 / 100)).toFixed(2);
    let seven = (money - (money * 7 / 100)).toFixed(2);
    let answer = document.getElementById('answer');


    if (money <= 0) {
        answer.innerHTML = 'Давай не чуди! Шо там по сумі?';
    } else if (isNaN(money)) {
        answer.innerHTML = 'Давай не чуди! Шо там по сумі?';
    } else if (money > 0 && money <= 199) {
        answer.innerHTML = 'Маловато для скидки';
    } else if (money >= 200 && money <= 299) {
        answer.innerHTML = `Твоя скидка - 3%!<br>Сумма зі скидкою - ${three}`;
    } else if (money >= 300 && money <= 499) {
        answer.innerHTML = `Твоя скидка - 5%!<br>Сумма зі скидкою - ${five}`;
    } else if (money >= 500) {
        answer.innerHTML = `Твоя скидка - 7%!<br>Сумма зі скидкою - ${seven}`;
    }

    console.log (money);
    console.log (typeof (money));
    console.log (three);



} 