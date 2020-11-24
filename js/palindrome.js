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