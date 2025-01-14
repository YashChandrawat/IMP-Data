import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { UNIT } from "../../Utils/constants";

const VehicleDetails = ({ formData, handleChange, template2 }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Vehicle Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <InputField
              label={"Vehicle Number"}
              type="text"
              name={"vehicleNo"}
              value={formData.vehicleNo}
              handleChange={handleChange}
              placeholder="Vehicle Number"
            />
            <InputField
              label={"Vehicle Modal"}
              type="text"
              name={"vehicleModal"}
              value={formData.vehicleModal}
              handleChange={handleChange}
              placeholder="HatchBack, Sedan..."
            />
            <InputField
              label={"Total Distance"}
              type="text"
              name={"totalDistance"}
              value={formData.totalDistance}
              handleChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-[42%]">
              <SelectField
                label={"Unit"}
                selectName={"unit"}
                value={formData.unit}
                handleChange={handleChange}
                arr={UNIT}
              />
            </div>
            {template2 && (
              <div className="flex gap-4">
                <InputField
                  label={"Invoice No"}
                  type="text"
                  name={"invoiceNo"}
                  value={formData.invoiceNo}
                  handleChange={handleChange}
                  placeholder="557642"
                />
                <InputField
                  label={"Mobile"}
                  type="text"
                  name={"mobileNo"}
                  value={formData.mobileNo}
                  handleChange={handleChange}
                  placeholder="Mobile"
                />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VehicleDetails;
