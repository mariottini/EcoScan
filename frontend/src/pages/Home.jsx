function Home() {
  return (
    <div class="home_container">

    {/* Parte superiore della pagina */}
      <img src="/img/Logo.svg"></img>
      <h1 className="home-title">EcoScan</h1>


    {/* Parte inferiore della pagina */}
      <button className="button_style">Accedi</button>
      <p>Non hai un account? <a href="">Registrati!</a></p>
      <a href="http://localhost:5173/comune">Accedi come ospite.</a>
      
    </div>
  )
}

export default Home;