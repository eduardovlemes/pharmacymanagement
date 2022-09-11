export default function LoginForm() {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label>
          E-mail <input required />
        </label>

        <label>
          Senha <input required />
        </label>

        <button>Acessar</button>
        <button>Cadastrar</button>
      </form>
    </>
  );
}
