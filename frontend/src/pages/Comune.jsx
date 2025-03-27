function Comune() {
    return (
        <>
            <img className="comune_logo_img" src="" alt="" />
            <h2>Seleziona il comune</h2>

            {/* CARD SELEZIONE COMUNE */}
            <div className="card_selezione_comune">
                <h3>Comune</h3>
                <select name="cars" id="cars">
                <option value="opzione uno">Opzione 1</option>
                <option value="saab">Opzione 2</option>
                </select>

            </div>
        </>
      
    )
  }
  
  export default Comune;