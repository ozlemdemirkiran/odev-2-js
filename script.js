dlet urunEkle = document.querySelector(".urun-ekle");
let popupKapsayici = document.querySelector(".popup-kapsayici");
let carpiButonu = document.querySelector(".carpi-butonu");

const urunOlusturmaButonu = document.querySelector(".urun-olustur")


function drawerMenu(){
    
    popupKapsayici.classList.replace("hidden", "block");
}

function popupGizleme(){
    popupKapsayici.classList.replace("block", "hidden");
}

// function urunOlustur(){
//     products.push(newProduct);
// }

// urunOlusturmaButonu.addEventListener("click", urunOlustur);


urunEkle.addEventListener("click", drawerMenu);
carpiButonu.addEventListener("click", popupGizleme);


const products = []; 

const newProduct = {
    productName: "",
    price: 0,
    description: ""
}

let urunAdiInput = document.querySelector(".urun-adi");
let urunFiyatiInput = document.querySelector(".urun-fiyati");
let urunAciklamasiInput = document.querySelector(".urun-aciklamasi");

urunAdiInput.addEventListener("keyup", urunAdiDegistirmeFunc);

function urunAdiDegistirmeFunc(){
    const urunAdiInput = document.querySelector(".urun-adi");
    newProduct.productName = urunAdiInput.value;
}


urunAdiInput.addEventListener("keyup", (event) => {
    if(event.key === "Escape") {
        popupGizleme();
        urunAdiInput.value = "";  //popup geri geldiğinde value'sunun boş olması için.
    }
    else{
        newProduct.productName = urunAdiInput.value;
     } // escape tuşuna basınca popupı kapat.
    console.log(urunAdiInput)
    console.log(newProduct)
}) 

urunFiyatiInput.addEventListener("keyup", (event) => {
    if(event.key === "Escape"){
        popupGizleme();
        urunFiyatiInput.value = "";
    }else{
        newProduct.email = urunFiyatiInput.value;
    }
    console.log(newProduct)
})

urunAciklamasiInput.addEventListener("keyup", (event) => {
    if(event.key === "Escape"){
        popupGizleme();
        urunAciklamasiInput.value = "";
    }else{
        newProduct.email = urunAciklamasiInput.value;
    }
    console.log(newProduct)
})


products.push(newProduct);



/*Hocanın Notları 
 ürün ekle butonu
const addBtnE1 = document.getElementById("addProduct");
const addBtnDrawerE1 = document.getElementById("addProductDrawer");
const productWrapperE1 = document.querySelector(".productsWrapper");
const drawerE1 = document.querySelector(".drawer");
const closeBtnEl = document.getElementById("closeBtn");

const productName = document.getElementById("prName");
const productDesc = document.getElementById("prDesc");
const productPrice = document.getElementById("prPrice");

function closeDrawer(){
    drawerE1.classList.toggle("invisible") // toogle methodu invisible varsa siler yoksa ekler. invisible hidden ile benzerdir.
}
closeBtnEl.addEventListener("click", closeDrawer) 

addBtnE1.addEventListener("click", closeDrawer)




const addProduct = () => {

    const product = {
        name: productName.value, // name: name, price: price, gibi eşit olunca yazmanın kısayolu == name,
        price: productPrice.value,
        desc: productDesc.value,
    }

    let rowContainer = document.getElementById("productRows")

    const productCard = `
    <div class="w-1/3 p-4">
        <div class="bg-white flex flex-col justify-center items-center border h-24">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p>${product.price}</p>
        </div>
    </div>
    `

    rowContainer.innerHTML += productCard; // += şu anlama geliyor rowContainer.innerHTML + productCard;

    product.value = "";
    productPrice.value = "";
    productDesc.value = "";
    drawerE1.classList.toggle("invisible");
}



addBtnDrawerE1.addEventListener("click", addProduct);

*/





