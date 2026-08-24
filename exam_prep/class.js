class Student{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    display(){
        console.log(this.name);
        console.log(this.age);
    }
}

const s1 = new Student("Soham", 20)

s1.display()