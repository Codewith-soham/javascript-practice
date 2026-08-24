class Student{   //define a class
    constructor(name, age){ //build a constructor, initializes object data 
        this.name = name,  //this -> access class object
        this.age = age
    }

    display(){   //method of student class
        console.log(this.name);
        console.log(this.age);
    }
}

const s1 = new Student("Soham", 20)  //create object of class

s1.display()