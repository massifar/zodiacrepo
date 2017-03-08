// 1. project: Write a program that asks the users for her name and greets her with her name.
//var username = prompt(" what's your name ")
 //document.write("hello " + username + ", how are you doing today?")

// 2.project: Modify the previous program such tht only the users Alice and Bob are greeted wwith their names.
 // if (username == "alice" || username == "bob") {
 // document.write("hello " + username + ", how are you doing today?")
 // } else {
 //   document.write("we need you later " + username + "!") }

 //document.getElementById("message")
 //var content = "write anything here"
 //document.getElementById("message").innerHTML = "hello world"

// use .value to retrieve input data from a form
 // function getInfo(){
 //   var username = document.getElementById("username").value
 //   var password = document.getElementById("password").value
 //   console.log(" your username is " + username + " and your password is " + password)
 // }

//looping through an array
//  var cars = ["fiat", "benz", "honda", "toyota"]
//
// for(i = 0; i < cars.length; i++){
//   if(cars[i] = "fiat"){
//     console.log("you're driving a sweet " + cars[i])
//   }
// }
 //console.log(cars [i])
//}


//find the biggest number in an array and display  in the console
//  var arr = [10, 55, 87, 22, 14]
//  var biggest = 0
//  for(i = 0; i < arr.length; i++){
//   if(biggest < arr[i]){
//     biggest = arr[i]
//     console.log(biggest)
//   }
// }
//
//console.log(biggest)

//creating objects
 var honda = {
   model: "civic",
   year: 2014,
   color: "blue"
}
var toyota = {
  model: "camry",
  year: 2000,
  color: "red"
}
var ford = {
  model: "mustang",
  year:2005,
  color: "black"
}
console.log(ford.model)
ford.model = "F150"
console.log(honda.year)
console.log(toyota.color)
console.log(ford.model)
