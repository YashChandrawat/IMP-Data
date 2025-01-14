import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const GymDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Gym Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Gym Name"}
            type="text"
            name={"gymName"}
            value={formData.gymName}
            handleChange={handleChange}
            placeholder="Gym Name"
          />
          <div className="flex justify-between gap-4">
            <TextAreaField
              label={"Gym Address"}
              name={"gymAddress"}
              value={formData.gymAddress}
              handleChange={handleChange}
              placeholder="Gym Address..."
            />
            <TextAreaField
              label={"Remark"}
              name={"remark"}
              value={formData.remark}
              handleChange={handleChange}
              placeholder="Remark..."
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default GymDetails;
