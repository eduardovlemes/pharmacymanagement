import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function UserForm() {
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationOption, setOccupationOption] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (!userName) {
        alert("O preenchimento do campo Nome é obrigatório.");
        return;
      } else if (!occupation) {
        alert("O preenchimento do campo Profissão/Cargo é obrigatório.");
        return;
      } else if (!email) {
        alert("O preenchimento do campo E-mail é obrigatório.");
        return;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert("Digite um e-mail válido.");
        return;
      } else if (!password) {
        alert("O preenchimento do campo Senha é obrigatório.");
        return;
      } else if (password.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres.");
        return;
      } else if (!password.match(/^[a-zA-Z0-9-]/)) {
        alert("A senha deve conter apenas letras e/ou números.");
        return;
      }
      event.target.checkValidity();

      Swal.fire({
        title: "Usuário cadastrado com sucesso!",
        icon: "success",
        width: "18rem",
        confirmButtonColor: "#006a8f",
      }).then((result) => {
        if (result.isConfirmed) {
          setUserImage("");
          setUserName("");
          setOccupation("");
          setEmail("");
          setPassword("");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Erro no cadastro do usuário. Tente novamente.",
        width: "18rem",
      });
    }

    const sendDataToServer = fetch("http://localhost:3001/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        userImage: userImage,
        userName: userName,
        occupation: occupation,
        email: email,
        password: password,
      }),
    });
    console.log(sendDataToServer);
  }

  useEffect(() => {
    async function getOccupation() {
      await fetch("http://localhost:3001/userOccupation")
        .then((response) => response.json())
        .then((dataFromUserOccupationServer) => {
          setOccupationOption(dataFromUserOccupationServer);
        });
    }
    getOccupation();
  }, []);

  function handleClean() {
    if (window.confirm("Deseja limpar os campos?")) {
      setUserImage("");
      setUserName("");
      setOccupation("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="page-container">
      <h2>Cadastrar usuário</h2>
      <div className="user-photo">
        {userImage && (
          <img className="user-photo" src={userImage} alt="user" width={200} />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          URL da foto*
          <input
            required
            type="text"
            placeholder="https://"
            value={userImage}
            onChange={(event) => setUserImage(event.target.value)}
          />
        </label>
        <div className="form-line">
          <label className="input-49">
            Nome completo*
            <input
              required
              type="text"
              placeholder="Nome e Sobrenome"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>

          <label className="input-49">
            Profissão/Cargo*
            <select
              required
              value={occupation}
              onChange={(event) => setOccupation(event.target.value)}
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {occupationOption.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-line">
          <label className="input-49">
            E-mail*
            <input
              required
              type="text"
              placeholder="exemplo@mail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="input-49">
            Senha*
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>

        <div className="buttons-form">
          <button className="button-clean" onClick={handleClean}>
            Limpar
          </button>
          <button className="button-save" onSubmit={handleSubmit}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
