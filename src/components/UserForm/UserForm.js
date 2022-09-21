import { useEffect, useState } from "react";

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
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("ERRO no cadastramento do usuário. Tente novamente.");
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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Url da foto*
          <input
            required
            type="text"
            placeholder="https://"
            value={userImage}
            onChange={(event) => setUserImage(event.target.value)}
          />
        </label>

        <label>
          Nome completo*
          <input
            required
            type="text"
            placeholder="nome e sobrenome"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>

        <label>
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

        <label>
          E-mail*
          <input
            required
            type="text"
            placeholder="exemplo@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Senha*
          <textarea
            type="password"
            placeholder="senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <button onClick={handleClean}>Limpar</button>
        <button onSubmit={handleSubmit}>Salvar</button>
      </form>
    </>
  );
}
