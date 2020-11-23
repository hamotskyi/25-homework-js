function fnPalindrome() {
    let userData = document.getElementById('userText').value;
    let answer = document.getElementById('answer');
    let userText = userData.replace(/\s+/g, '');
    
    for(let i = 0; i <= userText/2; i++) {
        if(userText[i] !== userText[userText.length - 1 - i]) {
            return(answer.innerHTML = "Це не поліндром");
        }
    return(answer.innerHTML = "О! Це поліндром!"); 
    }
};
