let  userNumber = parseInt (prompt ('Напиши трьохзначне число. Маєш одну попитку, чесно!'));

let num1 = parseInt(userNumber / 100);
let num2 = parseInt(userNumber / 10) % 10;
let num3 = userNumber % 10;

if (Number.isInteger(userNumber)) {

    if (99 < userNumber && userNumber < 1000) {

        if (num1 === num2 || num2 === num3 || num1 === num3) {
            alert('В цьому числі є однакові цифри')
        } else { 
            alert('В цьому числі всі цифри різні')
          }

    } else {
        alert('Попитки кончились. Прощай!')
      }

} else {
    alert('Попитки кончились. Прощай!')
  };
  