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
      <img
      className="header-logo"
        alt="logo"
        src={logo}
        width="200"
        onClick={() => navigate("/mapa")}
      />
      <nav>
        <button onClick={() => navigate("/mapa")}>MAPA</button>
        <button onClick={() => navigate("/novafarmacia")}>
          CADASTRAR FARMÁCIA
        </button>
        <button onClick={() => navigate("/novomedicamento")}>
          CADASTRAR MEDICAMENTO
        </button>
        <button onClick={() => navigate("/listamedicamentos")}>
          LISTA DE MEDICAMENTOS
        </button>
        <button className="logout-button" onClick={handleLogout}>SAIR</button>
      </nav>
    </header>
  );
}
