import { useState } from "react";

export default function DrugForm() {
  const [drug, setDrug] = useState("");
  const [lab, setLab] = useState("");
  const [dosage, setDosage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form>
        <label>
          Medicamento{" "}
          <input
            required
            type="text"
            placeholder="Dipirona"
            value={drug}
            onChange={(event) => setDrug(event.target.value)}
          />
        </label>

        <label>
          Laboratório{" "}
          <input
            required
            type="text"
            placeholder="Catarinense Pharma"
            value={lab}
            onChange={(event) => setLab(event.target.value)}
          />
        </label>

        <label>
          Dosagem{" "}
          <input
            required
            type="text"
            placeholder="100 mg"
            value={dosage}
            onChange={(event) => setDosage(event.target.value)}
          />
        </label>

        <label>
          Tipo{" "}
          <input
            required
            type="text"
            placeholder="anti-inflamatório"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </label>

        <label>
          Preço Unitário{" "}
          <input
            required
            type="number"
            placeholder="R$ 5,00"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>

        <label>
          Descrição{" "}
          <textarea
            required
            type="text"
            placeholder="Digite uma descrição do medicamento."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <button>Limpar</button>
        <button>Salvar</button>
      </form>
    </>
  );
}
