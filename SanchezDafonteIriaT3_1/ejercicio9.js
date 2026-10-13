const prompt = require('prompt-sync')();



var user = prompt("Dame tu nombre, apellidos y tu DNI: ");
var creds=[];
var users=[];
while(user != "exit"){

creds = user.split(" ");
users = creds;

var dni = creds[creds.length-1];


for (let i = 0; i < users.length; i++) {
   if(!users[i].includes(dni)){
    users.push(creds);
   }
   else if(users[i].includes(dni)) {console.log("DNI ya existe");
   break;
   }
    
}
user = prompt("Dame tu nombre, apellidos y tu DNI: ");
}



console.log(users);
console.log(creds);