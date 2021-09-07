const isGenap = (a,b) =>
new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(a%2 != 0 || b%2 != 0){
            err = "bukan itu yang dimaksud";
            reject(err);
        } else {
            resolve(true);
        }
    }, 500);
});

isGenap(7,6)
    .then((res)=>console.log("iya bilangan genap",res))
    .catch((err)=> console.log("Errornya", err))

isGenap(4,6)
    .then((res)=>console.log("iya bilangan genap",res))
    .catch((err)=> console.log("Errornya", err))

const jalankan = async() =>{
    try{
        const modul = await isGenap(4,6);
        console.log(modul);
    }catch (error){
        console.log(error); 
    }
};

const jalankanError = async() =>{
    try{
        const modul = await isGenap(7,5);
        console.log(modul);
    }catch (error){
        console.log(error); 
    }
};

jalankanError();
jalankan();