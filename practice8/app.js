var person = {
    firstname:'',
    lastname:'',
    greet: function(){
        return this.firstname+' '+ this.lastname;
    }
}

var jhon = Object.create(person);
jhon.firstname = 'jhon';
jhon.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(jhon.greet());
console.log(jane.greet());