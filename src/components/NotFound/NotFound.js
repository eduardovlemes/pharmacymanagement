import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>ERRO 404!</h1>
      <h3>Página não encontrada.</h3>
      <p>
        <Link to="/">Voltar ao início.</Link>
      </p>
    </>
  );
}
