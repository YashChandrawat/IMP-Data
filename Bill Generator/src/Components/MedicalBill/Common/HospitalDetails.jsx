import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const HospitalDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Hospital Details"} />
        <div className="px-6 pb-6">
          <div className="flex flex-col gap-2">
            <InputField
              label={"Hospital Name"}
              type={"text"}
              name={"hospitalName"}
              value={formData.hospitalName}
              handleChange={handleChange}
            />
            <InputField
              label={"Hospital Address"}
              type={"text"}
              name={"hospitalAddress"}
              value={formData.hospitalAddress}
              handleChange={handleChange}
            />
            <InputField
              label={"Hospital Details"}
              type={"text"}
              name={"hospitalDetails"}
              value={formData.hospitalDetails}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-6 mt-2">
            <InputField
              label={"Doctor Name"}
              type={"text"}
              name={"doctorName"}
              value={formData.doctorName}
              handleChange={handleChange}
            />
            <InputField
              label={"Designation"}
              type={"text"}
              name={"designation"}
              value={formData.designation}
              handleChange={handleChange}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HospitalDetails;
