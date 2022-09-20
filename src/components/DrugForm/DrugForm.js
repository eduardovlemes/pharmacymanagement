import { useEffect, useState } from "react";

export default function DrugForm() {
  const [drugName, setDrugName] = useState("");
  const [lab, setLab] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("");
  const [drugType, setDrugType] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (!drugName) {
        alert("O preenchimento do campo Medicamento é obrigatório.");
        return;
      } else if (!lab) {
        alert("O preenchimento do campo Laboratório é obrigatório.");
        return;
      } else if (!dosage) {
        alert("O preenchimento do campo Dosagem é obrigatório.");
        return;
      } else if (!type) {
        alert("O preenchimento do campo Tipo é obrigatório.");
        return;
      } else if (!price) {
        alert("O preenchimento do campo Preço é obrigatório.");
        return;
      }
      event.target.checkValidity();
      alert("Medicamento cadastrado com sucesso!");
    } catch (error) {
      alert("ERRO no cadastramento do medicamento. Tente novamente.");
    }

    const sendDataToServer = fetch("http://localhost:3001/drugs", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        drugName: drugName,
        lab: lab,
        dosage: dosage,
        type: type,
        price: price,
        description: description,
      }),
    });
    console.log(sendDataToServer);
  }

  useEffect(() => {
    async function getType() {
      await fetch("http://localhost:3001/drugType")
        .then((response) => response.json())
        .then((dataFromDrugsTypeServer) => {
          setDrugType(dataFromDrugsTypeServer);
        });
    }
    getType();
  }, []);

  function handleClean() {
    if (window.confirm("Deseja limpar os campos?")) {
      setDrugName("");
      setLab("");
      setDosage("");
      setType("");
      setPrice("");
      setDescription("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Medicamento*
          <input
            required
            type="text"
            placeholder="Vitamina C"
            value={drugName}
            onChange={(event) => setDrugName(event.target.value)}
          />
        </label>

        <label>
          Laboratório*
          <input
            required
            type="text"
            placeholder="Catarinense Pharma"
            value={lab}
            onChange={(event) => setLab(event.target.value)}
          />
        </label>

        <label>
          Dosagem*
          <input
            required
            type="text"
            placeholder="100 mg"
            value={dosage}
            onChange={(event) => setDosage(event.target.value)}
          />
        </label>

        <label>
          Tipo*
          <select
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            {drugType.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          Preço Unitário*
          <input
            required
            type="number"
            placeholder="R$ 9,90"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>

        <label>
          Descrição*
          <textarea
            type="text"
            placeholder="Digite uma descrição sobre o medicamento."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <button onClick={handleClean}>Limpar</button>
        <button onSubmit={handleSubmit}>Salvar</button>
      </form>
    </>
  );
}
