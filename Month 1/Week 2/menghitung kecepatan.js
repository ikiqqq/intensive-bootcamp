// const  car= [
//     { name: "Brio", brand:"Honda", kecepatan:200,
//     spek : function (){return 
//         "Mobil" + this.brand + this.name + ", kecepatan maximal" + this.kecepatan + "km/jam";
//     }
// },

//     { name: "Yaris", brand:"Toyota", kecepatan:250,
//     spek2 : function (){return
//         "Mobil" + this.brand + this.name + ", kecepatan maximal" + this.kecepatan + "km/jam";
//     }
// },

//     { name: "Jazz", brand:"Honda", kecepatan:200,
//     spek3: function (){return
//         "Mobil" + this.brand + this.name + ", kecepatan maximal" + this.kecepatan + "km/jam";
//     }
// }
// ]

// console.log(car.spek3())





//array of object
const cars =  [
    {nama: "Brio",brand: "Honda",kecepatan: 500,
        getSummary(){
            return `Mobil ${this.brand} ${this.nama}, kecepatan maximal ${this.kecepatan} km/jam`
        }
    },

    {nama: "Yaris",brand: "Toyota",kecepatan: 550,
        getSummary(){
            return `Mobil ${this.brand} ${this.nama}, kecepatan maximal ${this.kecepatan} km/jam`
        }
    },

    {nama: "jazz",brand: "Honda",kecepatan: 600,
        getSummary(){
            return `Mobil ${this.brand} ${this.nama}, kecepatan maximal ${this.kecepatan} km/jam`
        }
    },
]


//summaries
// const jenisMobil = cars.map((e, i) => {
//     return e.getSummary()
//  })
 
//  console.log(jenisMobil);



//kecepatan terlambat
const news = [["Brio", 500], ["Yaris", 550], ["Jazz", 600]] // array of array
 

const kecepatan = cars.map((e)=>{
    return [e.nama, e.kecepatan]
})
kecepatan.sort((a,b)=>{
     return a[1]-b[1]
 })

 console.log(kecepatan)