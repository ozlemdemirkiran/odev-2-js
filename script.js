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

