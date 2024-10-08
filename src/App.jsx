import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Title from "./components/Title";

function App() {
  // =========== Functions
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure  you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  // ========== app
  return (
    <>
      <Title />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        ontoggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
