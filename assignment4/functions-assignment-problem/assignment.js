//arrow function
const sayHello=(name)=>{              //or  const sayHello= name => console.log('Hi ' + name) 
  console.log('Hi '+name)
}
sayHello('Max');

//arrow function with two arguments
const sayHello2=(name,greetings)=>{                // const sayHello2= (name,greetings) => console.log(phrase + '' + greetings)
  console.log(`${greetings} ${name}`)
}


//arrow function with no arguments
const sayHello3=()=>{                                    // const sayHello3= () => console.log('Hello')
  console.log('Hello')
}

//function with returned value
const sayHello4=(name)=>{                               //const sayHello4=name=> 'Hello' + name
  console.log(`${name}`)
  return name
}

sayHello('Max')
sayHello2('Max','Hi')
sayHello3()
sayHello4('Max')


//Default argument
const sayHello5= (name, greet =' Hello ') => console.log(`${greet} ${name}`)
sayHello5('Preeti')

//callback function

function checkInput(cb,...stmt){
  let isEmpty=false
  for(const ch of stmt){
    if(!ch){
      isEmpty=true
      cb()
      break
    }
  }
      console.log(stmt)
}

checkInput(()=> {
  console.log('The string is empty')
},'')
