import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectCity from "./pages/SelectCity";
import InfoServices from "./pages/InfoServices";
import Calendar from "./pages/Calendar";
import Search from "./pages/Search";
import CameraPage from "./pages/CameraPage";
import Charts from "./pages/Charts";
import Profile from "./pages/Profile";
import Trash from "./pages/Trash";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Modify_Profile from "./pages/Modify_Profile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={[<Header route={"/"} />, <Login />]} />
				<Route
					path="/register"
					element={[<Header route={"/"} />, <Register />]}
				/>
				<Route
					path="/select-city"
					element={[<Header route={"/"} />, <SelectCity />]}
				/>
				<Route path="/info-services" element={[<Header />, <InfoServices />]} />
				<Route path="/calendar" element={[<Calendar />, <Navbar />]} />
				<Route path="/search" element={[<Search />, <Navbar />]} />
				<Route path="/camera" element={[<CameraPage />, <Navbar />]} />
				<Route path="/charts" element={[<Charts />, <Navbar />]} />
				<Route path="/profile" element={[<Profile />, <Navbar />]} />
<<<<<<< HEAD
				<Route path="/trash" element={[<Header />, <Trash />, <Navbar />]} />
				<Route path="/Modify_Profile" element={[<Modify_Profile/>, <Navbar />]} />
=======
				<Route
					path="/trash/:name"
					element={[<Header route={"/search"} />, <Trash />, <Navbar />]}
				/>
>>>>>>> 97246667848bab6a021e05ed42bd9fc8af4e9e45
			</Routes>
		</BrowserRouter>
	);
}

export default App;
