import { Outlet } from "react-router-dom";

function LayoutSecondario() {
  return (

    <div className="container">

      <div className="content_two">

        <Outlet />

      </div>

    </div>

  )
}

export default LayoutSecondario;