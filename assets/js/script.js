import {getProductCount} from "./common.js"

// let a = 5;
// a++;
// console.log(a);

// Local Storage

// localStorage.setItem("a",5);

// console.log(localStorage.getItem("a"))

// localStorage.setItem("a",30);
// localStorage.setItem("b",40);

// console.log(localStorage.getItem("a"))
// console.log(localStorage.getItem("b"))

// localStorage.removeItem("a")
// localStorage.clear();

// Array and JSON parse and stringify

// localStorage.setItem("arr", JSON.stringify([1, 2, 3, 4, 5]));

// console.log(JSON.parse(localStorage.getItem("arr")))

// console.log(JSON.parse(localStorage.getItem("arr")))


// Take array type from localStroage
// localStorage.setItem("arr",[1,2,3,4]);
// let str = localStorage.getItem("arr");
// // console.log(str)
// let news = str.split(",");
// let arr = [];
// for (const item of news) {
//     arr.push(parseInt(item));
// }

// console.log(arr);


// Session Storage
// sessionStorage.setItem("name", "Emin");
// console.log(sessionStorage.getItem("name"));

let addBtns = document.querySelectorAll(".btn-primary");
let countElem = document.querySelector("sup");

if(JSON.parse(localStorage.getItem("products")) == null){
    localStorage.setItem("products", JSON.stringify([]));
}


// console.log(JSON.parse(localStorage.getItem("products")));

let products = JSON.parse(localStorage.getItem("products"));

addBtns.forEach(btn => {
    btn.onclick = function (e) {
        e.preventDefault();
        let productId = this.parentNode.parentNode.getAttribute("data-id");
        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let prodcutName = this.parentNode.firstElementChild.innerText;
        let existProduct = products.find(m => m.id == productId);

        if(existProduct == undefined) {
            products.push({
                id: productId,
                img: productImg,
                name: prodcutName,
                count:1,
            })
        }else {
            existProduct.count +=1;
        }

        localStorage.setItem("products", JSON.stringify(products));
        countElem.innerText = getProductCount(products);
    }
})

countElem.innerText = getProductCount(products)








