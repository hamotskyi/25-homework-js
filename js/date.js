function showNextDate() {

    let userData = document.getElementById("userDate").value;
    let userDate = new Date(userData).getTime();
    let today = new Date(userData);
    let yearNow = today.getFullYear();
    let monthNow = today.getMonth()+1;
    let dayNow = today.getDate();
    let nextDate = userDate + (1000*60*60*24);
    let tomorrow = new Date(nextDate);
    let yearNext = tomorrow.getFullYear();
    let monthNext = tomorrow.getMonth()+1;
    let dayNext = tomorrow.getDate();
    let anwser = `Після ${dayNow}.${monthNow}.${yearNow} буде ${dayNext}.${monthNext}.${yearNext}`;

    document.getElementById("answer").innerHTML = anwser;

}