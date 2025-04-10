import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
	const [profileImage, setProfileImage] = useState("/img/user-page.svg");
	const trashTypes = ["food", "plastic", "paper", "metal", "glass", "paper"];
	const navigate = useNavigate();

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

	return (
		<div className="user-container">
			<div className="user-img">
				<img src={profileImage} alt="user-propic" className="propic" />
				<label htmlFor="file-upload" className="edit-icon">
					<img src="./public/img/edit-user-page.svg" alt="edit" />
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
				<h3 className="name-surname">Nome Cognome</h3>
				<h4 className="city">Comune</h4>
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
