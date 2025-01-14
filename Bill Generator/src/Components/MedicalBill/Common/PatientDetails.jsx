import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { INSURANCE, ROOM } from "../../Utils/constants";

const PatientDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Patient Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-6">
            <InputField
              label={"Patient Name"}
              type={"text"}
              name={"patientName"}
              value={formData.patientName}
              handleChange={handleChange}
            />
            <InputField
              label={"Patient Issue"}
              type={"text"}
              name={"patientIssue"}
              value={formData.patientIssue}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-6">
            <InputField
              label={"Guardian Name"}
              type={"text"}
              name={"guardianName"}
              value={formData.guardianName}
              handleChange={handleChange}
            />
            <InputField
              label={"Mobile No"}
              type={"number"}
              name={"mobileNo"}
              value={formData.mobileNo}
              handleChange={handleChange}
            />
            <InputField
              label={"Age"}
              type={"number"}
              name={"age"}
              value={formData.age}
              handleChange={handleChange}
            />
          </div>
          <div>
            <InputField
              label={"Patient Address"}
              type={"text"}
              name={"patientAddress"}
              value={formData.patientAddress}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-6">
            <SelectField
              label={"Room"}
              selectName={"room"}
              value={formData.room}
              handleChange={handleChange}
              arr={ROOM}
            />
            <SelectField
              label={"Insurance"}
              selectName={"insurance"}
              value={formData.insurance}
              handleChange={handleChange}
              arr={INSURANCE}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PatientDetails;
