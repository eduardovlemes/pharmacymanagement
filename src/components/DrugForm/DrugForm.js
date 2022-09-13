import { useState } from "react";

export default function DrugForm() {
  const [drug, setDrug] = useState("");
  const [lab, setLab] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function HandleSubmit(event) {
    try {
      event.preventDefault();
      if (!drug) {
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
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label>
          Medicamento*
          <input
            required
            type="text"
            placeholder="Dipirona"
            value={drug}
            onChange={(event) => setDrug(event.target.value)}
          />
        </label>

        <label>
          Laboratório*
          <input
            required
            type="text"
            placeholder="Catarina Pharma"
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
            type="text"
            placeholder="anti-inflamatório"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="" selected disabled>
              Selecione
            </option>
            <option value="controlled" selected>
              Medicamento controlado
            </option>
            <option value="common" selected>
              Medicamento comum
            </option>
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
            placeholder="Digite uma descrição do medicamento."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <button>Limpar</button>
        <button onSubmit={HandleSubmit}>Salvar</button>
      </form>
    </>
  );
}
