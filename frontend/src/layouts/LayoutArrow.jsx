import { Outlet } from "react-router-dom";

function LayoutArrow() {
  return (

    <div className="container">

      <button>
        <img src="/"></img>
      </button> 

      <div className="content_two">

        <Outlet />

      </div>

    </div>

  )
}

export default LayoutArrow;