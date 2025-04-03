import CardCalendario from "../components/CardCalendario";
import TestoCalendario from "../components/TestoCalendario";


function Calendario () {
// chaiamta al backend

    return(
        
        <div className='content2'>

            {/* <DataCalendario /> */}
            <div className="DataCalendario">
                <button className="frecciaSX">{"<"}</button>
                <h2 className="Giorno">Lunedì</h2>
                <h5 className="Data">18/03/2025</h5>
                <button className="frecciaDX">{">"}</button>
            </div>

            <div className="ContenitoreCardCalendario">
            <CardCalendario />
            </div>
            <TestoCalendario />

        </div>
      

    )
}

export default Calendario;


