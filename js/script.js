var UserName;
UserName = prompt ("Benvenuti nel mio generatore di password SUPER-inefficaci. Per iniziare mi servirebbe il tuo nome di battesimo");

var UserSurname;
UserSurname = prompt ("Perfetto, ora però  mi servirebbe anche il cognome, se non ti dispiace :D");

var FavColor;
FavColor = prompt ("Abbiamo quasi finito! Ora mi serve solo sapere il tuo colore preferito.");

document.getElementById("stampante").innerHTML="Ecco la tua password personalizzata: " + UserName + UserSurname + FavColor + 21;