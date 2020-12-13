function showNextDate() {
    let userDate = document.getElementById("userDate").value;
    
    console.log(document.getElementById("userDate").value)

    let usersDateNumb = new Date(userDate).getTime() + (1000*60*60*24);
    
    console.log(usersDateNumb)

    let tomorrow = new Date(usersDateNumb);
    console.log(tomorrow.getMonth())
    let yearTomor = tomorrow.getFullYear();
    let monthTomor = tomorrow.getMonth()+1;
    let dayTomor = tomorrow.getDate();
    
    let tomorrowStr = `The next day after ${userDate} is ${yearTomor}-${monthTomor}-${dayTomor}`;

    document.getElementById("answer").innerHTML = tomorrowStr;

}