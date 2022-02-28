'use strict'
var name = "Sanjit";

 let person = {
     name : 'John',
     age : 20,
     sayHello : function(){
            console.log(this.name + "says Hello");
     }
     
 }
 person.sayHello();
 const hello = person.sayHello;
 hello();
