import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { TRAVEL_TYPE } from "../../Utils/constants";

const TravelDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Travel Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <SelectField
              label={"Travel Type"}
              selectName={"travelType"}
              value={formData.travelType}
              handleChange={handleChange}
              arr={TRAVEL_TYPE}
            />
            <InputField
              label={"Travel Name"}
              type="text"
              name={"travelName"}
              value={formData.travelName}
              handleChange={handleChange}
              placeholder="Enter Travel Name"
            />
          </div>
          <div className="flex gap-4">
            <TextAreaField
              label={"Travel Address"}
              name={"travelAddress"}
              value={formData.travelAddress}
              handleChange={handleChange}
              placeholder="Address..."
            />
            <InputField
              label={"Ticket Number"}
              type="text"
              name={"ticketNo"}
              value={formData.ticketNo}
              handleChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
          <div className="flex gap-4">
            <InputField
              label={"Boarding Point No"}
              type="text"
              name={"boardingPointNo"}
              value={formData.boardingPointNo}
              handleChange={handleChange}
              placeholder="Boarding Point No..."
            />
            <InputField
              label={"Customer Care No"}
              type="text"
              name={"customerCareNo"}
              value={formData.customerCareNo}
              handleChange={handleChange}
              placeholder="Customer Care No..."
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TravelDetails;
