import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DefaultLayout() {
  return (

    <div className="container">

      <div className="content">
        <Outlet />
      </div>
  
      <Navbar />

    </div>

  )
}

export default DefaultLayout;