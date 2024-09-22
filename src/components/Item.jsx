// eslint-disable-next-line react/prop-types
const Item = ({ item }) => {
  return (
    <li className="text-center flex gap-4">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
