let year = parseInt (prompt ('Напиши якийсь рік!'));

if (Number.isInteger(year)) {
    if (year >= 0) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            alert('Високосний!');
        } else {
            alert('Не високосний!');
        }
    } else {
        alert('Давай ото як Ісус родився і дальше. Всьо шо раньше - не підходе');
    }
} else {
    alert('Цифрами пиши')
};
