function greet() {
    console.log("Hi");
}
greet();

function logGreet (fn){
    fn();
}

logGreet(greet);

var greetMe = function(){
    console.log('Hi daniel');
}
greetMe();
logGreet(greetMe);

logGreet(function (){
    console.log('Hi Duckes');
});

//Investigate more abaout the functions in javascript