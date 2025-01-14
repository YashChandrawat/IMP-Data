const Wrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-[2rem] border-2 border-gray-200 space-y-4">
      {children}
    </div>
  );
};

export default Wrapper;
