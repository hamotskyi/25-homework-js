let shoppingList = [];
let ol = document.getElementById('ol');
let quantity = 1

console.log(shoppingList);



function addNewElement() {

    let inputArticle = document.getElementById('inputArticle').value;
    let i = shoppingList.length - 1;
    let idNum = shoppingList.length

    
    if (shoppingList.includes(inputArticle)) {

        quantity += 1;
        
    } else {

        shoppingList.push(inputArticle)

        let li = document.createElement('li');
        li.innerHTML = `<label for="check${idNum}">${shoppingList[i]} х ${quantity} <input type="checkbox" id="check${idNum}"></label>`;
    
        ol.appendChild(li); 

    }

}

