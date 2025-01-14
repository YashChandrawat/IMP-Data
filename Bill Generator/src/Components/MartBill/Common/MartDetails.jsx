import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const MartDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Mart Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Mart Name"}
            type="text"
            name={"martName"}
            value={formData.martName}
            handleChange={handleChange}
            placeholder="Mart Name"
          />
          <TextAreaField
            label={"Mart Address"}
            name={"martAddress"}
            value={formData.martAddress}
            handleChange={handleChange}
            placeholder="Mart Address..."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default MartDetails;
