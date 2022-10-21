// chiedere quanti km deve percorrere il passeggero
const kilometres = Number (prompt("inserire quanti kilometri si vogliono percorrere") )
console.log(kilometres)
// chiedere l'eta' del passeggero
const age = Number (prompt("inserire l'eta'") )
console.log(age)
// calcolare il prezzo totale del viaggio 
const ticket = kilometres * 0.21

console.log(ticket)
// se eta' < 18 appliccare il 20%
// se eta' >= 65 applicare il 40%
let ticketPrice
if(age < 18){
     ticketPrice = ticket - (ticket * 0.2)
     document.getElementById("discount").innerHTML= ("20%")
} else if (age >= 65){
     ticketPrice = ticket - (ticket * 0.4)
     document.getElementById("discount").innerHTML= ("40%")
} else {
     ticketPrice = ticket
}
console.log(ticketPrice.toFixed(2))
// stampo biglietto
document.getElementById("kilometraggio").innerHTML= kilometres
document.getElementById("price").innerHTML=ticketPrice.toFixed(2)