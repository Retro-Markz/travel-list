const PackingList = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-950 w-screen h-[50vh] gap-12">
      <ul className="list *:text-amber-200 *:text-2xl *:font-semibold gap-4">
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>

      <button className="primary-cta">Clear List</button>
    </div>
  );
};

export default PackingList;
