/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Item = ({ item, onDeleteItem, ontoggleItem }) => {
  return (
    <li className="text-center flex gap-2">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => ontoggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
