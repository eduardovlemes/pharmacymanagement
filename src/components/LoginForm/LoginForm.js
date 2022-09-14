import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email) {
      alert("Insira um email.");
      return;
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      alert("Digite um e-mail válido.");
      return;
    }

    if (!password) {
      alert("Insira a senha.");
      return;
    } else if (password.length < 8) {
      alert("A senha deve conter no mínimo 8 caracteres.");
      return;
    } else if (!password.match(/^[a-zA-Z0-9-]/)) {
      alert("A senha deve conter apenas letras e/ou números.");
      return;
    }
    event.target.checkValidity();
    navigate("/mapa");
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail*
          <input
            required
            type="email"
            placeholder="exemplo@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Senha*
          <input
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
        <button>Cadastrar usuário</button>
      </form>
    </>
  );
}
