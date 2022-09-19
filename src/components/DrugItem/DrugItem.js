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
            <p>{value.lab}</p>
          </div>
        </li>
      </ul>
    </>
  );
}
