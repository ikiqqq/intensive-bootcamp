// const segitiga= (panjang) => {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '*';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga(5));

// let text = "Hello world, welcome to the universe.";
// const word = !text;
// console.log(text.startsWith("Hello"));
// console.log(text.endsWith("."));
// console.log(text.includes("welcome"));

// if(text){
//     console.log("Ketiga kondisi terpenuhi");
// }

const fruits =  [
    {nama: "Pineapple",harga: 15000},

    {nama: "Strawberry",harga: 2000},

    {nama: "Avocado",harga: 5000},
];

let strawberry = fruits.find((e)=>e.nama == "Strawberry");
console.log(strawberry);

let price = fruits.filter((e)=>e.harga > 5000);
console.log(price);