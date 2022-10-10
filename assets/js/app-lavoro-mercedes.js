 // Funzione reimposta a 0 
 function reimpostaOreMinuti() {
     document.getElementById('minuti_totale').innerHTML = "0 minuti <br> 0 h";
     document.getElementById('minuti_singolo').innerHTML = "0 minuti <br> 0 h";
 }
 // Funzione return count index are into array multiple input number
 function array_count_index_input_multiple_calcolatore_ore() {
     var total_index = 0;
     $('.input_number_calcolatore').each(function() {
         total_index++;
     })
     return total_index;
 }
 // Funzione add multiple input number into array calcolatore
 $('.btn-add-input-calcolatore').on('click', function(e) {
     e.preventDefault();
     var template = '<div class="div-input-multiple-calcolatore-ore-form row col-12 mb-4 border-bottom"><input type="number" name="input_number_calcolatore[]" value="0" placeholder="Inserisci minuti" id="input_number_calcolatore" class="p-form-text p-form-no-validate m-0 mb-2 w-inherit input_number_calcolatore col-11" style="padding:5px!important" value="Inserisci minuti" /><a href="#" class="col-1 mb-2 text-danger remove_field" style="padding:3px!important"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a></div>';
     $(this).before(template);
     $('.btn-update-input-calcolatore').show();
     somma_calcolo_ore();
 });
 // Funzione update multiple input number into array calcolatore
 $('.btn-update-input-calcolatore').on('click', function(e) {
     somma_calcolo_ore();
 });
 // Funzione remove multiple input number into array calcolatore
 $('.btn-remove-input-calcolatore').on('click', function(e) {
     $('.input_number_calcolatore').each(function() {
         $('.input_number_calcolatore').remove();
         $('.remove_field').remove();
         $('.div-input-multiple-calcolatore-ore-form').remove();
     });
     $('.btn-update-input-calcolatore').hide();
     document.getElementById('calcolatore-ore-total-index').innerHTML = 0;
     document.getElementById('risultato-h-calcolatore-ore').innerHTML = 'Clicca bottone verde "+Aggiungi" per iniziare';
 });
 // Funzione remove single input number into array calcolatore 
 $(".calcolatore-ore-form").on("click", ".remove_field", function(e) { //user click on remove text
     e.preventDefault();
     $(this).parent('div').remove();
     somma_calcolo_ore();
 });
 // Funzione conversione minut in ore:minuti 
 function calcoloOreMinuti(minuti) {
     var sign = minuti <
         0 ? "-" : "";
     var min = Math.floor(Math.abs(minuti));
     var sec = Math.floor((Math.abs(minuti) * 60) % 60);
     console.log("ciao");
     return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
 }
 // Funzione per calcolo somma array
 function somma_calcolo_ore() {
     var total = 0;
     $('.input_number_calcolatore').each(function() {
         total += parseFloat($(this).val());
     })
     document.getElementById('calcolatore-ore-total-index').innerHTML = array_count_index_input_multiple_calcolatore_ore();
     document.getElementById('risultato-h-calcolatore-ore').innerHTML = total.toFixed(0) + " minuti <br> " + calcoloOreMinuti(total / 60) + " h";
     if (array_count_index_input_multiple_calcolatore_ore() == 0) {
         $('.btn-update-input-calcolatore').hide();
     }
 }
 // Funzione per calcolo ore sia singolo che somma in minuti -> ore
 function calcolo_ore() {
     $(document).on('keyup', ".input_number_calcolatore", function() {
         somma_calcolo_ore();
     });
 }
 // Funzione per calcolo pasti inclusi conversioni in minuti -> ore -> ore:minuti 
 function calcolo_pasti() { // creo variabili e inizializzo , prendo dai vari input form 
     var minuti_pasto = 13;
     var ore_totali = 0;
     var minuti_totali = 0;
     var ore_singolo = 0;
     var minuti_singolo = 0;
     // inizializzare variabili
     var numero_pasti = 0;
     var numero_operatori = 0;
     // variabili con value da input
     numero_pasti = document.getElementById("numero_pasti").value;
     numero_operatori = document.getElementById("numero_operatori").value;
     // calcolo minuti 
     minuti_totali = numero_pasti * minuti_pasto;
     minuti_singolo = ((numero_pasti * minuti_pasto) / numero_operatori);
     // calcolo ore 
     ore_totali = (numero_pasti * minuti_pasto /
         60);
     ore_singolo = (((numero_pasti * minuti_pasto) /
         numero_operatori) / 60);
     // inizializza i risultati 
     document.getElementById('minuti_totale').innerHTML = "";
     document.getElementById('minuti_singolo').innerHTML = "";
     // stampa risultati 
     document.getElementById('minuti_totale').innerHTML = minuti_totali.toFixed(0) + " minuti <br> " + calcoloOreMinuti(ore_totali) + " h";
     document.getElementById('minuti_singolo').innerHTML = minuti_singolo.toFixed(0) + " minuti <br> " + calcoloOreMinuti(ore_singolo) + " h";
 }
 // Sempre Ready per aggiornamento dati 
 $(document).ready(function() {
     calcolo_pasti();
     calcolo_ore();
 });