const InputField = ({
  label,
  type = "text", // Default type is 'text'
  value = "",
  name,
  handleChange,
  placeholder = "",
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-gray-500 font-medium mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 no-arrow"
      />
    </div>
  );
};

export default InputField;
