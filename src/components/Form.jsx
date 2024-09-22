const Form = () => {
  return (
    <div className="flex p-8 items-center justify-center flex-col md:flex-row bg-amber-600 gap-2">
      <p className="text-lg font-semibold">smething here</p>
      <input className="input" type="text" />
      <input className="input" type="text" placeholder="Item" />
      <button className="primary-cta">Add</button>
    </div>
  );
};

export default Form;
