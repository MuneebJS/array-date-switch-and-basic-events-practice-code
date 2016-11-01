// var a = 3.345; 
// if (a.slice.indexOf(0, a.length - 1) === "5") {
//     b = a.slice(0, a.length - 2) + "6";
//     alert(b);
// }

// var str = 9.345;
// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
//     alert(str);
// }
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var now = new Date();
// var today = now.getDay();
// var todayName = days[today];
// alert(todayName);

// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var date = new Date();
// var extMonth = date.getMonth();
// var currentMonth = months[extMonth];
// alert(currentMonth);

// var futureDate = new Date("Oct 20, 2016");
// var currentDate = new Date().getTime();
// var diff = futureDate - currentDate;
// diff = diff / (1000 * 60 * 60 * 24);
// var real = Math.floor(diff);
// alert(real);

// var date = new Date("october 24, 2016 12:30:00").getTime() - new Date().getTime();
// var remainingDays = date / (1000 * 60 * 60 * 24); 
// alert(Math.floor(remainingDays));

// var pastDate = new Date().getTime() - new Date("March 25, 1998").getTime();
// var diff = pastDate / (1000 * 60 * 60 * 24)
// diff = Math.floor(diff);
// diff = diff / 365;
// diff = Math.floor(diff);
// alert(diff);

// pmt = prompt("Write something here");
// switch (pmt) {
//     case  "karachi":
//     alert("alert for karachi");
//     break;
//     case "lahore":
//     alert("alert for lahore");
//     break;
//     default :
//     alert("hello world");
// }

// var pmt = prompt("Enter your per");
// // pmt = Numberd(pmt);
// switch (true) {
//     case (pmt <= 100 || pmt >= 90 ) :
//     alert("your grade is A");
//     break;
//     case (pmt >= 80 || pmt < 90) :
//     alert("your grade is B");
//     break;
//     default :
//     alert("please enter correct entry");
// }

// function greet() {
//     alert("hello world");
// }

// function forSubmit() {
//     var pmt = prompt("Enter your name")
//     if (pmt == "Muneeb") {
//         alert("oh yeah!");
//     }
// }

// function makeFieldBlur() {
//    this.style.backgroundColor = "green";
// }


//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  ") {
//  alert("double spaces found!");
//  break;
//  }
//  }

// function checkAdd(fieldId) {
//     document.getElementById(fieldId).innerHTML == "";
//     alert("email field is required");
// }
// checkAdd(email);


// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }

// function fillCity () {
//     var cityName;
//     var zipCheck = document.getElementById("zip").value;
//     switch (zipCheck) {
//         case "a" :
//         cityName = "Karachi";
//         break;
//         case "b" :
//         cityName = "Lahore";
//         break;
//         default :
//         cityName = "No match found";
//     }
//     document.getElementById("city").value = cityName;

// }
// function showAlert() {
// var myAlert;
// myAlert = document.getElementById("email").value;
// alert(myAlert);
// }

// function showAlert() {
//     var short = document.getElementById("email").value;
//     if (short == "") {
//         alert("email required");
//     } 
// }



//var now = new Date();
//var getting = now.getTime("July 21, 1950");
//var diff = getting; - now;
//var final = diff / (1000 * 60 * 60 * 24) + 1;
//alert(final.floor);

var par = document.getElementsByTagName("p");
var textInMiddleParagraph = par[1].innerHTML = "hello dear";
