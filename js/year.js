function tellMeYear() {
    let request = document.getElementById('userYear');
    let year = parseInt(request.value);


    if (Number.isInteger(year)) {
        if (year >= 0) {
            if (year <= 2099) {
                
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                    document.getElementById('answer').innerHTML = 'Високосний!';
                } else {
                    document.getElementById('answer').innerHTML = 'Не високосний!';
                }

            } else {
                document.getElementById('answer').innerHTML = 'Не забігай так далеко. Бо там вже і "лампа не горит" і "врут календари"';
            }
        } else {
            document.getElementById('answer').innerHTML = 'Давай ото як Ісус родився і дальше. Всьо шо раньше - не підходе';
        }
    } else {
        document.getElementById('answer').innerHTML = 'Цифрами пиши';
    }
}
