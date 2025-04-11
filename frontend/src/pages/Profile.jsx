import { useNavigate } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

function Profile() {
	const navigate = useNavigate();
	const trashTypes = ["food", "plastic", "paper", "metal", "glass", "paper"]; // temporary
	const [profileImage, setProfileImage] = useState("/img/user-page.svg");

	const userId = 1; // temporary
	const [userData, setUserData] = useState(null);
	const [cityName, setCityName] = useState("");

	const handleClick = () => {
		navigate("/edit-profile");
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfileImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		const fetchUserAndCity = async () => {
			try {
				const userResponse = await fetch(
					`http://localhost:5000/get-user/${userId}`
				);
				if (!userResponse.ok) {
					throw new Error("Errore nel recupero dei dati");
				}
				const user = await userResponse.json();
				setUserData(user);
				// if (data.profile_image_url) {
				// 	setProfileImage(data.profile_image_url);
				// }

				if (user.id_city) {
					const cityResponse = await fetch(
						`http://localhost:5000/get-city/${user.id_city}`
					);
					if (!cityResponse.ok) {
						throw new Error("Errore città");
					}
					const city = await cityResponse.json();
					setCityName(city.name);
				}
			} catch (error) {
				console.error("Errore durante la fetch:", error);
			}
		};

		fetchUserAndCity();
	}, []);

	return (
		<div className="user-container">
			<div className="user-img">
				<img src={profileImage} alt="user-propic" className="propic" />
				<label htmlFor="file-upload" className="edit-icon">
					<img src="/img/edit-user-page.svg" alt="edit" />
				</label>
				<input
					type="file"
					id="file-upload"
					style={{ display: "none" }}
					onChange={handleImageChange}
					accept="image/*"
				/>
			</div>
			<div className="user-info-container">
				<h3 className="name-surname">
					{userData ? `${userData.name} ${userData.surname}` : "Caricamento..."}
				</h3>
				<h4 className="city">{cityName || "Comune non selezionato!"}</h4>
				<button className="edit-btn" onClick={handleClick}>
					Modifica
				</button>
			</div>
			<div className="user-info-container">
				<h3 className="favourite-title">Rifiuti Frequenti</h3>
				<div className="favourites-container">
					{trashTypes.map((type, index) => (
						<div className="favourite-item" key={index}>
							<img
								src="/img/cartone-alimenti.png"
								alt={type}
								className="favourite-icon"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Profile;
