function fnPalindrome() {
    let userData = document.getElementById('userText').value;
    let userText = userData.replace(/\s+/g, '');
    let userTextReverse = userText.split('').reverse().join('');
    let answer = document.getElementById('answer');

    if (userTextReverse == userText) {
        return(answer.innerHTML = "О! Це поліндром!");
    } else {
        return(answer.innerHTML = "Це не поліндром");
    }
}









/*
    let userData = document.getElementById('userText').value;
    let answer = document.getElementById('answer');
    let userText = userData.replace(/\s+/g, '');
    
    for(let i = 0; i < userText.lenght; i++) {
        if(userText[i] === userText[userText.length - 1 - i]) {
            return(answer.innerHTML = "Це не поліндром");
        } else {
            return(answer.innerHTML = "О! Це поліндром!");
        }
    }
};
*/
