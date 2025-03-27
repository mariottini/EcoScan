import Cerca from "../components/Cerca";
import CardRicerca from "../components/CardRicerca";

function Ricerca() {
  return (
    <div className="contenitore_ricerca">
      <Cerca />
      <h2>Recenti:</h2>

      <div className="contenitore_ricerca_card">
        <CardRicerca />
        <CardRicerca /><CardRicerca />
      </div>
    </div>

  )
}

export default Ricerca;