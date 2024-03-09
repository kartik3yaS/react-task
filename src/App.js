import { useEffect, useState } from 'react';
import Content from './Components/Content/Content';
import Filter from './Components/Filter/Filter';
import "./index.css";

function App() {
  const API_URL = "https://api.punkapi.com/v2/beers";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();

    }, [])

    useEffect(() => {
      const filteredResults = items.filter((item) =>
        ((item.description).toLowerCase()).includes(search.toLowerCase())
        || ((item.name).toLowerCase()).includes(search.toLowerCase())
        || ((item.tagline).toLowerCase()).includes(search.toLowerCase()));

        setSearch(filteredResults.reverse());
  
    }, [search, setSearch]);

  return (
    <div className="App">
      <Filter search={search} setSearch={setSearch} />
      <Content items={items} />
    </div>
  );
}

export default App;
