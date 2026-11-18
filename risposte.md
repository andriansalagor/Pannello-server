Tre domande sul flusso dei dati
1. Il pulsante «Riavvia»

Non si modifica server.online direttamente dentro SchedaServer perché le props sono di sola lettura e i componenti non devono modificare i dati ricevuti. Il dato online vive nell'array servers, gestito dal componente principale. Per poterlo modificare correttamente serve useState, che studieremo nella settimana 8.

2. Lo stato calcolato due volte

La griglia e il riepilogo utilizzano la stessa funzione statoServer e gli stessi dati contenuti nell'array servers. Per questo motivo il risultato è coerente: se due server sono critici, anche il riepilogo mostrerà il numero 2.

3. Chi riceve cosa

BadgeStato riceve soltanto la stringa stato, perché deve semplicemente mostrare il testo e il colore corrispondente. In questo modo il componente è più semplice, riutilizzabile e non deve conoscere tutti i dati del server.