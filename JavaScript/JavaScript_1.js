/** SWITCH ELEMENT */

function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Choice").value;
    var Car_String = " is quite a cool car!";
    switch(Cars) {
        case "BMW":
            Car_Output = "BMW" + Car_String;
        break;
        case "Mercedes":
            Car_Output = "Mercedes" + Car_String;
        break;
        case "Audi":
            Car_Output = "Audi" + Car_String;
        break;
        case "Ferarri":
            Car_Output = "Ferarri" + Car_String;
        break;
        case "Lamborghini":
            Car_Output = "Lamborghini" + Car_String;
        break;
        case "McLaren":
            Car_Output = "McLaren" + Car_String;
        break;
        default:
        Car_Output = "Please enter a car as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}
/** SWITH ELEMENT USING CLASS INSTEAD OF ID */
function elementbyclass() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "the text has changed";
}

/** DRAWING A CIRCLE WITH THE CANVAS *

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


/** CREATING A GRADIENT IN A CANVAS */

const c = document.getElementById("myCanvas1")
const ctx = c.getContext("2d");

// CREATE GRADIENT 

const my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");

// fill rectangle

ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150,)