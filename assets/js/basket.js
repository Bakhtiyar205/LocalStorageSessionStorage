import { getProductCount } from "./common.js";

let table = document.getElementById("table");
let countElem =document.querySelector("sup");



let products = [];
if(JSON.parse(localStorage.getItem("products")) !=null) {
    products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);

function getProductList(list) {
    for (const product of list) {
        table.lastElementChild.innerHTML +=`<tr>
            <th>
                <img src="${product.img}" style="height:100px" alt="">
            </th>
            <td>${product.name}</td>
            <td>${product.count}</td>
            <td><a href="" class="delete-item">X</a></td>
        </tr>
        `
    }
}
countElem.innerText = getProductCount(products);


let deleteIcons = document.querySelectorAll(".delete-item");

deleteIcons.forEach (deleteIcon => {
    deleteIcon.addEventListener("click", function () {
        for (const product of products) {
            if( this.parentNode.previousElementSibling.innerText == product.count){
                const index = products.indexOf(product);
                if (index > -1){
                    products.splice(index, 1);
                    localStorage.setItem("products", JSON.stringify(products));
                }
                document.location.reload(true);
            }
        }      
    });    
});




  
