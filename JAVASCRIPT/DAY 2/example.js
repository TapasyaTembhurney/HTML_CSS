let userRole = 'student';

// if(userRole == 'admin'){
//     console.log("Full Access granted");
// }

// else if(userRole == "editor"){
//     console.log("editor access granted");
// }

// else if(userRole == "author"){
//     console.log("author access granted");
// }
// else{
//     console.log("Student Access Granted");
// }

// Instead of using if-else-else if statements we can use Switch statement so that we can get more clean and elegant way to write the code.

switch(userRole){
    case "admin":
        console.log('Full access granted');
        break;
    
    case "editor":
        console.log('Author access granted');
        break;

    case "author":
        console.log('Author access granted');
        break;

    case "student":
        console.log('Student access granted');
        break;

    default:
        console.log('Access denied');
}