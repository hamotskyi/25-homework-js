let list = document.getElementById('ol');

function firstQestion(a) {

    list.insertAdjacentHTML("beforeEnd", `<li><p> Олєг, ти шо, плачеш?</p><form name="ques1" onchange="secondQuestion(); this.onchange=null;"><input class="answer-radio" type="radio" name="ques1" id="firstOfFirst" value="2"><label for="firstOfFirst">Нє бл**ь, сміюся!</label><br><input class="answer-radio" type="radio" name="ques1" id="secondOfFirst" value="1"><label for="secondOfFirst">Мене розриває ізнутрі...</label><br><input class="answer-radio" type="radio" name="ques1" id="thirdOfFirst" value="0"><label for="thirdOfFirst">Звони, хай мене переводять...</label></form></li>`);
    a.style.opacity = '0';
    a.style.cursor = 'auto';

}

function secondQuestion() {

    list.insertAdjacentHTML("beforeEnd", `<li><p>Дев'ять?</p><form name="ques2" onchange="thirdQuestion(); this.onchange=null;"><input class="answer-radio" type="radio" name="ques2" id="firstOfSecond" value="0"><label for="firstOfSecond">Да</label><br><input class="answer-radio" type="radio" name="ques2" id="secondOfSecond" value="1"><label for="secondOfSecond">Десять</label><br><input class="answer-radio" type="radio" name="ques2" id="thirdOfSecond" value="2"><label for="thirdOfSecond">ДЕСЯТЬ!</label></form></li>`);

}

function thirdQuestion() {

    list.insertAdjacentHTML("beforeEnd", `<li><p>Хай всім буде добре все як так і є... Тіша, твоє слово:</p><form name="ques3" onchange="result(); this.onchange=null;" ><input class="answer-radio" type="radio" name="ques3" id="firstOfThird" value="0"><label for="firstOfThird">Єслі нє добіваца свайо - то ані ніхрєна ні даб'юца!</label><br><input class="answer-radio" type="radio" name="ques3" id="secondOfThird" value="2"><label for="secondOfThird">А моє слово которе?</label><br><input class="answer-radio" type="radio" name="ques3" id="thirdOfThird" value="1"><label for="thirdOfThird">Хачю пабажать всєм - не знаю чіво пабажать...</label></form></li>`);
    
}

function result() {
    let radioArrOne = document.getElementsByName('ques1');
    let radioArrTwo = document.getElementsByName('ques2');
    let radioArrThree = document.getElementsByName('ques3');

    for (var i = 0; i < radioArrOne.length; i++) {
        if (radioArrOne[i].checked) {
            var scoreOne = parseInt(radioArrOne[i].value)
        };
        break;
    };

    for (var i = 0; i < radioArrTwo.length; i++) {
        if (radioArrTwo[i].checked) {
            var scoreTwo = parseInt(radioArrTwo[i].value)
        };
        break;
    };

    for (var i = 0; i < radioArrThree.length; i++) {
        if (radioArrThree[i].checked) {
            var scoreThree = parseInt(radioArrThree[i].value)
        };
        break;
    };
//TOFINISH:
    let score = parseInt(scoreOne + scoreTwo + scoreThree);

    list.insertAdjacentHTML("beforeEnd", `<li><p id="answer">Кінець вікторини! Твій результат: ${score} !</p></li>`);
    
}

