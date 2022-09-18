import { useEffect, useState } from "react";
import DrugItem from "../../components/DrugItem/DrugItem";

export default function DrugListPage() {
  const [drugs, setDrugs] = useState([]);
  const [filterByName, setFilterByName] = useState(drugs);
  const [term, setTerm] = useState("");

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

  console.log(drugs);

  /* useEffect(() => {
    setFilterByName(
      drugs.filter((item) => {
        if (
          item.drugName
            .toLocaleLowerCase()
            .indexOf(term.toLocaleLowerCase()) !== -1
        ) {
          return item;
        }
      })
    );
  }, [term]); */

  return (
    <>
      {/* <input
        type="text"
        value={term}
        placeholder="Pesquisar medicamento"
        onChange={(event) => setTerm(event.target.value)}
      />
      {filterByName.map((drug) => {
        return <DrugItem key={drug.id} value={drug} />;
      })} */}
      <DrugItem />
    </>
  );
}
