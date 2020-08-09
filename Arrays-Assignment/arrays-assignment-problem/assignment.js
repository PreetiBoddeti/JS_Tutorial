    // create an array
    const numbers=[12,16,22,14,8,1,4,3,90,89,96]

    //filter the array that are greater than 5
    const filteredArray=numbers.filter((number,index,numbers)=>{
        return number > 5
    })
    console.log('The filterd array that holds numbers greater than 5: ')
    console.log(filteredArray)

    //map every object that holds the number on a property num4
    const mapppedArray=numbers.map((number,index,numbers)=>{
        const object={num:number}
        return object
    })
    console.log('The mapped array that holds the numbers: ')
    console.log(mapppedArray)

    //reduce the array to a single number by performing the multipliation a of all the elements in an array
    mulOfAllNumbers=numbers.reduce((prevValue,curValue)=>{
        return prevValue*curValue
    },1)
    console.log('The obtained multiplied value is : '+mulOfAllNumbers)

    //find min and max using ... and destructuring of arrays
    const minMax=[]
    function findMax(array){
    minMax.push(Math.max(...array))
    minMax.push(Math.min(...array))
    }
    findMax(numbers)
    console.log(minMax)
    const [maxNumber,minNumber]=minMax
    console.log('Maximum Number in the array is: '+maxNumber+'\n'+'Mininum Number in the array is: '+minNumber)

    //create a list that do not allow duplicate values
    const newSet=new Set()
    newSet.add(1)
    newSet.add(15)
    console.log('The list of items in the set is ')
    console.log(newSet)
    newSet.add(1)
    console.log(newSet)