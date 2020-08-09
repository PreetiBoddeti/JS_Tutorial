const task3Element = document.getElementById('task-3');

function myFunction(){
    alert('Implementing basic function call and definition')
}

function greetUser(name){
    alert('Hello '+name)
}

myFunction()
greetUser('Preeti')

task3Element.addEventListener('click',myFunction)

function appendStrings(str1,str2,str3){
    let newString=str1+' '+str2+' '+str3
    return newString
}
newappendedResult=appendStrings('Hi','Preeti','Boddeti')
alert('The apended string '+newappendedResult)