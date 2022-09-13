import { useState } from "react";

export default function PharmacyForm() {
  const [corporateName, setCorporateName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [federativeUnit, setFederativeUnit] = useState("");
  const [addressCompl, setAddressCompl] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function HandleSubmit(event) {
    try {
      event.preventDefault();
      if (!corporateName) {
        alert("O preenchimento do campo Razão Social é obrigatório.");
        return;
      } else if (!cnpj) {
        alert("O preenchimento do campo CNPJ é obrigatório.");
        return;
      } else if (!tradeName) {
        alert("O preenchimento do campo Nome Fantasia é obrigatório.");
        return;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert(
          "O preenchimento do campo E-mail é obrigatório. Digite um E-mail válido."
        );
        return;
      } else if (!phone) {
        alert("O preenchimento do campo Telefone é obrigatório.");
        return;
      } else if (!cellphone) {
        alert("O preenchimento do campo Celular é obrigatório.");
        return;
      } else if (!cep) {
        alert("O preenchimento do campo CEP é obrigatório.");
        return;
      } else if (!street) {
        alert("O preenchimento do campo Rua é obrigatório.");
        return;
      } else if (!addressNumber) {
        alert("O preenchimento do campo Número é obrigatório.");
        return;
      } else if (!district) {
        alert("O preenchimento do campo Bairro é obrigatório.");
        return;
      } else if (!city) {
        alert("O preenchimento do campo Cidade é obrigatório.");
        return;
      } else if (!federativeUnit) {
        alert("O preenchimento do campo Estado é obrigatório.");
        return;
      } else if (!latitude) {
        alert("O preenchimento do campo Latitude é obrigatório.");
        return;
      } else if (!longitude) {
        alert("O preenchimento do campo Longitude é obrigatório.");
        return;
      }
      event.target.checkValidity();
      alert("Farmácia cadastrada com SUCESSO!");
    } catch (error) {
      alert("ERRO no cadastramento! Tente novamente.");
    }
  }

  function HandleAddresss() {
    try {
      fetch(`https://viacep.com.br/ws/${cep.replace(/[^0-9]/, "")}/json/`)
        .then((response) => response.json())
        .then((dataFromViaCep) => {
          setStreet(dataFromViaCep.logradouro);
          setDistrict(dataFromViaCep.bairro);
          setCity(dataFromViaCep.localidade);
          setFederativeUnit(dataFromViaCep.uf);
        });
    } catch (error) {
      alert("O CEP informado é inválido.");
    }
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label>
          Razão Social*
          <input
            required
            type="text"
            placeholder="DEVinPharmacy LTDA."
            value={corporateName}
            onChange={(event) => setCorporateName(event.target.value)}
          />
        </label>

        <label>
          CNPJ*
          <input
            required
            type="number"
            placeholder="00.000.000/0000-00"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
          />
        </label>

        <label>
          Nome Fantasia*
          <input
            required
            type="text"
            placeholder="Drogaria Catarina"
            value={tradeName}
            onChange={(event) => setTradeName(event.target.value)}
          />
        </label>

        <label>
          E-mail*
          <input
            required
            type="email"
            placeholder="exemplo@mail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Telefone*
          <input
            required
            type="number"
            placeholder="(047) 0000-0000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        <label>
          Celular*
          <input
            required
            type="number"
            placeholder="(047) 9 0000-0000"
            value={cellphone}
            onChange={(event) => setCellphone(event.target.value)}
          />
        </label>

        <hr></hr>

        <label>Endereço</label>
        <label>
          CEP*
          <input
            required
            type="number"
            placeholder="00.000-000"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            onBlur={HandleAddresss}
          />
        </label>

        <label>
          Logradouro*
          <input
            required
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>

        <label>
          Número*
          <input
            required
            type="number"
            value={addressNumber}
            onChange={(event) => setAddressNumber(event.target.value)}
          />
        </label>

        <label>
          Bairro*
          <input
            required
            type="text"
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
          />
        </label>

        <label>
          Cidade*
          <input
            required
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>

        <label>
          Estado*
          <input
            required
            type="text"
            value={federativeUnit}
            onChange={(event) => setFederativeUnit(event.target.value)}
          />
        </label>

        <label>
          Complemento
          <input
            type="text"
            value={addressCompl}
            onChange={(event) => setAddressCompl(event.target.value)}
          />
        </label>

        <label>
          Latitude*
          <input
            required
            type="number"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </label>

        <label>
          Longitude*
          <input
            required
            type="number"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </label>

        <button>Limpar</button>
        <button onSubmit={HandleSubmit}>Salvar</button>
      </form>
    </>
  );
}
