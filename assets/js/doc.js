// Even or odd
let number1 = document.querySelector(".number1");
number1.addEventListener("click", function () {
    let x = prompt("Please enter a number");
    if (isNaN(x)) {
        document.querySelector(".result1").innerHTML = "Please enter a number";
    } else if (x % 2 == 0) {
        document.querySelector(".result1").innerHTML = "The number is even";
    } else {
        document.querySelector(".result1").innerHTML = "The number is odd";
    }
});

// Vote
let age = document.querySelector(".age");
age.addEventListener("click", function () {
    let a = prompt("Please enter your age.");
    if (isNaN(a)) {
        document.querySelector(".result2").innerHTML = "Please enter a number";
    } else if (a > 17) {
        document.querySelector(".result2").innerHTML = "You are eligible to vote";
    } else {
        document.querySelector(".result2").innerHTML = "You are not eligible to vote";
    }
});

// score
let score = document.querySelector(".score");
score.addEventListener("click", function () {
    let b = prompt("Please enter your score");
    if (isNaN(b)) {
        document.querySelector(".result3").innerHTML = "Please enter a number";
    } else if (b > 89) {
        document.querySelector(".result3").innerHTML = "Grade: A1"
    } else if (b > 79) {
        document.querySelector(".result3").innerHTML = "Grade: A2"
    } else if (b > 64) {
        document.querySelector(".result3").innerHTML = "Grade: B1"
    } else if (b > 54) {
        document.querySelector(".result3").innerHTML = "Grade: B2"
    } else if (b > 44) {
        document.querySelector(".result3").innerHTML = "Grade: C1"
    } else if (b > 34) {
        document.querySelector(".result3").innerHTML = "Grade: C2"
    } else if (b > 29) {
        document.querySelector(".result3").innerHTML = "Grade: D"
    } else {
        document.querySelector(".result3").innerHTML = "You were unable to score the required marks to pass the exam."
    }
});

// Largest of the three numbers

function num(evt, Id) {
    let result4 = document.querySelectorAll(".result4");
    let c = prompt("Please enter a number");
    if (isNaN(c)) {
        document.getElementById(Id).innerHTML = "Please enter a number";
    } else {
        document.getElementById(Id).innerHTML = c;
    }
};

function largest() {
    let d = Math.max(+document.getElementById("one").innerHTML, +document.getElementById("two").innerHTML, +document.getElementById("three").innerHTML);
    if (document.getElementById("one").innerHTML == '' || document.getElementById("two").innerHTML == '' || document.getElementById("three").innerHTML == '') {
        document.querySelector(".result5").innerHTML = "Please enter all three numbers";
    } else {
        document.querySelector(".result5").innerHTML = "The largest number is " + d;
    }
};

// String empty or not
function text() {
    let e = prompt("Please enter some text");
    if (e.length == 0) {
        document.querySelector(".result6").innerHTML = "The string is empty";
    } else {
        document.querySelector(".result6").innerHTML = "The string is" + ' ' + e;
    }
};

// Positive, negative or zero 
function nature() {
    let f = prompt("Please enter a number");
    if (isNaN(f)) {
        document.querySelector(".result7").innerHTML = "Please enter a number";
    } else if (f == 0) {
        document.querySelector(".result7").innerHTML = "The number is" + ' ' + f;
    } else if (f > 0) {
        document.querySelector(".result7").innerHTML = "The number is positive.";
    } else {
        document.querySelector(".result7").innerHTML = "The number is negative.";
    }
};

// multiple of both 3 and 5
function multiple() {
    let g = prompt("Please enter a number");
    if (isNaN(g)) {
        document.querySelector(".result8").innerHTML = "Please enter a number";
    } else if (g > 2 && g % 3 == 0 && g % 5 == 0) {
        document.querySelector(".result8").innerHTML = g + " " + "is a multiple of both 3 and 5.";
    } else {
        document.querySelector(".result8").innerHTML = g + " " + "is not a multiple of both 3 and 5.";
    }
}

// triangle
function side(event, Id) {
    let result9 = document.querySelectorAll(".result9");
    let h = prompt("Please enter the length of the side of the triangle.");
    if (isNaN(h)) {
        document.getElementById(Id).innerHTML = "Please enter the length of the side of the triangle.";
    } else {
        document.getElementById(Id).innerHTML = h;
    }
};

function triangle() {
    let side1 = document.getElementById("side1").innerHTML, side2 = document.getElementById("side2").innerHTML, side3 = document.getElementById("side3").innerHTML;
    if (side1 == '' || side2 == '' || side3 == '') {
        document.querySelector(".result10").innerHTML = "Please enter all three sides of the triangle.";
    } else if (side1 == side2 && side1 == side3) {
        document.querySelector(".result10").innerHTML = "The triangle is an equilateral triangle.";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        document.querySelector(".result10").innerHTML = "The triangle is an isosceles triangle.";
    } else {
        document.querySelector(".result10").innerHTML = "The triangle is a scalene triangle.";
    }
};