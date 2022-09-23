import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginAuth } from "../LoginAuthContext/LoginAuthContext";
import logo from "../../assets/logo1.png";


export default function LoginForm() {
  const { changeTo } = useLoginAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      alert("O campo E-mail é obrigatório.");
      return
    } else if (!password) {
      alert("O campo Senha é obrigatório.");
      return
    } else if (password.length < 8) {
      alert("A senha deve conter no mínimo 8 caracteres.");
      return
    } 
    changeTo(true)
    navigate("/mapa");
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <img className="login-logo" src={logo} alt="pharmacy"></img>
      <div className="login-fields">
        <label>
          E-mail
          <input
            className="login-input"
            type="email"
            placeholder="exemplo@mail.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Senha
          <input
            className="login-input"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <a href="/novousuario">Cadastrar usuário</a>
        <div className="button-container">
          <button className="login-button" type="submit">
            Entrar
          </button>
        </div>
      </div>
    </form>
  );
}
