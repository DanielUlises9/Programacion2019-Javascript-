function Greetr() {
    this.greeting = 'Hello World!!2';
    this.greet = function(){
        console.log(this.greeting);
    }
}
module.exports = new Greetr();