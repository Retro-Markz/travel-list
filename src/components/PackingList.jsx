/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

// eslint-disable-next-line react/prop-types
const PackingList = ({ items, onDeleteItem, ontoggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="flex flex-col justify-center items-center bg-amber-950 w-screen  h-[max-content] md:h-[70vh] gap-8">
      <ul className="list *:text-amber-200 *:text-2xl *:font-semibold gap-24 flex justify-evenly  w-[80vw] flex-wrap items-start">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            ontoggleItem={ontoggleItem}
          />
        ))}
      </ul>

      <div className="actions flex gap-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="flex py-2 px-8 rounded-full bg-amber-300 border-none items-center justify-center font-bold  *:font-bold "
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="primary-cta">Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
