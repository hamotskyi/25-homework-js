function showNextDate() {

    let userData = document.getElementById("userDate").value;
    let userDate = new Date(userData).getTime();
    let nextDate = userDate + (1000*60*60*24);
    let tomorrow = new Date(nextDate);
    let yearNext = tomorrow.getFullYear();
    let monthNext = tomorrow.getMonth()+1;
    let dayNext = tomorrow.getDate();
    
    let anwser = `А далі буде ${dayNext}.${monthNext}.${yearNext}`;

    document.getElementById("answer").innerHTML = anwser;

}