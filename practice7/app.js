// object properities and methods
var obj = {
    greet : 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


//Functions and Arrays

var arr = [];

arr.push(function(){
    console.log('Hello World 1')
});
arr.push(function(){
    console.log('Hello World 2')
});
arr.push(function(){
    console.log('Hello World 3')
});

arr.forEach(function(item){
    item();
});

var Emitter = require('./emitter');

var emtr = new Emitter();
//Añado dos funciones a el array de la propiedad greet.
emtr.on('greet',function(){
    console.log('Somewhere, someone said Hello. ');
});
emtr.on('greet',function(){
    console.log('A greeting occurred!.');
});

console.log('Hello!.');
//uso lo que tenga dentro del array la propiedad gsreet
emtr.emit('greet');