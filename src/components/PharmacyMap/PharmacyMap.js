import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function PharmacyMap() {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    async function getPharmacies() {
      await fetch("http://localhost:3001/pharmacies")
        .then((response) => response.json())
        .then((dataFromPharmaciesServer) => {
          setPharmacies(dataFromPharmaciesServer);
        });
    }
    getPharmacies();
  }, []);

  return (
    <>
      <h1>Farmácias cadastradas</h1>
      <MapContainer
        center={[-13.747492, -53.470339]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pharmacies.map((pharmacy) => (
          <Marker position={[pharmacy.latitude, pharmacy.longitude]}>
            <Popup>
              <>
                <p>
                  <strong>Razão Social: </strong>
                  {pharmacy.corporateName}
                </p>
                <p>
                  <strong>CNPJ: </strong>
                  {pharmacy.cnpj}
                </p>
                <p>
                  <strong>Nome Fantasia: </strong>
                  {pharmacy.tradeName}
                </p>
                <p>
                  <strong>Email: </strong>
                  {pharmacy.email}
                </p>

                {pharmacy.phone !== "" ? (
                  <p>
                    <strong>Telefone: </strong>
                    {pharmacy.phone}
                  </p>
                ) : null}

                <p>
                  <strong>Celular: </strong>
                  {pharmacy.cellphone}
                </p>
                <span>CEP: {pharmacy.postalcode}</span>
                <span>Rua: {pharmacy.street}</span>
                <span>Número:{pharmacy.addressNumber}</span>
                <span>Bairro: {pharmacy.district}</span>
                <span>Cidade: {pharmacy.city}</span>
                <span>UF: {pharmacy.federativeUnit}</span>

                {pharmacy.addressCompl !== "" ? (
                  <p>
                    <strong>Complemento: </strong>
                    {pharmacy.addressCompl}
                  </p>
                ) : null}
              </>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
