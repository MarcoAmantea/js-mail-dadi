//Tiro del dado per l'utente
const userNum = Math.floor (Math.random() * 6) +1;
console.log(userNum);

//Tiro del dado per il computer
const cpuNum = Math.floor (Math.random() * 6) +1;
console.log(cpuNum);

//OUTPUT FINALE
if (userNum > cpuNum){
    console.log("User Win! 🤩");
} else if (cpuNum > userNum){
    console.log("CPU Win! 😔");
} else {
    console.log("Tie 🥱");
}