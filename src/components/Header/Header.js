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
          <button onClick={handleLogout}>Sair</button>
        </div>
      </nav>
    </header>
  );
}
