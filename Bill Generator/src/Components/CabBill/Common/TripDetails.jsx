import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const TripDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Trip Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Customer Name"}
            type="text"
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="Customer Name"
          />
          <InputField
            label={"Driver Name"}
            type="text"
            name={"driverName"}
            value={formData.driverName}
            handleChange={handleChange}
            placeholder="Driver Name"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default TripDetails;
