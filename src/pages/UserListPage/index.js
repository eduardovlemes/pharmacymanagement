import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListItem from "../../components/ListItem/ListItem";

export default function UserListPage() {
  const [users, setUsers] = useState([]);
  const [filterByName, setFilterByName] = useState(users);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function getUsers() {
      await fetch("http://localhost:3001/users")
        .then((response) => response.json())
        .then((dataFromUsersServer) => {
          setUsers(dataFromUsersServer);
        });
    }
    getUsers();
  }, []);

  useEffect(() => {
    // ao usar o filter não é necessário usar if, pois ele já faz uma comparação de true ou false com o idexOf
    setFilterByName(
      users.filter((item) => (
        item.userName
          .toLocaleLowerCase()
          .indexOf(term.toLocaleLowerCase()) !== -1
    )));
  }, [term, users]);

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="title-search-area">
          <SearchBar
            value={term}
            placeholder="Buscar por usuário..."
            onChange={(event) => setTerm(event.target.value)}
          />
          <h2>Usuários cadastrados</h2>
        </div>
        <ul className="list-container">
          {filterByName.map((user) => {
            return (
              <ListItem
                key={user.id}
                user={user}
                alt={user.userName}
                src={user.userImage}
                name={user.userName}
                occupation={user.occupation}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
