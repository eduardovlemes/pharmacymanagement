import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import drugimage from "../../assets/drugimage.png";
import ListItem from "../../components/ListItem/ListItem";

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
      <Header />
      <div className="page-container">
        <div className="title-search-area">
          <SearchBar
            value={term}
            placeholder="Buscar por medicamento.."
            onChange={(event) => setTerm(event.target.value)}
          />
          <h2>Medicamentos cadastrados</h2>
        </div>
        <ul className="list-container">
          {filterByName.map((drug) => {
            return (
              <ListItem
                key={drug.id}
                value={drug}
                alt={drug.drugName}
                src={drugimage}
                name={drug.drugName}
                dosage={drug.dosage}
                price={drug.price}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
