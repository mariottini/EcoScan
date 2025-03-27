import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LayoutSecondario from "./layouts/LayoutSecondario";
// import Calendario from "./pages/Calendario";
import Comune from "./pages/Comune";
// import Foto from "./pages/Foto";
// import Grafico from "./pages/Grafico";
// import Home from "./pages/Home";
// import Ricerca from "./pages/Ricerca";
// import Rifiuto from "./pages/Rifiuto";
// import Servizi from "./pages/Servizi"; 

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<DefaultLayout />}>
          {/* <Route path="/calendario" element={<Calendario />} /> */}
          {/* <Route path="/foto" element={<Foto />} /> */}
          {/* <Route path="/grafico" element={<Grafico />} /> */}
          {/* <Route path="/ricerca" element={<Ricerca />} /> */}
          {/* <Route path="/rifiuto" element={<Rifiuto />} /> */}
          {/* <Route path="/servizi" element={<Servizi />} /> */}
        </Route>

        <Route path="/" element={<LayoutSecondario />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/comune" element={<Comune />} />
        </Route>
        
      </Routes>
    </Router>
  );
}


export default App;