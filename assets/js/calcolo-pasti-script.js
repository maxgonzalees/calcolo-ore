// Funzione reimposta a 0 
function reimpostaOreMinuti() {
    document.getElementById('minuti_totale').innerHTML = "0 minuti <br> 0 h";
    document.getElementById('minuti_singolo').innerHTML = "0 minuti <br> 0 h";
}
// Funzione conversione minut in ore:minuti 
function calcoloOreMinuti(minuti) {
    var sign = minuti <
        0 ? "-" : "";
    var min = Math.floor(Math.abs(minuti));
    var sec = Math.floor((Math.abs(minuti) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
} // Funzione per calcolo pasti inclusi conversioni in minuti -> ore -> ore:minuti 
function calcolo_pasti() { // creo variabili e inizializzo , prendo dai vari input form 
    var minuti_pasto = 13;
    var ore_totali = 0;
    var minuti_totali = 0;
    var ore_singolo = 0;
    var minuti_singolo = 0;
    var numero_pasti = document.getElementById("numero_pasti").value;
    var numero_operatori = document.getElementById("numero_operatori").value;
    // calcolo minuti 
    minuti_totali = numero_pasti * minuti_pasto;
    minuti_singolo = ((numero_pasti * minuti_pasto) / numero_operatori);
    // calcolo ore 
    ore_totali = (numero_pasti * minuti_pasto /
        60);
    ore_singolo = (((numero_pasti * minuti_pasto) /
        numero_operatori) / 60);
    // stampa risultati 
    document.getElementById('minuti_totale').innerHTML = minuti_totali.toFixed(0) + " minuti <br> " + calcoloOreMinuti(ore_totali) + " h";
    document.getElementById('minuti_singolo').innerHTML = minuti_singolo.toFixed(0) + " minuti <br> " + calcoloOreMinuti(ore_singolo) + " h";
}
// Sempre Ready per aggiornamento dati 
$(document).ready(function() {
    calcolo_pasti();
});