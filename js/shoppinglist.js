let shoppingList = [];
let ul = document.getElementById('ul');

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
        let li = document.createElement("li");
        let label = document.createElement("label");
        let pName = document.createElement('p');
        let pQuantity = document.createElement('p');
        let inputCheck = document.createElement("input");
        let attFor = document.createAttribute("for");
        let attIdForP = document.createAttribute("id");
        let attType = document.createAttribute("type");
        let name = shoppingList[0].title
        let quant = shoppingList[0].quantity
        let textQuantity = document.createTextNode(`x ${quant}`)
        let textName = document.createTextNode(`${name}`)
        attType.value = "checkbox";
        pQuantity.setAttributeNode(attIdForP);
        attIdForP.value = `qt${shoppingList.length - 1}`;
        ul.appendChild(li);
        li.appendChild(label);
        label.appendChild(pName);
        label.appendChild(pQuantity);
        label.appendChild(inputCheck);
        pName.appendChild(textName);
        pQuantity.appendChild(textQuantity);
        inputCheck.setAttributeNode(attType);

    } else {

        let index = shoppingList.findIndex((product) => {
          return (product.title == inputArticle);
        });

        if (index == -1) {

            shoppingList.push(newProduct);
            let li = document.createElement("li");
            let label = document.createElement("label");
            let pName = document.createElement('p');
            let pQuantity = document.createElement('p');
            let inputCheck = document.createElement("input");
            let attFor = document.createAttribute("for");
            let attIdForP = document.createAttribute("id");
            let attType = document.createAttribute("type");
            let name = shoppingList[shoppingList.length - 1].title
            let quant = shoppingList[shoppingList.length - 1].quantity
            let textQuantity = document.createTextNode(`x ${quant}`)
            let textName = document.createTextNode(`${name}`)
            attType.value = "checkbox";
            pQuantity.setAttributeNode(attIdForP);
            attIdForP.value = `qt${shoppingList.length - 1}`;
            ul.appendChild(li);
            li.appendChild(label);
            label.appendChild(pName);
            label.appendChild(pQuantity);
            label.appendChild(inputCheck);
            pName.appendChild(textName);
            pQuantity.appendChild(textQuantity);
            inputCheck.setAttributeNode(attType);

        } else {

            shoppingList[index].quantity++;
            let pQ = document.getElementById(`qt${index}`);
            let quant = shoppingList[index].quantity;
            let textQuantity = document.createTextNode(`x ${quant}`);
            pQ.removeChild(pQ.firstChild);
            pQ.appendChild(textQuantity);

        }

    }
    
}
