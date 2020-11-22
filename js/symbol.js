function tellMeNumber() {
    let request = document.getElementById('userNumber');
    let a = parseInt (request.value)

    if (a >= 0 && a <= 9) { 
        if (a == 1) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "!"'
        } else if (a == 2) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "@"'
        } else if (a == 3) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "#"'
        } else if (a == 4) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "$"'
        } else if (a == 5) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "%"'
        } else if (a == 6) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "^"'
        } else if (a == 7) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "&"'
        } else if (a == 8) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "*"'
        } else if (a == 9) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі "("'
        } else if (a == 0) {
            document.getElementById('answer').innerHTML = 'Ти мені ' + a + ' - я тобі ")"'
        }
    } else {
        document.getElementById('answer').innerHTML = 'Спробуй ше раз. В тебе вийде. Я в тебе вірю...<br>Просто натисни ОДИН раз клавішу з ЦИФРОЮ!<br>Один раз. Клавішу з цифрою.'
    }
}
