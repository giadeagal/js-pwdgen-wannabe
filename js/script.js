var userName;
userName = prompt ("Benvenuti nel mio generatore di password SUPER-inefficaci. Per iniziare mi servirebbe il tuo nome di battesimo");
var userNameLC = userName.toLowerCase();

var userSurname;
userSurname = prompt ("Perfetto, ora però  mi servirebbe anche il cognome, se non ti dispiace :D");
var userSurnameLC = userSurname.toLowerCase();

var favColor;
favColor = prompt ("Abbiamo quasi finito! Ora mi serve solo sapere il tuo colore preferito.");
var favColorLC = favColor.toLowerCase();

document.getElementById("stampante").innerHTML="Ecco la tua password personalizzata: " + userNameLC + userSurnameLC + favColorLC + 21;