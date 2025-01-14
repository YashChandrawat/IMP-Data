import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { GENDER } from "../../Utils/constants";

const GuestDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Guest Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <InputField
              label={"Guest Name"}
              type="text"
              name={"guestName"}
              value={formData.guestName}
              handleChange={handleChange}
              placeholder="Enter Guest Name"
            />
            <SelectField
              label={"Gender"}
              selectName={"gender"}
              value={formData.gender}
              handleChange={handleChange}
              arr={GENDER}
            />
            <InputField
              label={"Age"}
              type="text"
              name={"age"}
              value={formData.age}
              handleChange={handleChange}
              placeholder="Age"
            />
          </div>
          <TextAreaField
            label={"Guest Address"}
            name={"guestAddress"}
            value={formData.guestAddress}
            handleChange={handleChange}
            placeholder="Guest Address"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default GuestDetails;
