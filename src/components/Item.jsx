/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Item = ({ item, onDeleteItem }) => {
  return (
    <li className="text-center flex gap-4">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
