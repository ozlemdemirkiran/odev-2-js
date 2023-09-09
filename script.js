let urunEkle = document.querySelector(".urun-ekle");
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



/*Hocanın Notları */ ürün ekle butonu
const addBtnE1 = document.getElementById("addProduct");
const addBtnDrawerE1 = document.getElementById("addProductDrawer");
const productWrapperE1 = document.querySelector(".productsWrapper");
const drawerE1 = document.querySelector(".drawer");

const productName = document.getElementById("prName");
const productDesc = document.getElementById("prDesc");
const productPrice = document.getElementById("prPrice");


addBtnE1.addEventListener("click", () => {
    drawerE1.classList.toggle("invisible"); // toogle methodu invisible varsa siler yoksa ekler. invisible hidden ile benzerdir.
})

const addProduct = () => {
    const name = productName.value;
    const price = productPrice.value;
    const desc = productDesc.value;

    const product = {
        name,  // name: name, price: price, gibi eşit olunca yazmanın kısayolu == name,
        price,
        desc,
    }
}

addBtnDrawerE1.addEventListener("click", addProduct);

