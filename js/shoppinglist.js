let shoppingList = [];
let ol = document.getElementById('ol');


class Product {
    constructor (title) {
        this.title = title;
        this.quantity = 1;
    }
}

function addNewProduct() {

    let inputArticle = document.getElementById('inputArticle').value;
    let newProduct = new Product(inputArticle);
    

    if (!shoppingList.length) {

        shoppingList.push(newProduct);
        console.log(shoppingList)

        
    } else {

        let index = -1;
        for (i=0; i < shoppingList.length; i++) {

            if (inputArticle == shoppingList[i].title) {

                index = i;
                shoppingList[i].quantity += 1;
                break;

            }
            
        }

        if (index == -1) {
          shoppingList.push(newProduct);
        }

        console.log(shoppingList);

    }
    
}


/*
function addNewElement() {

    let inputArticle = document.getElementById('inputArticle').value;
    let i = shoppingList.length - 1;
    let idNum = shoppingList.length

    
    if (shoppingList.includes(inputArticle)) {

        quantity += 1;
        
    } else {

        quantity = 1;

        shoppingList.push(inputArticle)

        let li = document.createElement('li');
        li.innerHTML = `<label for="check${idNum}">${shoppingList[i]} х ${quantity} <input type="checkbox" id="check${idNum}"></label>`;
    
        ol.appendChild(li); 

    }

}
*/
