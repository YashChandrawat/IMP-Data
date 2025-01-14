
const SelectField = ({ label, selectName, value, handleChange, arr = [] }) => {
  return (
    <div className="w-[100%]">
      <label
        htmlFor={selectName}
        className="block text-gray-500 font-medium mb-1"
      >
        {label}
      </label>
      <select
        id={selectName}
        name={selectName}
        value={value}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {arr.length > 0 ? (
          arr.map((type) => (
            <option value={type.value} key={type.value}>
              {type.placeholder}
            </option>
          ))
        ) : (
          <option value="">No options available</option>
        )}
      </select>
    </div>
  );
};

export default SelectField;
