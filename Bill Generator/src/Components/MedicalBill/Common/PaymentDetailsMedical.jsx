import Wrapper from "../../Reuseable Components/Wrapper";
import Heading from "../../Reuseable Components/Heading";
import SelectField from "../../Reuseable Components/SelectField";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";
import InputField from "../../Reuseable Components/InputField";
const PaymentDetailsMedical = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Payment Details"} />
        <div className="px-6">
          <SelectField
            label={"Currency Type"}
            selectName={"currencyType"}
            value={formData.currencyType}
            handleChange={handleChange}
            arr={CURRENCY_TYPE}
          />
        </div>
        <div className="flex justify-between gap-4 px-6 pb-6 w-[100%]">
          <SelectField
            label={"Payment Method"}
            selectName={"paymentMethod"}
            value={formData.paymentMethod}
            handleChange={handleChange}
            arr={PAYMENT_METHOD}
          />
          <InputField
            label={"Tax %"}
            type={"number"}
            value={formData.tax}
            name={"tax"}
            handleChange={handleChange}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsMedical;
