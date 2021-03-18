/*
1.richiedere Nome
2.Richiedere Cognome
3.Richiedere colore preferito
4.stampare nomeCognomeColore21
*/

var firstName = prompt("What's your name?")
//console.log (firstName);
var surname = prompt("What's your Surname?");
//console.log (surname);
var color = prompt("what's your favorite color?");
var pw = firstName + " " + surname + " " + color + 21;
document.getElementById("content").innerHTML = pw + " u got HACKED!!!";

