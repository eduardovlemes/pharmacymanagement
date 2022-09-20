import { useState } from "react";

export default function PharmacyForm() {
  const [corporateName, setCorporateName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [street, setStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [federativeUnit, setFederativeUnit] = useState("");
  const [addressCompl, setAddressCompl] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  function handleSubmit(event) {
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
      } else if (!cellphone) {
        alert("O preenchimento do campo Celular é obrigatório.");
        return;
      } else if (!postalcode) {
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

    const sendDataToServer = fetch("http://localhost:3001/pharmacies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        corporateName: corporateName,
        cnpj: cnpj,
        tradeName: tradeName,
        email: email,
        phone: phone,
        cellphone: cellphone,
        postalcode: postalcode,
        street: street,
        addressNumber: addressNumber,
        district: district,
        city: city,
        federativeUnit: federativeUnit,
        addressCompl: addressCompl,
        latitude: latitude,
        longitude: longitude,
      }),
    });
    console.log(sendDataToServer);
  }

  async function handleAddress() {
    try {
      await fetch(
        `https://viacep.com.br/ws/${postalcode.replace(/[^0-9]/, "")}/json/`
      )
        .then((response) => response.json())
        .then((dataFromViaCep) => {
          setStreet(dataFromViaCep.logradouro);
          setDistrict(dataFromViaCep.bairro);
          setCity(dataFromViaCep.localidade);
          setFederativeUnit(dataFromViaCep.uf);
        })
        .then(
          await fetch(
            `https://nominatim.openstreetmap.org/search.php?q=${postalcode}+${street}+${district}&format=json`
          )
            .then((response) => response.json())
            .then((dataFromNominatim) => {
              setLatitude(dataFromNominatim[0].lat);
              setLongitude(dataFromNominatim[0].lon);
            })
        );
    } catch (error) {
      alert("Erro no servidor. CEP ou Latitude e Longitude não encontrado.");
    }
  }

  function handleClean() {
    if (window.confirm("Deseja limpar os campos?")) {
      setCorporateName("");
      setCnpj("");
      setTradeName("");
      setEmail("");
      setPhone("");
      setCellphone("");
      setPostalcode("");
      setStreet("");
      setAddressNumber("");
      setDistrict("");
      setCity("");
      setFederativeUnit("");
      setAddressCompl("");
      setLatitude("");
      setLongitude("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          Telefone
          <input
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
            value={postalcode}
            onChange={(event) => setPostalcode(event.target.value)}
            onBlur={handleAddress}
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

        <button onClick={handleClean}>Limpar</button>
        <button onSubmit={handleSubmit}>Salvar</button>
      </form>
    </>
  );
}
