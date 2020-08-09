// //create an Array
// const arrCreate1=[1,2,3,4,5,6,7,8,9]
// console.log(arrCreate1)                 //displays the elements assigned to the array and mentions the length f the array

// const arrCreate2=new Array(1,2)
// console.log(arrCreate2)                 //displays the elements in the array along with the length

// const arrCreate3=new Array(3)
// console.log(arrCreate3)                 //(3) [empty × 3] , the Array constructor accepts the single number argument as a length of the array and creates an empty array

// const arrCreate4=Array.of(1)
// console.log(arrCreate4)                 //displays the elements assigned

// //const arrCreate5=Array.from(1,2)
// //console.log(arrCreate5)                 //ncaught TypeError: 2 is not a functionat Function.from (<anonymous>) at ArraysExamples.js:14


// //Any type of data can be stored in an array
// const arrAnyTypeData=[12,'preeti',12.07,{age:24}]
// console.log(arrAnyTypeData)                             //can hold numbers,strings,arrays,objects...

// //Arrays can be multiDimensional
// const arrMultiDimensional=[1,25,[2,3,4,5,6,7,8,9],[23,[1,2,3]],[1.1,2.2]]
// console.log(arrMultiDimensional)                    
// console.log('acess the second index fourth element '+arrMultiDimensional[2][3])
// console.log('access the third index secnd array, third element '+arrMultiDimensional[3][1][2])

// //push(),pop(),shift(),unshift()
// const arrAddElementlast=[1,2,14,1.4,6,90]
// arrAddElementlast.push(100)                                                         //pushes the element at the last of an array
// console.log(`Add the new element at the end of an array  ${arrAddElementlast}`)

// const arrAddElementFirst=[1,2,3,4,5]
// arrAddElementFirst.unshift(0)
// console.log('Unshift() adds the element at the start of an array by shifting all the elements to the right  '+arrAddElementFirst)

// const removeElementLast=[1,2,3,4,5,6,7,8]
// removeElementLast.pop()
// console.log('Last element removed '+removeElementLast)                          //pops last element of the array
// poppedElemet=removeElementLast.pop()
// console.log('Popped Element '+poppedElemet)


// const removeElementFirst=[1,2,3,4,5]
// removedFirstElement=removeElementLast.shift()
// console.log('shift() remves the first element from the array, shifting all the elemnts to the left' + removeElementFirst)
// console.log('The first element removed ' +removedFirstElement)


// //splice()
// const arrSplice=[1,2,3,4,5]
// arrSplice.splice(0,0,6)
// console.log('The spliced array is' +arrSplice)              //The new element will be added at the start of an array

// arrSplice.splice(1,1,7)                      //The new element will be added by parsing at  second index of an array and remves the second element 
// console.log(arrSplice)         

// arrSplice.splice(-1,1,12)
// console.log(arrSplice)                          //The new element is added the endof the array by removing the last element

// arrSplice.splice(0)                             //deletes all the elements from the start of an array
// console.log(arrSplice)


// //slice()
// const arr=[1,2,3,4,5,6,7]
// console.log(arr)                        //displays the elements assigned to the array

// const slicedArray=arr.slice()           //creates a copy of the array, holds new address
// console.log('Sliced Array,Copied ' +slicedArray)           
// console.log("sliced array, Sub Array"+arr.slice(0,2))       //starts from the 0 index till the element at index 2 but excludes the element ar index2

// //concat() - appends single/multiple arrays t the end of an existing array by getting all the elements in the array and creating a new one
// const arr1=[1,2,3,4,5]
// const newArr=[10,11,12,13]
// const newArr1=[21,31,41,51]
// const newArray2=[22,32,42,52]
// const concatArr=arr1.concat(newArr)
// console.log("Single concatenation "+concatArr)
// const concatArr1=arr1.concat(newArr1,newArray2)
// console.log("Multiple concatenation "+concatArr1)

// //indexOf() - returns the index of the element in an array 
// //lastIndexOf() - returns the last index of the element in an array
// //Note: These mrthods work for only primitive values, cannot search the reference types and returns -1 if the element not found
// const arrIndex=[1,2,3,4,5,2,5]
// console.log('Index of element 5 is ' +arrIndex.indexOf(5))
// console.log('The last index of element 2 is '+arrIndex.lastIndexOf(2))          //doubt - not returning crt index


// //find() - searches the reference types and returns the ojects
// //findIndex() - searches the reference types and returns the index 
// const arrFind=[1,2,{name: 'Max'},{name:'mark'}]
// const foundElement=arrFind.find((element,indx,arrFind)=>{
//     return element.name=='Max'
// })
// console.log(foundElement)
// console.log('The found object in the array '+foundElement)
// const founfIndexOfElement=arrFind.findIndex((element,indx,arrFind)=>{
//     return element.name=='Max'
// })
// console.log('The index of the object holding the name max ' +founfIndexOfElement)

// //includes - checks whether the element is part f the array
// console.log('The element "2" is present in the array arrFind or not ? ' +arrFind.includes(2))            //returns true if present else returns false


// //forEach() 
// const iterateThroughArray=[1,2,[1,4,18,19],{name:'Max',age:20},{name:'Mark',age:16},{name:'Erick',age:32}]
// //using for of loop - used for iterating through arrays
// for ( const index of iterateThroughArray){
//     //check whether the person is eligible to vote
//     if( index.age > 18 ) {
//         console.log('Using for of loop')
//         console.log(`${index.name} having age ${index.age} is eligible to vote `)
//     }
    
// }
// //can also use forEach to interate throygh arrays 
// //Note: it does not return values
// const eligiblePersons=[]
// iterateThroughArray.forEach((obj,idx,iterateThroughArray)=>{
//     if ( obj.age > 18 ){
//         console.log('using forEach()')
//         console.log(`${obj.name} of age ${obj.age} is eligible to vote`)        //displays the last element that satisfies the condition
//         eligiblePersons.push(obj)
//     }
//     console.log(eligiblePersons)
//     console.log('The list of eligile persons are:' +eligiblePersons)
// }
// )


// //map() -traversing the elements in an array using map()
// //using the same array iterateThroughArray
// const arrMap=[{name:'Max',age:20},{name:'Mark',age:16},{name:'Erick',age:32}]
// console.log('using map logic')
// const eligibleCandidates=arrMap.map((obj,idx,arrMap)=>{
//     if(obj.age>18){
//         console.log(`${obj.name} is eligible`)  //displays the last elemnt that satisfies the condition
//         return obj
//     }
// })
// console.log(eligibleCandidates) //returns all the objects and displays the objects that satisfies the condition and returns undefined for the elemnt that does not satisfy the condition


// //sorting and reversing
// const srtArr=[23,34,435,556,7678,23]
// const newSrtAry=srtArr.sort((a,b)=>{
//     if(a>b){
//         return 1
//     }else if(a===b){
//         return 0
//     }else{
//         return -1
//     }
// })
// console.log(newSrtAry)
// console.log('The reverse array after the sort ' +newSrtAry.reverse())

// //filter() - filters and returns the list of items in an array that satisfies the given condition
// const filterAry=[2,3,4,5,6,7,8,9,10]
// const filteredAry=filterAry.filter((item,idx,filterAry)=>{
//     if(item>6){
//         return item
//     }
// })
// console.log('Filtered Array ' +filteredAry)

// //reduce()
// const reduceAry=[1,2,3,4,5]
// const sumAry=reduceAry.reduce((prevValue,currentValue)=>{
//     return prevValue+currentValue
// },0)
// console.log(sumAry)

// //split() - transforms strings to arrays
// //join() - transforms arrays to strings
// //Note: The argument within the method specifies the seperator that is used to seperate the elements in an array or join the elements to a string
// const strAry=['Max','Mark']
// const joinStr=strAry.join(' ')
// console.log(`The joined array to string is ${joinStr}`)
// const splitAr=joinStr.split(' ')
// console.log(splitAr)
// console.log(`The splitted Array is ${splitAr}`)

// //spread operator(...) - create a copy of an array i.e, gets all the elements of the existing array and creates a new array
// const arrayNew=[1,2,3,4,5]
// const minElement=(Math.min(...arrayNew))            //gets all the elements from an array and finds the min amongst the elements
// console.log(`mininmum element is ${minElement}`)
// const copiedAry=[...arrayNew]                       //creates the copy of an array
// console.log(copiedAry)          
// //updating the existing array(arrayNew) and checking whether it gets refelected in the array(copiedAry)
// arrayNew.push(100)
// console.log(`The arrayNew is ${arrayNew} and the copied array is ${copiedAry}`)         //The newly created holds a new reference so it does not get reflected with the updations done to the existing array.


// //Arrays Destructuring
// const names=['max','Mark']
// firstName=names[0]
// lastName=names[1]

// //     or

// const [fname,lname]=names
// console.log(fname,lname)
// names.push('mary')
// names.push('maria')
// const [a,b,...others]=names
// console.log(a,b,others)             //others returns two elements(mary,maria) in the form of an array

//Sets
const newSet= new Set()         //EMPTY SET CREATED
newSet.add(1)
console.log(newSet)
newSet.add(2,3)
newSet.add(3,4)             //adds only the first element
newSet.add({'key':[4,5,6]})
console.log(newSet)
const set = newSet['key']
console.log(set)
console.log('type ' +typeof(newSet))
console.log('exixts ? ' +newSet.has(1))
console.log(newSet[2])
//console.log(newSet[3].has(4))
for (const entry of newSet.entries()){
    console.log(entry)
}



//Map()
let newMap=new Map()
newMap.set('max',{id:1,age:13,phone:7896541255})
console.log(newMap)
const retrievedVlue=newMap.get('max')
console.log('retrieved data is ' +retrievedVlue)
console.log(retrievedVlue)
newMap.set('Mark',{id:2,age:15,phone:5412896325})
console.log(newMap)
newMap.delete('max')
console.log(newMap)
console.log('entries')
for (const entry of newMap.entries()){
    console.log(entry)
}
console.log('keys')
for (const entry of newMap.keys()){
    console.log(entry)
}
console.log('values')
for (const entry of newMap.values()){
    console.log(entry)
}



