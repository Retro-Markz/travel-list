const Form = () => {
  return (
    <div className="flex p-8 items-center justify-center flex-col md:flex-row bg-amber-600 gap-2">
      <h3 className="text-lg font-semibold">What do you need for your trip?</h3>
      <input className="input" type="text" />
      <input className="input" type="text" placeholder="Item" />
      <button className="secondary-cta">Add</button>
    </div>
  );
};

export default Form;
