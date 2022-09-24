import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-container not-found">
      <h1>ERRO 404</h1>
      <h3>Página não encontrada</h3>
      <button onClick={() => navigate("/")}>Voltar para página inicial</button>
    </div>
  );
}
