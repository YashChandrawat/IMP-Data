import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const BillingDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Billing Details"} />
        <div className="px-6 pb-6">
          <div className="flex gap-6">
            <InputField
              label={"Contact"}
              type={"number"}
              name={"contactNo"}
              value={formData.contactNo}
              handleChange={handleChange}
            />
            <InputField
              label={"Invoice No"}
              type={"number"}
              name={"invoiceNo"}
              value={formData.invoiceNo}
              handleChange={handleChange}
            />
            <InputField
              label={"Bill Time"}
              type={"time"}
              name={"billTime"}
              value={formData.billTime}
              handleChange={handleChange}
            />
          </div>
          <div className="flex gap-6 mt-2">
            <InputField
              label={"Bill Admit Date"}
              type={"date"}
              name={"billAdmitDate"}
              value={formData.billAdmitDate}
              handleChange={handleChange}
            />
            <InputField
              label={"Bill Discharge Date"}
              type={"date"}
              name={"billDischargeDate"}
              value={formData.billDischargeDate}
              handleChange={handleChange}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BillingDetails;
