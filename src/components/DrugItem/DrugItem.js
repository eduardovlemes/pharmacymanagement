import DrugDetail from "../DrugDetail/DrugDetail";

export default function DrugItem({ value }) {
  return (
    <>
      <ul>
        <li>
          <img
            alt={"Medicamento" + value.drugName}
            src={value.imgDrug}
            width={100}
          />
          <div>
            <span>{value.drugName}</span>
            <span>{value.dosage}</span>
            <p>R$ {value.price}</p>
            <DrugDetail value={value} />
          </div>
        </li>
      </ul>
    </>
  );
}
