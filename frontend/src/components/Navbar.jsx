import {Link} from "react-router";

function Navbar() {
  return (
        <nav>
          <Link to="/Calendario">
            <img src="/img/calendario.svg" alt="" />
          </Link>
          <Link to="/Ricerca">
            <img src="/img/ricerca.svg" alt="" />
          </Link>
          <Link to="/Foto">
            <img src="/img/fotocamera.svg" alt="" />
          </Link>
          <Link to="/Grafico">
            <img src="/img/grafico.svg" alt="" />
          </Link>
          <Link to="/">
            <img src="/img/user.svg" alt="" />
          </Link>
        </nav>
    
      )
    }

export default Navbar;