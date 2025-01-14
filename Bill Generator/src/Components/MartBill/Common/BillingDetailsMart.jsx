import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const BillingDetailsMart = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Billing Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-4 justify-between">
            <InputField
              label={"Phone Number"}
              type="text"
              name={"phoneNo"}
              value={formData.phoneNo}
              handleChange={handleChange}
              placeholder="Phone Number"
            />
            <InputField
              label={"Invoice No"}
              type="text"
              name={"invoiceNo"}
              value={formData.invoiceNo}
              handleChange={handleChange}
              placeholder="Invoice No"
            />
            <InputField
              label={"FSSAI No"}
              type="text"
              name={"fssaiNo"}
              value={formData.fssaiNo}
              handleChange={handleChange}
              placeholder="FSSAI No"
            />
          </div>
          <div className="flex gap-4 justify-center">
            <InputField
              label={"Bill Date"}
              type="date"
              name={"billDate"}
              value={formData.billDate}
              handleChange={handleChange}
              placeholder="Bill Date"
            />
            <InputField
              label={"Bill Time"}
              type="time"
              name={"billTime"}
              value={formData.billTime}
              handleChange={handleChange}
              placeholder="Bill Time"
            />
          </div>
          <InputField
            label={"Customer Name"}
            type="text"
            name={"customerName"}
            value={formData.customerName}
            handleChange={handleChange}
            placeholder="Customer Name"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default BillingDetailsMart;
