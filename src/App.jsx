import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Title from "./components/Title";

function App() {
  const [items, setitems] = useState([]);

  function handleAddItems(item) {
    setitems((items) => [...items, item]);
  }
  return (
    <>
      <Title />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </>
  );
}

export default App;
