//callback - function sent as a parameter to a function , to avoid asynchronous execution
function add(callback) {
    let sum = 0;
    for (let i = 0; i < 10 ; i++){
        
        sum = sum + i;
    }
    callback(sum)
}

add(function(response) {
    console.log(response)
})

//promises - defines the flow of execution

    let add = new Promise(function(resolve,reject){
        let sum = 0;
    for (let i = 0; i < 10 ; i++){
        
        sum = sum + i;
    }
    resolve({'sum' :sum})
    })
    

add.then(response => {
    console.log(response)
    return response
}).then(response => {
    console.log('shgdsd')
    setTimeout(console.log(response),2000)
})

async and await 
function sum() {
    let sum = 0;
for (let i = 0; i < 10 ; i++){
    sum = sum + i;
}
    return sum
}
async function add(){
    let response = 0
    response = await sum()
    console.log(response)
}
add()
// console.log('final')


function greet(name){
    var greet = "Hi , How are you "
    name(greet)
}
greet(greetName => {
    nameGreeted = 'max'
    console.log(greetName+' '+nameGreeted)
})


let greet = new Promise((resolve, reject)=> {
    var greetings = 'Hello, How are you '
    if (greetings !==''){
        resolve(greetings)
    }else{
        reject()
    }
    
})

greet.then(response => {
    var greetedName= 'min'
    console.log(response+greetedName)
})
greet.catch(Error=>{
    console.log('The string is empty')
})
console.log('Hi')

function greet() {
    greetings = ' HELLO '
    return greetings
}
async function greetings() {
    var greeting = await greet()
    console.log(greeting)
}
greetings()

console.log('Hi')

let deposit = new Promise((resolve,reject)=> {
    var totalBalance = 5000
    var amtWithdrawn = 40000
    if (amtWithdrawn < totalBalance){
        totalBalance = totalBalance - amtWithdrawn
        resolve(totalBalance)
    }else{
        reject()
    }
})
deposit.then(response => {
    console.log('The withrawl is successful, left with total Balance of: '+response)
}).catch(Error => {
    console.log('Withdrawl not successful as the total balance is less than the amount to withdraw!!!')
})