var userName;
userName = prompt ("Benvenuti nel mio generatore di password SUPER-inefficaci. Per iniziare mi servirebbe il tuo nome di battesimo");

var userSurname;
userSurname = prompt ("Perfetto, ora però  mi servirebbe anche il cognome, se non ti dispiace :D");

var favColor;
favColor = prompt ("Abbiamo quasi finito! Ora mi serve solo sapere il tuo colore preferito.");

document.getElementById("stampante").innerHTML="Ecco la tua password personalizzata: " + userName + userSurname + favColor + 21;