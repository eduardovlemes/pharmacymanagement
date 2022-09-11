export default function LoginForm() {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label>
          E-mail
          <input required type="email" placeholder="exemplo@mail.com" />
        </label>

        <label>
          Senha
          <input required type="password" />
        </label>
        <button type="submit">Entrar</button>
        <button>Cadastrar usuário</button>
      </form>
    </>
  );
}
