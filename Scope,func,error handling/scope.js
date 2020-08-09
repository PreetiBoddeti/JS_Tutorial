var name = ' Gobal'


function displayName(name){
   //name = ' local'
    console.log('The value of name in local scope '+name)

}
console.log(name)
displayName('xyz')

//nested functions
var newArray = [1,2,3,4,5]
function sumOfNumbers(){
    newArray = [3,4]
    return calculateSum(newArray)
}

function calculateSum(array){
    var sum = 0
    for (const key of array){
        sum= sum + key
    }
    return sum
}

const totalSum= sumOfNumbers()
console.log('Total Sum is '+totalSum)


//Arrow Functions
const averageOfNumbers = array=> {
    var avg = 0 
    var sum =0
    var count = array.length
    for ( const num of array){
        sum = sum + num
    }
    return (sum / count)
}
console.log('Average of Numbers in an array is : '+averageOfNumbers([1,2,3,4,5]))


//bind() and call()
//Note: bind() and call () - Binds the given parameter to the function but bind() do not get replicated in memory while the call() gets replicated and holds new reference in the heap area

const john = {
    name: 'John',
    age: 24,
  };
  const jane = {
    name: 'Jane',
    age: 22,
  };
  const greetingJohn = greeting.bind(john)
  function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }


  //Error Handling


  try{
     let arr=[1,2,3,4]
  //   arr[5]=12  
  console.log(abc)
  }
  catch(Error){
    console.log(Error)
  }
  finally{
      console.log('always executed')
  }

