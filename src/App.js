import { useEffect, useState } from 'react';
import Content from './Components/Content/Content';
import "./index.css";

function App() {
  const API_URL = "https://api.punkapi.com/v2/beers";
  const [items, setItems] = useState([]);

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

  return (
    <div className="App">
      <Content items={items} />
    </div>
  );
}

export default App;
