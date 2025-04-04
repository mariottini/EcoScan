function Profile() {
    return (
        <>
            <div className="user-profile">
                <img src="./public/img/user.svg" alt="User Avatar" className="user-avatar" />
                <img src="./public/img/edit.svg" alt="edit" className="edit-icon"/>
            </div>
            <div className="user-info">
                <div className="user-identity">
                    <h3 className="user-name">Nome</h3>
                    <h3 className="surname">Cognome</h3>
                </div>
                <h3 className="city">Comune</h3>
                <button className="modify-button">Modifica</button>
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
