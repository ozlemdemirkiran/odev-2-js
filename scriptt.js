
// popup hidden / block
let urunEkle = document.getElementById("urun-ekle");
let artiButonu = document.querySelector(".arti-butonu");
let popupKapsayici = document.querySelector(".popup-kapsayici");
let carpiButonu = document.querySelector(".carpi-butonu");

function drawerMenu(){
    popupKapsayici.classList.replace("hidden", "block");
}

function popupGizleme(){
    popupKapsayici.classList.replace("block", "hidden");
    urunAdi.value = "";
    urunFiyati.value = "";
    urunAciklamasi.value = "";
}
/* carpiButonu.addEventListener("click", () => {
    popupKapsayici.classList.replace("block", "hidden")
    urunAdi.value = "";
    urunFiyati.value = "";
    urunAciklamasi.value = "";
});
*/

artiButonu.addEventListener("click", drawerMenu);
urunEkle.addEventListener("click", drawerMenu);
carpiButonu.addEventListener("click", popupGizleme);


// product
const urunOlusturmaButonu = document.querySelector("#urun-olustur-butonu");
const eklenmisUrun = document.getElementById("added-product");

const urunAdi = document.getElementById("urun-adi");
const urunFiyati = document.getElementById("urun-fiyati");
const urunAciklamasi = document.getElementById("urun-aciklamasi");


const productArray =[];

function productFunction(){

    let newProduct1 = {
        productName: urunAdi.value,
        price: urunFiyati.value,
        description: urunAciklamasi.value,
    };

    productArray.push(newProduct1);

    let lengthh = document.querySelector(".length");

    lengthh.innerText = `ÜRÜN LİSTESİ(${productArray.length})`
    

    let card = `
    <div class="w-1/4 p-4 ml-16">
        <div class="shadow-md flex flex-col justify-center items-center border-2 rounded-lg h-auto">
            <h2>${newProduct1.productName}</h2>
            <div class="flex gap-1 items-center">
                <p>${newProduct1.price}</p>
                <img src="./img/turkish-lira.png" class="h-3">
            </div>
            <p>${newProduct1.description}</p>
            <a class="pt-3 text-teal-600" href="#">ÜRÜNÜ DÜZENLE</a>
        </div>
    </div>
    `
    
    eklenmisUrun.innerHTML += card;

    urunAdi.value = "";
    urunFiyati.value = "";
    urunAciklamasi.value = "";

}

urunOlusturmaButonu.addEventListener("click", productFunction)

