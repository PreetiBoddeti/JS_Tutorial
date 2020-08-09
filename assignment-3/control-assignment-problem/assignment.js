const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const newrandomNumber=Math.random();

//show alert if the randmNumber greater than 0.7
if(randomNumber >0.7){
    alert( ' The random number exceeds o.7 ')
}else{
    alert(' Not greater than 0.7')
}

//create an array
let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//display elements inside the array using for-of
console.log('for of')
for(const element of number){
    console.log(element)
}

//display elements in an array using for loop in reverse order
console.log('for')
for(i=number.length;i>=0;i--){
    console.log(number[i])
}


console.log(randomNumber)
console.log(newrandomNumber)
//Both are greater than 0.7
if((randomNumber >0.7 && newrandomNumber>0.7)||randomNumber<=0.2 || newrandomNumber<=0.2){
    alert ( 'greater than 0.7 or less than 0.2')
}else{
    alert('jdhfvsdfjsdf')
}

