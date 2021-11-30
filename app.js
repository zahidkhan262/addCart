var allData = [
    { image_path: 'a3.jpg', name: 'Tomato', price: 120, inCart: 0 },
    { image_path: 'a10.jpg', name: 'mango', price: 220, inCart: 0 },
    { image_path: 'a12.jpg', name: 'Orange', price: 180, inCart: 0 },
    { image_path: 'a17.jpg', name: 'Burger', price: 200, inCart: 0 },
];

(function call() {


    showCard = ""

    allData.forEach((item) => {
        showCard += `
    <div class="col-3">
    <div class="card">
        <div class="card-img">
            <img src="${item.image_path}" alt="">
        </div>
        <div class="card-body">
            <div class="price_name d-flex">
                <p>${item.name}</p>
                <p>${item.price}</p>
            </div>
            <div class="btn d-flex">
                <button class="btn1" id="add_cart">Add to Cart</button>
                <button class="btn1">Buy Now</button>
            </div>
        </div>
    </div>
</div>
    `
    })
    document.getElementById('show-data').innerHTML = showCard;
})();


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