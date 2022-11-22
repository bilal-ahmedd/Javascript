// VARIABLE DECLARATION IN JAVASCRIPT


// var myName = "Bilal";
// console.log(myName);

// var _myname = "Ahsan";
// console.log(_myname);

// var 3myname = "C#";     //error in declaring variable
// console.log(3myname); 

// var Myname$ = "C#";
// console.log(Myname$);

// var _my_name = "C++";
// console.log(_my_name);


// Q. Write a program to perform addition, subtraction, multiplication, division & modulus
// Using IF-Else


// var a = 5;
// var b = 10;
// var c = 15;
// var d = 20;

// var add = a+b;
// console.log(add);

// var sub = b-c;
// console.log(sub);

// var mul = c*d;
// console.log(mul);

// var div = d/a;
// console.log(div);

// var mod = a%b;
// console.log(mod);

let a = parseInt( prompt("Enter The First Value") ) ;
let b = parseInt( prompt("Enter The Second Value"));
let abc = prompt("Enter Any operator");
if(abc == "+") {
    console.log(a+b);
}

else if(abc == "-") {
    console.log(a-b);
}

else if(abc == "*") {
    console.log(a*b);
}

else if(abc == "/") {
    console.log(a/b);
}

else if(abc == "%") {
    console.log(a%b);
}

else {
    console.log("Enter The Correct Condition");
}
