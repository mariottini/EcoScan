import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DefaultLayout() {
  return (

    <div className="container">

      <Outlet />
  
      <Navbar />

    </div>

  )
}

export default DefaultLayout;