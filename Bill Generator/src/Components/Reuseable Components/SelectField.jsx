import { ArrowDown2 } from "iconsax-react";

const SelectField = ({ label, selectName, value, handleChange, arr = [] }) => {
  return (
    <div className="w-[100%] relative">
      <label
        htmlFor={selectName}
        className="block text-gray-500 font-medium mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={selectName}
          name={selectName}
          value={value}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none 
            bg-white pr-10" // Adds padding for arrow
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
        {/* Custom Arrow */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ArrowDown2 size="22" color="black" variant="Bold" />
        </span>
      </div>
    </div>
  );
};

export default SelectField;
