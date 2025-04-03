function Login() {
  return (

    <div>

      <div>
        <img src="../public/img/Logo.svg"></img>
      </div>

      <h1>Ciao!</h1>
      <h2>Accedi al tuo account.</h2>

      <div className="card_login">
        <form>
          <label for="e-mail">E-mail</label>
          <input type="email" id="e-mail" name="e-mail"/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"/>

          <input type="submit" value="Accedi" className="button_style"></input>
        </form>
      </div>

    </div>

  )
}

export default Login;