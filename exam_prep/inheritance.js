//inheritance is ability of one class to acquire and use properties and methods of another class

class Person{
    constructor(name){
        this.name = name 
    }

    displayName(){
        console.log(this.name);
    }
}

class Student extends Person{   //extends -> inherits from person 
    constructor(name, age){
        super(name); //calls parent parameter
        this.age = age;
    }

    displayAge(){
        console.log(this.age);
    }
}

const s1 = new Student("Soham",10)

s1.displayName()
s1.displayAge()