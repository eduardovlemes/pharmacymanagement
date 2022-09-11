import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h2>Login</h2>
      <form>
        <label>
          E-mail
          <input
            required
            type="email"
            placeholder="exemplo@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Senha
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
