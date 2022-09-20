import DrugDetail from "../DrugDetail/DrugDetail";
import drugimage from "../../assets/drugimage.png";

export default function DrugItem({ value }) {
  return (
    <>
      <ul>
        <li>
          <img
            alt={"Medicamento" + value.drugName}
            src={drugimage}
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
