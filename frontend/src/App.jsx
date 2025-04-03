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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={[<Header />, <Login />]} />
				<Route path="/register" element={[<Header />, <Register />]} />
				<Route path="/select-city" element={[<Header />, <SelectCity />]} />
				<Route path="/info-services" element={[<Header />, <InfoServices />]} />
				<Route path="/calendar" element={[<Calendar />, <Navbar />]} />
				<Route path="/search" element={[<Search />, <Navbar />]} />
				<Route path="/camera" element={[<CameraPage />, <Navbar />]} />
				<Route path="/charts" element={[<Charts />, <Navbar />]} />
				<Route path="/profile" element={[<Profile />, <Navbar />]} />
				<Route path="/trash" element={[<Header />, <Trash />, <Navbar />]} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
