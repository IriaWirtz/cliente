const prompt = require('prompt-sync')();

var user = prompt("Introduce el usuario: ");


var users=[];
users = user.split(" ");

for (let i = 0; i < users.length; i++) {
    if(users[i].charAt(0) != '@'){
        users.splice(i, 1);
    }
    
}


    
if(users.length == 1){
    console.log(users[0] + " está online");
}

else if(users.length == 2){
    console.log(users[1] + " y " + users[0] + " están online");
}

else if(user.length > 2){
     console.log(users[users.length-1] + ", " + users[users.length-2] + " y " + (users.length -2) + " persona(s) más están online");
}