import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";

const PaymentDetailsLTA = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Payment Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <SelectField
            label={"Currency"}
            selectName={"currencyType"}
            value={formData.currencyType}
            handleChange={handleChange}
            arr={CURRENCY_TYPE}
          />
          <div className="flex gap-4">
            <SelectField
              label={"Payment Method"}
              selectName={"paymentMethod"}
              value={formData.paymentMethod}
              handleChange={handleChange}
              arr={PAYMENT_METHOD}
            />
            <InputField
              label={"Amount"}
              type={"text"}
              name={"amount"}
              value={formData.amount}
              handleChange={handleChange}
            />
            <InputField
              label={"Tax %"}
              type={"text"}
              name={"tax"}
              value={formData.tax}
              handleChange={handleChange}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsLTA;
