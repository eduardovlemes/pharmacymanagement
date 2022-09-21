import DrugDetail from "../DrugDetail/DrugDetail";

export default function ListItem({
  value,
  alt,
  src,
  name,
  occupation,
  dosage,
  price,
}) {
  return (
    <ul>
      <li>
        <img alt={alt} src={src} width={200} />
        <div>
          <p>{name}</p>
          <p>{occupation}</p>
          {dosage ? <p>{dosage}</p> : null}
          {price ? <p>R$ {price}</p> : null}
          {value ? <DrugDetail value={value} /> : null}
        </div>
      </li>
    </ul>
  );
}
