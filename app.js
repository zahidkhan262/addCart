var allData = [
    { name: 'Tomato', price: 120, inCart: 0 },
    { name: 'mango', price: 120, inCart: 0 },
    { name: 'Orange', price: 120, inCart: 0 },
    { name: 'Burger', price: 120, inCart: 0 },
];


var cartBtn = document.querySelectorAll('#add_cart');
var bindCart = document.getElementById('bind_cart');
var cartValue = document.getElementById('cart-value');

var a = 0;
for (allCartId of cartBtn) {
    allCartId.onclick = function (resp) {
        console.log(resp)
        a++;
        cartValue.innerHTML = a;
        console.log(bindCart)
        storeData = resp.target.parentNode;
        storeData1 = storeData.parentNode;
        storeData2 = storeData1.parentNode;
        storeData3 = storeData2.parentNode;
        console.log(storeData3)
        copyData = storeData3.cloneNode(true);
        bindCart.appendChild(copyData)
    }
}