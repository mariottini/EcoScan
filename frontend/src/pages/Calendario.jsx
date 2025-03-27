import CardCalendario from "../components/CardCalendario";
import TestoCalendario from "../components/TestoCalendario";


function Calendario () {
// chaiamta al backend

    return(
        <div className='content'>

            {/* <DataCalendario /> */}
            <div className="DataCalendario">
                <h2 className="Giorno">Lunedì</h2>
                <h5 className="Data">18/03/2025</h5>
            </div>
            <CardCalendario />
            <TestoCalendario />

        </div>

    )
}

export default Calendario;