//1

/*
^(?=(?:[^Aa]*[Aa]){6})[^Aa]{6,}$
*/

//2

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" 
    }
];

var emailsToTrust = [];

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;

if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/.test(email)) {
        emailsToTrust[emailsToTrust.length] = arr[i];
    }
}

console.log(emailsToTrust);
