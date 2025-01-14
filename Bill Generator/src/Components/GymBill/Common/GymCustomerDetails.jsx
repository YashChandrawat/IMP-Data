import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const GymCustomerDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Customer Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Customer Name"}
            type="text"
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="Customer Name"
          />
          <TextAreaField
            label={"Customer Address"}
            name={"customerAddress"}
            value={formData.customerAddress}
            handleChange={handleChange}
            placeholder="Customer Address..."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default GymCustomerDetails;
