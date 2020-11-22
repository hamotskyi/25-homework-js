function tellMeAge() {
    let request = document.getElementById('userAge');
    let age = parseInt (request.value)

    if (age >= 1 && age <= 4) {
        document.getElementById('answer').innerHTML = 'Хто лишив дитину саму біля компухтора?'
    } else if (age >= 5 && age <= 10) {
        document.getElementById('answer').innerHTML = 'Господи, дитино, чого ти сидиш за тим компутером? Шо воно тобі дасть? Йди луче книжку якусь почитай... Я от в свої ' + age + ' років вже "Отче наш!" на памнять знав і з десяток книжок прочитав!'
    } else if (age >= 11 && age <= 17) {
        document.getElementById('answer').innerHTML = 'Уроки вивчив? Бо щас провірю! Якшо знов нічого не зробив, бо весь день сидів і в монітора очі вилупив - то я того компутера продам, клянуся!'
    } else if (age >= 18 && age <= 25) {
        document.getElementById('answer').innerHTML = 'Тобі точно ' + age + '? Ану покажи паспорт?'
    } else if (age >= 26 && age <= 39) {
        document.getElementById('answer').innerHTML = 'Точно ' + age + '? Ану продовжи "Ветер с моря дул, Ветер с моря дул..."'
    } else if (age >= 40 && age <= 59) {
        document.getElementById('answer').innerHTML = 'Не ростраюйся! ' + age + ' - це тільки начало жизні!'
    } else if (age >= 60) {
        document.getElementById('answer').innerHTML = 'Ого! Маєш файний вік!'
    }    
}