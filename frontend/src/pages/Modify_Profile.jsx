import { useState } from 'react';

function Modify_Profile() {
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [comune, setComune] = useState('');

  // Gestione cambiamento immagine
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Funzione per svuotare i form
  const handleSubmit = () => {
    // Azzera i valori dei form
    setNome('');
    setCognome('');
    setComune('');

    // Puoi aggiungere la logica per inviare i dati se necessario

    console.log('Dati inviati:', { nome, cognome, comune });
  };

  return (
    <>
      <div className="user-profile">
        <img
          src={image || "./public/img/user-page.svg"}
          alt="User Avatar"
          className="user-avatar"
        />

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

      <div className="form-container">
        <div className="name-surname-container">
          <div className="form-name">
            <h3>Nome</h3>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)} // Gestione cambiamento
            />
          </div>
          <div className="form-surname">
            <h3>Cognome</h3>
            <input
              type="text"
              id="cognome"
              name="cognome"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)} // Gestione cambiamento
            />
          </div>
        </div>

        <div className="form-city">
          <h3>Comune</h3>
          <input
            type="text"
            id="comune"
            name="comune"
            value={comune}
            onChange={(e) => setComune(e.target.value)} // Gestione cambiamento
          />
        </div>

        <input
          type="button"
          value="Conferma"
          className="modify-button confirm-button"
          onClick={handleSubmit} // Azzera i campi al clic
        />
      </div>
    </>
  );
}

export default Modify_Profile;
