function Home() {
  return (
    <div class="home_container">

    {/* Parte superiore della pagina */}
      <img className="home-logo-img"></img>
      <h1 className="home-title">EcoScan</h1>


    {/* Parte inferiore della pagina */}
      <button className="button_style">Accedi</button>
      <p>Non hai un account? Registrati!</p>
      <p>Accedi come ospite.</p>
      
    </div>
  )
}

export default Home;