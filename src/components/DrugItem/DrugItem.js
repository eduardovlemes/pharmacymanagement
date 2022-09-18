import { useEffect, useState } from "react";

export default function DrugItem() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    async function getDrugs() {
      await fetch("http://localhost:3001/drugs")
        .then((response) => response.json())
        .then((dataFromDrugsServer) => {
          setDrugs(dataFromDrugsServer);
        });
    }
    getDrugs();
  }, []);

  return (
    <>
      <h2>Medicamentos cadastrados</h2>
      <ul>
        {drugs.map((item) => (
          <li>
            <img alt="drug" src={item.imgDrug} />
            <div>
              <span>{item.drugName}</span>
              <span>{item.dosage}</span>
              <p>R$ {item.price}</p>
              <p>{item.lab}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
