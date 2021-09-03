//Inheritance dalam konsep OOP adalah kemampuan untuk 
//membentuk class baru yang memiliki fungsi turunan atau mirip dengan 
//fungsi yang ada sebelumnya.
//memiliki bagian yang sama dengan kelas seblumnya

class People {
    constructor(name,age){
    this.name = name;
    this.age = age;
    }

    salam(){
        return `Hi nama saya ${this.name}`; 
    }
}

class Person extends People {
    constructor(name,age,job){
        super(name,age);
        this.job = job;
    }
    salam(){
        return `Hallo my name is ${this.name}`; 
    }
}

const riski = new Person("Riski",24,"Developer");

console.log(riski.salam());
