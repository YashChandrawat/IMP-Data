const CollapseWrapper = ({ children, isVisible }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isVisible ? "max-h-[1000px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
      }`}
    >
      {children}
    </div>
  );
};

export default CollapseWrapper;
