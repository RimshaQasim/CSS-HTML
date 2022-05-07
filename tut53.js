console.log("This is tutorial 53");
function greet(name, greettext="Greeting from Javascript"){
    console.log(greettext +" "+ name)
    console.log(name + " is a good boy")
}
function sum(a,b,c ){
    let d = a + b + c;
    return d;
    // console.log("Function is returned")
    //this line will never execute (unreachable code)
}

let name = "harry";
let name1 = "shubhan";
let name2= "rohan";
let name3 = "sagar";
let greettext = "Good Morning"
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);//if greet text is not call "greeting from jacascript" is print
// let returnVal = greet (name3)
// console.log(returnVal)
let returnVal = sum(1,2,3)
console.log(returnVal)

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

