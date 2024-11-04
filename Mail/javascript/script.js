//Mail-list
const mail = ["user@gmail.com", "pinuccio@libero.it", "ciccioformaggio@gmail.com", "pippo@gmail.com", "paperino@gmail.com"];
console.log(mail);

//Messaggio di richiesta mail 
const userMail = prompt("Digita la tua mail");
console.log(userMail);

//verifica presenza Mail
let mailPresent = false;
console.log(mailPresent);

//ciclo for
for (let i = 0 ; i < mail.length ; i++){
    const curMail = mail[i];
    if(userMail === curMail){
        mailPresent = true
    }
}

//OUTPUT FINALE
if (mailPresent){
    alert ("L'email inserita è valida")
} else {
    alert ("Attenzione! L'email inserita non è corretta!")
}
