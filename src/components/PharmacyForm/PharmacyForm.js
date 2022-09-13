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

  return (
    <>
      <form>
        <label>
          Razão Social
          <input
            required
            type="text"
            placeholder="DEVinPharmacy LTDA."
            value={corporateName}
            onChange={(event) => setCorporateName(event.target.value)}
          />
        </label>

        <label>
          CNPJ
          <input
            required
            type="number"
            placeholder="00.000.000/0000-00"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
          />
        </label>

        <label>
          Nome Fantasia
          <input
            required
            type="text"
            placeholder="Drogaria Catarina"
            value={tradeName}
            onChange={(event) => setTradeName(event.target.value)}
          />
        </label>

        <label>
          E-mail
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
            required
            type="number"
            placeholder="(047) 0000-0000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        <label>
          Celular
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
          CEP
          <input
            required
            type="number"
            placeholder="00.000-000"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </label>

        <label>
          Logradouro
          <input
            required
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>

        <label>
          Número
          <input
            required
            type="number"
            value={addressNumber}
            onChange={(event) => setAddressNumber(event.target.value)}
          />
        </label>

        <label>
          Bairro
          <input
            required
            type="text"
            value={district}
            onChange={(event) => setDistrict(event.target.value)}
          />
        </label>

        <label>
          Cidade
          <input
            required
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>

        <label>
          Estado
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
          Latitude
          <input
            required
            type="number"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </label>

        <label>
          Longitude
          <input
            required
            type="number"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </label>

        <button>Limpar</button>
        <button>Salvar</button>
      </form>
    </>
  );
}
