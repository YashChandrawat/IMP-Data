import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";

const PaymentDetailsGeneralBill = ({ formData, handleChange }) => {
  return (
    <Wrapper>
      <Heading name={"Payment Details"} />
      <div className="px-6 pb-6 flex flex-col gap-4">
        <div className="mb-2">
          <SelectField
            label={"Currency"}
            selectName={"currencyType"}
            value={formData.currencyType}
            handleChange={handleChange}
            arr={CURRENCY_TYPE}
          />
        </div>
        <div className="flex gap-4">
          <SelectField
            label={"Payment Method"}
            selectName={"paymentMethod"}
            value={formData.paymentMethod}
            handleChange={handleChange}
            arr={PAYMENT_METHOD}
          />
          <InputField
            label={"Invoice No"}
            type={"number"}
            name={"invoiceNo"}
            value={formData.invoiceNo}
            handleChange={handleChange}
          />
        </div>
        <div className="flex gap-4">
          <InputField
            label={"Date"}
            type={"date"}
            name={"date"}
            value={formData.date}
            handleChange={handleChange}
          />
          <InputField
            label={"Order Number"}
            type={"number"}
            name={"orderNo"}
            value={formData.orderNo}
            handleChange={handleChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PaymentDetailsGeneralBill;
