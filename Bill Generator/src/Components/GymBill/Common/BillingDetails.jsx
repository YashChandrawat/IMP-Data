import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { MONTH_CYCLE } from "../../Utils/constants";

const BillingDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Billing Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <InputField
              label={"Invoice Number"}
              type="text"
              name={"invoiceNo"}
              value={formData.invoiceNo}
              handleChange={handleChange}
              placeholder="1249"
            />
            <InputField
              label={"User Number"}
              type="text"
              name={"userNo"}
              value={formData.userNo}
              handleChange={handleChange}
              placeholder="eZjo5"
            />
            <InputField
              label={"Invoice Date"}
              type="date"
              name={"invoiceDate"}
              value={formData.invoiceDate}
              handleChange={handleChange}
              //   placeholder="1249"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Billing From Date"}
              type="date"
              name={"billFromDate"}
              value={formData.billFromDate}
              handleChange={handleChange}
              //   placeholder="1249"
            />
            <SelectField
              label={"Billing Cycle"}
              selectName={"billingCycle"}
              value={formData.billingCycle}
              handleChange={handleChange}
              arr={MONTH_CYCLE}
            />
            <InputField
              label={"Bill To Date"}
              type="date"
              name={"billToDate"}
              value={formData.billToDate}
              handleChange={handleChange}
              //   placeholder="1249"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Gym Email"}
              type="text"
              name={"gymEmail"}
              value={formData.gymEmail}
              handleChange={handleChange}
              placeholder="abz@gmail.com"
            />
            <InputField
              label={"Gym No"}
              type="text"
              name={"gymNo"}
              value={formData.gymNo}
              handleChange={handleChange}
              placeholder="6574265410"
            />
            <InputField
              label={"Customer Care No"}
              type="text"
              name={"customerNo"}
              value={formData.customerNo}
              handleChange={handleChange}
              placeholder="6987616431"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BillingDetails;
