import { useEffect, useState } from "react";
import DrugItem from "../../components/DrugItem/DrugItem";
import SearchBar from "../../components/SearchBar/SearchBar";

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

  useEffect(() => {
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
  }, [term, drugs]);

  return (
    <>
      <SearchBar
        value={term}
        placeholder="Digite um medicamento"
        onChange={(event) => setTerm(event.target.value)}
      />
      <h2>Medicamentos cadastrados</h2>
      {filterByName.map((drug) => {
        return <DrugItem key={drug.id} value={drug} />;
      })}
    </>
  );
}
