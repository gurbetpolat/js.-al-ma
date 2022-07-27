/*
var marka;
console.log(marka);
 
marka="opel";
console.log(marka);

var model=prompt("model giriniz :");
console.log(model);

console.log(marka+" "+model);

var yakıtdeposu=prompt("arabanın yakıt deposunun hacmini giriniz:");

var maxshız=prompt("aracın maksimum hızını giriniz:");

var otomatik=prompt("Araç otomatik mi?");

console.log(marka+" "+model +" arabanın yakıt deposu "+ yakıtdeposu+" litredir "+  maxshız+" maksimum hızı"+" Araba otomatik mi? "+ otomatik);
  */
/****************************** */
/*
var ad=prompt("adınızı giriniz");
var ogr_no=prompt("ögrenci no");
var cınsıyet=prompt("cinsiyet:");// true: erkek false:kadın
var ders=prompt("dersin adı:");
var not1=prompt("not1:");
var not2=prompt("not2:");

var ortalama=(Number(not1)+Number(not2))/2;

console.log(ogr_no+" "+ ad +" "+ ortalama);
*/

/**************OPERATÖRLER*****************/
/*
//Matematiksel operatörler

var x=10;
var y=20;
var z=10;

console.log(x+y);
console.log(x-y);
console.log(y/z);
console.log(x*y);
console.log(x+y*z);
console.log((y+z)*x)

x++;
console.log(x); 

// Karşılaştırma operatörleri

var sonuc=x>y;
console.log(sonuc);
console.log(x<=z);
console.log(x==z);
console.log(x===z);
console.log(x!=z);


//Mantıksal operatörler
 // and (&&) operatörü
 console.log((20<10) && (15<30));
 
 // || (or) operatörü
 console.log((20<10) || (15<30));

 // ! (Not) operatörü
 console.log(!(x<y));
 */

/***** KULLANICIDAN ALINAN 3 SAYININ EN BÜYÜĞÜNÜ BULMA ******/
/*
 var a=prompt("sayı giriniz..");
 var b=prompt("sayı giriniz..");
 var c=prompt("sayı giriniz..");

 console.log("a sayısı en büyük mü? :", (a>b)&&(a>c));
 console.log("b sayısı en büyük mü? :", (b>c)&&(b>a));
 console.log("c sayısı en büyük mü? :", (c>a)&&(c>b));
 */

/********KOŞUL İFADELERİ **********/


// İF/ELSE 
/*
    var marka="opel";
    var model="astra";
    var otomatik="yes";

  if(otomatik=="yes"){
    console.log("araç otomatiktir.")
  }
  else{
    console.log("araç otomatik değildir.")
  }

  otomatik=true;
   if(otomatik){
    console.log(marka+" "+ model+" "+ otomatik);
   }

   if(otomatik==true){
    console.log("true");
   }

   if(otomatik=='true'){
    console.log("true");
   }
   else{
    console.log("false");
   }

   if(10=='10'){
    console.log("sayılar eşit");
   }
  
   if(10==="10"){
    console.log("sayılar eşit");
   }
   else{
    console.log("sayılar eşit değil");
   }


// 1: Manuel
// 2: otomatik
 var vites="7";

 if(vites=="1"){
    console.log("Araç Manuel");
 }
 else if(vites=="2"){
    console.log("Araç Otomatik");
 }

 else{
    console.log("yanlış değer girdiniz");
 }


// SWİTCH/CASE

var vites="3";
 switch(vites){
    case "1":
        console.log("araç manueldir");
        break;
        case "2":
            console.log("araç otomatiktir");
            break;
            default:
                console.log("yanlış değer");
 }
 
*/

/**********KOŞUL İFADELERİ UYGULAMA********/
/*
var doğumyılı=prompt("Doğum yılınızı giriniz..");
var yıl=2022;
var yas=yıl-doğumyılı;

console.log(yas);

if(yas>18){
    console.log("ehliyet alabilirsiniz");
}
else if(yas<18){
    console.log("ehliyet alamazsınız");
}
else{
    console.log("yanlış bir değer");
}


var ay = "9"

switch (ay) {
    case "1":
    case "2":
    case "3":
    case "4":
        console.log("Kış");
        break;

    case "5":
    case "6":
    case "7":
    case "8":
        console.log("yaz");
        break;
    case "9":
    case "10":
    case "11":
    case "12":
        console.log("ilkbahar");
        break;
    default:
        console.log("geçerli bir ay giriniz");
}
*/

/***********DÖNGÜLERRR************/
//for döngüsü
/*
for(var i=1; i<=100; i++){
    console.log(i);
}

var sehirler=["Kocaeli","Bursa","Yozgat","Elazığ","Adıyaman"];

for(var i=0; i<sehirler.length; i++){
    console.log(sehirler[i]);
}
*/
/*
var i=0;

while(i<100){
    console.log(i);
    i++;
}


var sehirler=["Kocaeli","Bursa","Yozgat","Elazığ","Adıyaman"];
var i=0;
while(i<sehirler.length){
    console.log(sehirler[i]);
    i++;
}

for(var i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
  
}

for(var i=11; i<=100; i++)
{
    console.log(i);
}

var i=10;

while(i<100){
    console.log(i);
    i=i+5;
}

/********************************************** */
/*
var loggedin = false;
const k_username = "emre";
const k_pasword = "1234";



while (loggedin == fale) {
    var username = prompt("kullanıcı adı:");
    var pasword = prompt("parola");

    if ((k_username == username) && (k_pasword == pasword)) {
        console.log("giriş yapıldı");
        loggedin==true;
    }
    else {
        console.log("hatalı kullanıcı adı veya parola");
    }
}
*/
/**********DİZİLER****************/
/*
var marka=["opel","toyota","mazda","renault","asdf","bmw"];
var model=new Array("corsa","yaris","csx","clio");

console.log(marka[0]);
console.log(model[7]);
console.log(marka.length);

model[0]="astra";
console.log(model);

var auris=["toyota","Auris","42"];

auris.push("emre");
auris.pop();
auris.unshift("BUse");
auris.shift();

console.log(auris);


for(var i=0; i<marka.length; i++){
    console.log(marka[i]);
}


if(marka.indexOf("emre")!==-1)
{
 console.log("eleman bulundu");
}
else{
    console.log("böyle bir eleman bulunmamamktadır");
}

*/

/*********DİZİLER UYGULAMA***********/
/*
var now = 2022;
var model = ["toyota", "mazda", "mercedes", "opel"];
var years = ["2015", "2012", "2020", "2014"];

console.log(model);

for (var i = 0; i < model.length; i++) {
    console.log(model[i]);

}

for (var i = 0; i < model.length; i++) {
    console.log(model[i] + "  " + years[i] + " model ve " + (now - years[i]) + "  yaşında bir araçtır ");

}

var now = 2022;
var models = ["toyota", "mazda", "mercedes", "opel"];
var years = ["2015", "2012", "2020", "2014"];

var model=prompt("model giriniz");
var year=prompt("yaş giriniz");

models.push(models);
years.push(years);
for (var i = 0; i < model.length; i++) {
    console.log(model[i] + "  " + years[i] + " model ve " + (now - years[i]) + "  yaşında bir araçtır ");

}
*/
/***********OBJELER*********/
/*1 . yol */
/*
var opel={
    model:"opel",
    marka:"corsa",
    yılı:"2015",
    renk:"mavi",
    otomatik:"true",
};

console.log(opel);
console.log(opel.marka);
console.log(opel.otomatik);
console.log(opel["renk"]);
*/

/* 2. yol */
/*
var mercedes = new Object();

mercedes.marka = "mrc";
mercedes.renk = "mavi";
mercedes.otomatik = "true";
mercedes.yılı = "2013";
mercedes.model = "auris";
console.log(mercedes);

mercedes.model = "değiş";

console.log(mercedes);


var arabalar=[

    {
        marka:"toyota",
        model:"2015",
        renk:"siyah",
        otomatik:"true",
        yılı:"2022",

    },
    {
        marka:"mercedes",
        model:"2017",
        renk:"gri",
        otomatik:"false",
        yılı:"2020",
    }
]

console.log(arabalar[0].renk);

for(var i=0; i<arabalar.length; i++){
    console.log(arabalar[i].marka);
}
*/
/**********OBJECT UYGULAMA *******/
/*
var personel=
    {
        ad:"Ali",
        soyad:"Yılmaz",
        telefon:"05415981415",
        adres:"Kocaeli",
        meslek:"Bilgisayar Mühendisi",
       diller:["ingilizce","almanca"],
       hobiler:["sinema","spor","kitap okumak"],
    };

console.log(personel.diller.length);

personel.hobiler.forEach(function(hobi){
    console.log(hobi);
})

console.log(personel.hobiler);
*/

// var personel = [
//     {
//         ad: "Ali",
//         soyad: "Yılmaz",
//         telefon: "05415981415",
//         adres: "Kocaeli",
//         meslek: "Bilgisayar Mühendisi",
//         diller: ["ingilizce", "almanca"],
//         hobiler: ["sinema", "spor", "kitap okumak"],

//     },
//     {
//         ad: "emre",
//         soyad: "demir",
//         telefon: "0547852415",
//         adres: "bursa",
//         meslek: "elektrik Mühendisi",
//         diller: ["türkçe", "almanarapçaca"],
//         hobiler: ["yüzme", "spor", "ata binme"],
//     }, {
//         ad: "gurbet",
//         soyad: "polat",
//         telefon: "78521469",
//         adres: "elazığ",
//         meslek: "yazılım Mühendisi",
//         diller: ["farsça", "japonca"],
//         hobiler: ["müzik", "resim çime", "yürüyüş yapma"],
//     }

// ];

// personel.forEach(function(personel){

//     console.log("*****************************");

//     console.log(personel.ad+" "+personel.soyad);

//     personel.diller.forEach(Function(dil){
//         console.log(dil);
//     });
//     console.log("*****************************");

// });

/**********FONKSİYONLAR***********/

// function topla(a, b) {
//     return a + b;
// }

// var sonuc = topla(20, 60);
// console.log(sonuc);


// console.log(topla(90, 30));


// var now = 2022;

// function yashesapla(yas) {
//     return now - yas;
// }

// var emre = yashesapla(2000);
// var gurbet = yashesapla(1999);

// console.log(emre);
// console.log(gurbet);

// function emeklilikhesapla(ad, yas) {
//     var k_yas = yashesapla(yas);
//     var emeklilik = 65 - k_yas;

//     if (emeklilik > 0) {
//         console.log(ad + " " + emeklilik + " yıl sonra emekli olabilir");

//     }

//     else {
//         console.log(ad + " isimli kişi" + " zaten " + emeklilik + " yıl önce olmuş ");

//     }


// }
// emeklilikhesapla("emin", 1556);
// emeklilikhesapla("emre", 2000);
// emeklilikhesapla("gurbet", 1999);




// function tekçift(sayi) {

//     if (sayi % 2 == 0) {
//         return true;
//     }

//     else {
//         return false;
//     }



// }

// if (tekçift(10)) {
//     console.log("sayı çiftir");
// }

// else {
//     console.log("sayı tektir");
// }

// var sayi = tekçift(10);
// var sayi = tekçift(17);
// console.log(sayi);
/*******bunu anlamadım************************* */


// function faktöriyel (sayi){
//     var sonuc=1;

//     for(var i=2; i<=sayi; ){
//         sonuc*=i;
//     }
//     return sonuc;
// }

// console.log(faktöriyel(5));


// var arabalar=["ford", "toyota","mercedes","minicpur"];

// function yazdır(dizi){

//     dizi.forEach(function(item){
//         console.log(item);

//     });

// }
//  yazdır(arabalar);

var isBlue = false;

var blue = document.getElementById("mavi");

setInterval(function () {
    if (isBlue) {
        blue.style.background = "pink";
    }
    else {
        blue.style.background = "blue";
    }
    isBlue = !isBlue;

}, 1000)
/*
var todoList=document.getElementById("todoList");
todoList.style.listStyleType="none";


var Listitems=document.querySelectorAll("li");
Listitems.forEach(function(item){
  item.style.textDecoration="line-through";
});
 */

var date = new Date();

var hour = date.getHours();

var element;

for (var i = hour; i >= 8; i--) {
    element = document.getElementById("item_" + i);
    element.style.textDecoration = "line-through";
    element.querySelector("input").checked = true;
}

var title = document.getElementById("title");

// title.style.color="red";
// title.style.fontSize="40px";
// title.style.border="1px solid blue";
// title.style.padding="10px";


title.classList.add("active");
title.classList.add("f45");
console.log(title.classList);

var p = document.getElementsByTagName("p")[0];

console.log(p.textContent);

var ul = document.querySelectorAll("ul");

ul.forEach(function (el) {
    console.log(el.textContent);

})

var Attributemodels = [
    {
        name: "Mazda CX-3",
        image: "MAZDA.webp",
        link: "MAZDA.webp"
    },
    {
        name: "BMW 418d",
        image: "mavibmw.webp",
        link: "mavibmw.webp"
    },
    {
        name: "Volvo 560",
        image: "volvo.jpg",
        link: "volvo.jpg"
    }
];

setInterval(function () {
    var index = Math.floor(Math.random() * Attributemodels.length);

    var img = document.querySelector(".card-img-top");
    var title = document.querySelector(".card-title");
    var a = document.querySelector("a");

    img.setAttribute("src", Attributemodels[index].image);
    a.setAttribute("href", Attributemodels[index].link);
    title.textContent = Attributemodels[index].name;


}, 1000);

var uygulamamodels = [

    { name: "Mazda", selected: false },
    { name: "Toyota", selected: false },
    { name: "Volvo", selected: true },
    { name: "Renault", selected: false },
    { name: "Mercedes", selected: false }


];
var html = document.querySelector(".list-group");


uygulamamodels.forEach(function (model) {
        
  var li="";

  if(model.selected){
    li= `<li class="list-group-item active">` + model.name + `</li>`;
  }
  else{
    li= `<li class="list-group-item">` + model.name + `</li>`;
  }

    html.innerHTML +=li;
});


var btn=document.querySelector("#changeText");
var p=document.querySelector("p");

btn.addEventListener("click",function(){
    p.textContent="button cliked";

});


