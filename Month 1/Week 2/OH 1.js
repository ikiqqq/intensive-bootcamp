//function


//function declaration vs fuction expression

//hoisting

//declare dulu
function func1() {
    //declaration
    console.log("func 1");
}

const func2 = function () {
    //expresion
    console.log("func 2");
}

//func1();
//func2()
;
//arrow function
const arro1 = () => {};

// object (menyimpan data secara banyak) - key & value
const person = { name: "riski", class:"backend", from:"sumbawa"}
    //2 orang/lebih
const persons = [
    { name: "riski", class:"backend", from:"sumbawa"},
    { name: "riski", class:"backend", from:"sumbawa"}
]
persons[0].from = persons[1]


cons personMap = persons.msp(el => el..name)
console.log(personMap)

cons personMap = persons.filter(el => el.name.riski)
console.log(personMap)

// array - index
const arrl = ["apple", "banana", "grape"]

//error
//sytax error => code dalah tulis atau method unavailable dst,
//Runtimw error => Runtime e.g. node/browser
//logical error => kodenya tidak tapi tidak sesuai dngan yang diharapkan
//server error => server down, no internet/network dst (bukan kesalahan kita tapi kesalahan server)


//remove first and last character
function removeChar(str){
    //You got this!
     return str.slice(1, -1)
   };

//    best solution

const removeChar = str => str.slice(1,-1)

function removeChar(str){
    return str.substring(1, str.length-1);
   };

   function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };