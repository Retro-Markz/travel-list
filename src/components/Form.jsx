import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="w-[100vw]">
      <form
        className="flex p-8 items-center justify-center flex-col md:flex-row bg-amber-600 gap-2"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-semibold ">
          What do you need for your trip?
        </h3>
        <select
          className="input px-4 py-2 text-lg"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="input"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="secondary-cta">Add</button>
      </form>
    </div>
  );
};

export default Form;
