function tellMeNumber() {
    let request = document.getElementById('userNumber');
    let userNumber = parseInt (request.value)
    let num1 = parseInt(userNumber / 100);
    let num2 = parseInt(userNumber / 10) % 10;
    let num3 = userNumber % 10;
    
    if (Number.isInteger(userNumber)) {

        if (99 < userNumber && userNumber < 1000) {
    
            if (num1 === num2 || num2 === num3 || num1 === num3) {
                document.getElementById('answer').innerHTML = 'В цьому числі є однакові цифри'
            } else { 
                document.getElementById('answer').innerHTML = 'В цьому числі всі цифри різні'
              }
    
        } else {
            document.getElementById('answer').innerHTML = '"Трьохзначне" - це число, яке складається з ТРЬОХ чисел...'
          }
    
    } else {
        document.getElementById('answer').innerHTML = 'Спробуй, все ж таки, число...'
      };
}
