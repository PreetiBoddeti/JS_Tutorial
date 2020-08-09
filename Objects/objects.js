// //create an object
var personalData={name:'Max', age: 30 , hobbies:['gardening','reading','cricket']}

// //adding a new property to the exisiting object
 personalData.isAdmin=true

// console.log(personalData)               //the new property is added and the properties in the console will be displayed in alphabetical order

// //Note: The property that is not there in the object displays output as undefined
// console.log(personalData.NUMBER)

// //delete a property from the object
// delete personalData.isAdmin
// console.log('Delete operation')
// console.log(personalData)


// //modify the value of a property that exists in the object
// personalData.hobbies='cycling'                                      //{name: "Max", age: 30, hobbies: "cycling"} , The entire array is replaced by 'cycling'
// console.log('Mofying the data in the object , adding a new hobby in the hobbies property')
// console.log(personalData)
// personalData.hobbies[1]='reading'
// console.log(personalData)


// //special keys - The properties in objects do not allow spaces, - ..... but allows it is its a special key i.e, 'property name'
// //Note the specia keys cannot be accessed by a period ( . ) , accessed by ['property name']
// const specialObject={'first-name':'Arya ', 'last name':'stark'}
// //acces the speacial keys
// console.log(specialObject['last name'])

// //Dynamic Property access
// const name='first-name'
// console.log(specialObject.name)             //undefined , cannot access by perod
// console.log(specialObject[name])

// const userInput='userInput'
// const userInputValue =123434
// const newObject = { id:111 , name: 'preeti' , [userInput] : userInputValue }
// console.log(newObject)                                      //{id: 111, name: "preeti", userInput: 123434}


// // spread operator and assign method

// const object1={num1:1,num2:2,num3:3}
// const object2={...object1}
// console.log('object 1   object 2')
// console.log(object1,object2)                                            //{num1: 1, num2: 2, num3: 3} {num1: 1, num2: 2, num3: 3}
// object1.num4=4
// console.log('after updating , adding new property num4 to the object1')
// console.log(object1,object2)                                            //{num1: 1, num2: 2, num3: 3, num4: 4} {num1: 1, num2: 2, num3: 3} , the updated value not refeleted (both the objects hold different references)

//assign()
// const object3 = {'char-1' : 'A' ,'char-2': 'B', 'char-3': 'C'}
// const target={}
// //const object4=object3.assign(target,object3)
// console.log('object 3   object 4')
// //console.log(target)
// //console.log(object3,object4)
// object4={}
// object3.assign(
//     object4,object3
// )

// console.log(object4)


//Object Destructuring
personalData.islogged = false   
const {info , ...others} = personalData
console.log(info)

console.log(others)

