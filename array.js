//array

var friendsAge = [15,17,14,16];
console.log(friendsAge[0]);
//position ber korar jonno 





var friendsAge = [15,17,14,16];
console.log(friendsAge[1]);
//example

var friendsAge = [15,17,14,16];
console.log(friendsAge[2]);
//example

var friendsAge = [15,17,14,16];
console.log(friendsAge[3]);
//example

var friendsAge = [15,17,14,16];
console.log(friendsAge[4]);
//example  

var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
console.log(friendsAge);
//kono akta element k change korar jonno

var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[3] = 5;
console.log(friendsAge);
//example


var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(16);
console.log(position);
//indexOf dia position check korar jonno use kora hoi 


var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(10);
console.log(position);
//indexOf dia position check korar jonno use kora hoi 
//array er moddhe element jeta khuja hoi seta na thakle (-1) ashbe 


var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(10);
friendsAge.push(15,12,23,24);
console.log(friendsAge);
//new elements add korar jonno [push]use korte hoi


var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(10);
friendsAge.push(20);
friendsAge.push(67);
console.log(friendsAge);
//example
//new elements add korar jonno [push]use korte hoi

var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(10);
friendsAge.push(20);
friendsAge.push(67);
console.log(friendsAge.length);
//kono akta array er moddhe koto ache ta check korar jonno length use kora hoi 


var friendsAge = [15,17,14,16];
var sonaliage = friendsAge[2];
friendsAge[1] = 50;
var position = friendsAge.indexOf(10);
friendsAge.push(20);
friendsAge.push(67);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
//(pop) use kora kono akta element k ber kora hoi 
//() ata thakle by defult last er ta ber kori dibe


var woodLine = ['Fahim','Farhan','Hasan'];
woodLine.push('jakir');
console.log(woodLine);
woodLine.pop();
console.log(woodLine);
//example


var woodLine = ['Fahim','Farhan','Hasan'];
woodLine.shift();
console.log(woodLine);
//shift dile first theke akta ber hoi jabe


var woodLine = ['Kaka','Caka','Mama'];
woodLine.shift();
console.log(woodLine);
//example
//shift dile first theke akta ber hoi jabe


var woodLine = ['Fahim','Farhan','Hasan'];
woodLine.unshift('Hasan');
console.log(woodLine);
//unshift dile first akta add hobe 

var woodLine = ['Fahim','Farhan','Hasan','Kashem'];
var part =woodLine.slice(2);
console.log(part);
//console.log(woodLine);
//slice dia kisu array kati fele 




var kakka = ['Fahim', 'Farhan', 'Hasan', 'jakir'];
var caca = kakka.slice(2);
console.log(caca);
//console.log(kakka);















