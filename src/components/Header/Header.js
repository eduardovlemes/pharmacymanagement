import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    Swal.fire({
      title: "Deseja sair?",
      icon: "warning",
      width: "18rem",
      showCancelButton: true,
      confirmButtonColor: "#006a8f",
      cancelButtonColor: "#c3122f",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
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
        <button onClick={() => navigate("/novafarmacia")}>
          CADASTRAR FARMÁCIA
        </button>
        <button onClick={() => navigate("/mapa")}>MAPA</button>
        <button onClick={() => navigate("/novomedicamento")}>
          CADASTRAR MEDICAMENTO
        </button>
        <button onClick={() => navigate("/listamedicamentos")}>
          LISTA DE MEDICAMENTOS
        </button>
        <button onClick={() => navigate("/novousuario")}>
          CADASTRAR USUÁRIO
        </button>
        <button onClick={() => navigate("/listausuarios")}>
          LISTA DE USUÁRIOS
        </button>
        <button className="logout-button" onClick={handleLogout}>
          SAIR
        </button>
      </nav>
    </header>
  );
}
