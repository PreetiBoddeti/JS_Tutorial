//Class Creation
class Course{                       //Base class for the below derived classes , PracticalCourse and TheoriticalCourse
   #price               //private field
    get price(){                                    //getter , receives the value set in the setters method
        return '$' + this.#price
    }

    set price(value){                               //setter , sets the assigned value that is passed when the object is created
        if ( value < 0){
            throw 'Invalid price'
        } 
        else {
            this.#price=value
        }
    }

    constructor(title,length,price){                    //constructor for the Course class ,invokes automatically during object creation of that respective class
        this.title=title    
        this.length=length
        this.#price=price
    
    }
   
    calcLength(){                                           //method
        return this.length/this.price
    }

    display(){
        console.log(`title - ${this.title}  \nprice - ${this.price} \nlength - ${this.length}`)
    }

}

const js=new Course('JS: Main Guide', 200 , 1000)
const cloud=new Course('AWS' , 300  , 1200)

console.log(js)
console.log(cloud)

console.log(js.calcLength())
console.log(js.display())

console.log(cloud.calcLength())
console.log(cloud.display())


class PracticalCourse extends Course{                                       // Derived Class ,Inheritance
    constructor(title,length,price,numOfExercises){
        super(title,length,price)                                               //super , refers to the respective base class constructor
        this.numOfExercises=numOfExercises
    }
}

const azure=new PracticalCourse('azure' , 3000 , 4000 , 90)
console.log(azure)

class TheoriticalCourse extends Course{
    publish(){
        console.log('Publish the theroritical course')
    }
}

const grammar = new TheoriticalCourse('Direct and Indirect Speech' , 200 , -50)
grammar.display()
grammar.publish()
