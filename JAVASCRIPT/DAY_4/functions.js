let a = 100;
let b = 200;

function add(){ // does not takes input but gives   output
    let c;
    c = a + b;
    return c;
}

let res = add();  
console.log(res);

let x = 100;
let y = 200;
function add1(x,y){
    let z;
    z = x + y;
    console.log(z);
}

add1(x,y);


function student(student1Marks, student1MaxMarks){

    let student1Grade;
    let student1Percentage = (student1Marks/student1MaxMarks) * 100;

    if(student1Percentage >= 90){
        student1Grade = 'A';
    }

    else if(student1Percentage >= 80 && student1Percentage < 90){
        student1Grade = 'B';
    }

    else if (student1Percentage >=70 && student1Percentage< 80){
        student1Grade = 'C';
    }

    else if(student1Percentage >= 60 && student1Percentage<70){
        student1Grade = 'D';
    }

    else {
        student1Grade = "E";
    }

    console.log(student1Grade);

}

student(89, 100);
student(92, 100);
student(47, 50);


function greet(name = "Guest"){
    console.log("Hello! " + name);
}

greet();
greet("Aman");

// function add(a,b){
//     return a + b; // returns the sum
// }

// let result = add(5, 10);
// console.log(result);

const addition = (a, b) => a+b;
console.log(addition(5,3));

const square = n => n*n;
console.log(square(100));