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
    <div className="page-container">
      <h2>Farmácias cadastradas</h2>
      <MapContainer
        className="map-container"
        center={[-13.747492, -53.470339]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pharmacies.map((pharmacy) => (
          <Marker position={[pharmacy.latitude, pharmacy.longitude]} key={pharmacy.id}>
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

                <p>
                  <strong>Endereço: </strong>
                  {pharmacy.street}, nº {pharmacy.addressNumber} -{" "}
                  {pharmacy.district} - {pharmacy.city}/
                  {pharmacy.federativeUnit} - {pharmacy.postalcode}
                </p>

                {pharmacy.addressCompl !== "" ? (
                  <p>
                    <strong>Compl.: </strong>
                    {pharmacy.addressCompl}
                  </p>
                ) : null}
              </>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
