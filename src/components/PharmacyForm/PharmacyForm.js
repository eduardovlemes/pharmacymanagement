import { useState } from "react";
import Swal from "sweetalert2";

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

      Swal.fire({
        title: "Farmácia cadastrada com sucesso!",
        icon: "success",
        width: "18rem",
        confirmButtonColor: "#006a8f",
      }).then((result) => {
        if (result.isConfirmed) {
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
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Erro no cadastro da farmácia. Tente novamente.",
        width: "18rem",
      });
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
      Swal.fire({
        icon: "error",
        text: "Ocorreu um erro. Tente novamente mais tarde.",
        width: "18rem",
      });
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
    <div className="page-container">
      <h2>Cadastrar farmácia</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-line">
          <label className="input-32">
            Razão Social*
            <input
              required
              type="text"
              placeholder="DEVinPharmacy LTDA."
              value={corporateName}
              onChange={(event) => setCorporateName(event.target.value)}
            />
          </label>

          <label className="input-32">
            CNPJ*
            <input
              required
              type="number"
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
          </label>

          <label className="input-32">
            Nome Fantasia*
            <input
              required
              type="text"
              placeholder="Drogaria Pharmanagement"
              value={tradeName}
              onChange={(event) => setTradeName(event.target.value)}
            />
          </label>
        </div>
        <div className="form-line">
          <label className="input-32">
            E-mail*
            <input
              required
              type="email"
              placeholder="exemplo@mail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="input-32">
            Telefone
            <input
              type="number"
              placeholder="(047) 0000-0000"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>

          <label className="input-32">
            Celular*
            <input
              required
              type="number"
              placeholder="(047) 9 0000-0000"
              value={cellphone}
              onChange={(event) => setCellphone(event.target.value)}
            />
          </label>
        </div>

        <hr></hr>

        <div className="form-line">
          <label className="input-15">
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

          <label className="input-49">
            Logradouro*
            <input
              required
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />
          </label>

          <label className="input-5">
            Número*
            <input
              required
              type="number"
              value={addressNumber}
              onChange={(event) => setAddressNumber(event.target.value)}
            />
          </label>

          <label className="input-15">
            Complemento
            <input
              type="text"
              value={addressCompl}
              onChange={(event) => setAddressCompl(event.target.value)}
            />
          </label>
        </div>

        <div className="form-line">
          <label className="input-25">
            Bairro*
            <input
              required
              type="text"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
            />
          </label>

          <label className="input-25">
            Cidade*
            <input
              required
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>

          <label className="input-5">
            Estado*
            <input
              required
              type="text"
              value={federativeUnit}
              onChange={(event) => setFederativeUnit(event.target.value)}
            />
          </label>

          <label className="input-5">
            Latitude*
            <input
              required
              type="number"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </label>

          <label className="input-5">
            Longitude*
            <input
              required
              type="number"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
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
