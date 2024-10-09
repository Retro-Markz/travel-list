// eslint-disable-next-line react/prop-types
const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="flex justify-center w-[100vw]">
      <footer className="bg-blue-500 w-full flex font-semibold text-2xl justify-center items-center p-8 gap-4">
        {numItems === 0 ? (
          <em>Start Adding some items 🚀</em>
        ) : (
          <em>
            {percentage === 100
              ? "you got everything packed ✈️"
              : `🧳 You have ${numItems} items on your list, {numPacked} (
          ${numItems === 0 ? "0" : percentage}%) is already packed!`}
          </em>
        )}
      </footer>
    </div>
  );
};

export default Stats;
