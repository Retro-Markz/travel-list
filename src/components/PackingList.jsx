/* eslint-disable react/prop-types */
import Item from "./Item";

// eslint-disable-next-line react/prop-types
const PackingList = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-950 w-screen  h-[50vh] md:h-[70vh] gap-12">
      <ul className="list *:text-amber-200 *:text-2xl *:font-semibold gap-4">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>

      <button className="primary-cta">Clear List</button>
    </div>
  );
};

export default PackingList;
