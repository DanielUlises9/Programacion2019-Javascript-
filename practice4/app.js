function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
//Greet es una nueva propiedad aniadiada a el constructor Person, 
// y ahora todas las instancias de la misma tendran esa propiedad.
Person.prototype.greet = function(){
    console.log('Hello, '+ this.firstname + ' ' + this.lastname);
};

var jhon = new Person('Jhon','Doe');
jhon.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(jhon.__proto__);
console.log(jane.__proto__);
console.log(jhon.__proto__ === jane.__proto__);
