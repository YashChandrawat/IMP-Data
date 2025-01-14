import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";
import TextAreaField from "../../Reuseable Components/TextAreaField";

const CustomerDetailsGeneralBill = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Customer Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-6">
            <InputField
              label={"Customer Name"}
              type="text"
              name={"customerName"}
              value={formData.customerName}
              handleChange={handleChange}
              placeholder="Enter Customer Name"
            />
            <InputField
              label={"Customer Location"}
              type="text"
              name={"customerLocation"}
              value={formData.customerLocation}
              handleChange={handleChange}
              placeholder="Enter Customer Location"
            />
          </div>
          <div>
            <TextAreaField
              label={"Enter Shipping Address"}
              name={"customerShippingAddress"}
              value={formData.customerShippingAddress}
              handleChange={handleChange}
              placeholder="Enter Shipping Address"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CustomerDetailsGeneralBill;
