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
    <li className="list-item">
      <img className="user-photo" alt={alt} src={src} width={200} />
      <div>
        <h3>{name}</h3>
        <p>{occupation}</p>
        <p>{dosage}</p>
        {price ? (
          <p>
            <i>R$ {price}</i>
          </p>
        ) : null}
        {value ? <DrugDetail value={value} /> : null}
      </div>
    </li>
  );
}
