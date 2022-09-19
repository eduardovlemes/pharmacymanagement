import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    if (window.confirm("Deseja sair?")) {
      navigate("/");
    }
  }

  return (
    <header>
      <nav>
        <img
          alt="logo"
          src={logo}
          width="200"
          onClick={() => navigate("/mapa")}
        ></img>
        <div>
          <button onClick={() => navigate("/mapa")}>Mapa</button>
          <button onClick={() => navigate("/novafarmacia")}>
            Nova Farmácia
          </button>
          <button onClick={() => navigate("/novomedicamento")}>
            Novo Medicamento
          </button>
          <button onClick={() => navigate("/listamedicamentos")}>
            Medicamentos Cadastrados
          </button>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </nav>
    </header>
  );
}
