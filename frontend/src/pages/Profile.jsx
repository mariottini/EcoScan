import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();


    const [profileImage, setProfileImage] = useState("./public/img/user-page.svg");

   
    const handleClick = () => {
        navigate("/Modify_Profile");
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
        <>
            <div className="user-profile">
                <img src={profileImage} alt="User Avatar" className="user-avatar" />
                <label htmlFor="file-upload" className="edit-icon">
                    <img src="./public/img/edit-user-page.svg" alt="edit" />
                </label>
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                    accept="image/*"
                />
            </div>
            <div className="user-info">
                <div className="user-identity">
                    <h3 className="user-name">Nome</h3>
                    <h3 className="surname">Cognome</h3>
                </div>
                <h3 className="city">Comune</h3>
                <button className="modify-button" onClick={handleClick}>Modifica</button>
            </div>
            <div className="favourite-trash">
                <h3 className="favourite-title">Rifiuti Frequenti</h3>
                <div className="favourite-list">
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="food" className="favourite-icon"/>
                    </div>
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="plastic" className="favourite-icon"/>
                    </div>
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="paper" className="favourite-icon"/>
                    </div>
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="metal" className="favourite-icon"/>
                    </div>
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="glass" className="favourite-icon"/>
                    </div>
                    <div className="favourite-item">
                        <img src="./public/img/trash.svg" alt="paper" className="favourite-icon"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
