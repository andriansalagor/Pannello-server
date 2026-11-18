import "./App.css";

import { sistema, servers, avvisi } from "./dati";

import {
  contaPerStato,
  cpuMedia,
  piuLento,
  trovaServer
} from "./calcoli";

import Intestazione from "./Intestazione";
import Riepilogo from "./Riepilogo";
import GrigliaServer from "./GrigliaServer";
import ServerInEvidenza from "./ServerInEvidenza";
import Avvisi from "./Avvisi";

function App() {
  const online = servers.filter(s => s.online).length;

  const ok = contaPerStato(servers, "ok");
  const attenzione = contaPerStato(servers, "attenzione");
  const critici = contaPerStato(servers, "critico");
  const offline = contaPerStato(servers, "offline");

  const mediaCpu = cpuMedia(servers);
  const lento = piuLento(servers);

  const cercato = "db-01";
  const server = trovaServer(servers, cercato);

  return (
    <div className="pannello">

      <Intestazione
        nome={sistema.nome}
        aggiornato="11/11/2026 alle 10:15"
        online={online}
        totale={servers.length}
      />

      <Riepilogo
        ok={ok}
        attenzione={attenzione}
        critici={critici}
        offline={offline}
        mediaCpu={mediaCpu}
        lento={lento}
      />

      <GrigliaServer servers={servers} />

      <ServerInEvidenza
        cercato={cercato}
        server={server}
      />

      <Avvisi elenco={avvisi} />

    </div>
  );
}

export default App;



/*
DOMANDA 1

Se dati-blackout.js avesse sette server,
cosa si vedrebbe nella griglia?
E se ne avesse cinque?

Risposta:
Con sette server si vedrebbero sette schede.
Con cinque server si vedrebbero cinque schede.


DOMANDA 2

Quale idea della settimana 7 spiega perché
non ho dovuto modificare sei componenti?

Risposta:
Il riuso dei componenti e la separazione
tra dati e interfaccia.
I componenti ricevono i dati tramite props
e si aggiornano in base ai dati ricevuti.
*/