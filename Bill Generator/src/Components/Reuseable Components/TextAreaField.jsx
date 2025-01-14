const TextAreaField = ({
  label,
  value = "",
  name,
  handleChange,
  placeholder = "",
  rows = 4, // Default number of rows
}) => {
  return (
    <div className="w-[100%]">
      <label htmlFor={name} className="block text-gray-500 font-medium mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    </div>
  );
};

export default TextAreaField;
