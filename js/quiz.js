let list = document.getElementById('ol');

function firstQestion(a) {

    list.insertAdjacentHTML("beforeEnd", `<li><p> Олєг, ти шо, плачеш?</p><form onchange="secondQuestion(); this.onchange=null;"><input class="answer-radio" type="radio" name="ques1" id="firstOfFirst" value="2"><label for="firstOfFirst">Нє бл**ь, сміюся!</label><br><input class="answer-radio" type="radio" name="ques1" id="secondOfFirst" value="1"><label for="secondOfFirst">Мене розриває ізнутрі...</label><br><input class="answer-radio" type="radio" name="ques1" id="thirdOfFirst" value="0"><label for="thirdOfFirst">Звони, хай мене переводять...</label></form></li>`);
    a.style.opacity = '0';
    a.style.cursor = 'auto';

}

function secondQuestion() {

    list.insertAdjacentHTML("beforeEnd", `<li><p>Дев'ять?</p><form onchange="thirdQuestion(); this.onchange=null;"><input class="answer-radio" type="radio" name="ques2" id="firstOfSecond" value="0"><label for="firstOfSecond">Да</label><br><input class="answer-radio" type="radio" name="ques2" id="secondOfSecond" value="1"><label for="secondOfSecond">Десять</label><br><input class="answer-radio" type="radio" name="ques2" id="thirdOfSecond" value="2"><label for="thirdOfSecond">ДЕСЯТЬ!</label></form></li>`);

}

function thirdQuestion() {

    list.insertAdjacentHTML("beforeEnd", `<li><p>Хай всім буде добре все як так і є... Тіша, твоє слово:</p><form onchange="result(); this.onchange=null;" ><input class="answer-radio" type="radio" name="ques3" id="firstOfThird" value="0"><label for="firstOfThird">Єслі нє добіваца свайо - то ані ніхрєна ні даб'юца!</label><br><input class="answer-radio" type="radio" name="ques3" id="secondOfThird" value="2"><label for="secondOfThird">А моє слово которе?</label><br><input class="answer-radio" type="radio" name="ques3" id="thirdOfThird" value="1"><label for="thirdOfThird">Хачю пабажать всєм - не знаю чіво пабажать...</label></form></li>`);
    
}

function result() {

    let radioArrOne = document.getElementsByName('ques1');
    let radioArrTwo = document.getElementsByName('ques2');
    let radioArrThree = document.getElementsByName('ques3');

    for (var i = 0; i < radioArrOne.length; i++) {
        if (radioArrOne[i].checked) {
            var scoreOne = Number(radioArrOne[i].value)
        };
    };

    for (var i = 0; i < radioArrTwo.length; i++) {
        if (radioArrTwo[i].checked) {
            var scoreTwo = Number(radioArrTwo[i].value)
        };
    };

    for (var i = 0; i < radioArrThree.length; i++) {
        if (radioArrThree[i].checked) {
            var scoreThree = Number(radioArrThree[i].value)
        };
    };

    let score = scoreOne + scoreTwo + scoreThree;
    
    if (score == 0 || score == 5 || score == 6) {
        var baly = 'балів';
    } else if (score == 1) {
        var baly = 'бал';
    } else if (score == 2 || score == 3 || score == 4) {
        var baly = 'бала'
    };

    if (score == 6) {
        list.insertAdjacentHTML("beforeEnd", `<li><p id="answer">Кінець вікторини! Твій результат: ${score} ${baly}! Красава!</p></li>`);
    } else {
        list.insertAdjacentHTML("beforeEnd", `<li><p id="answer">Кінець вікторини! Твій результат: ${score} ${baly}!</p></li>`);
    };
    
}

