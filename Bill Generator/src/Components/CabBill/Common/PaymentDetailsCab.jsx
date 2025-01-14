import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import SelectField from "../../Reuseable Components/SelectField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import { CURRENCY_TYPE, PAYMENT_METHOD } from "../../Utils/constants";

const PaymentDetailsCab = ({ formData, handleChange, template2 }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Payment Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <SelectField
              label={"Currency"}
              selectName={"currencyType"}
              value={formData.currencyType}
              handleChange={handleChange}
              arr={CURRENCY_TYPE}
            />
            <SelectField
              label={"Payment Method"}
              selectName={"paymentMethod"}
              value={formData.paymentMethod}
              handleChange={handleChange}
              arr={PAYMENT_METHOD}
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Trip Amount"}
              type="text"
              name={"tripAmount"}
              value={formData.tripAmount}
              handleChange={handleChange}
              placeholder="999"
            />
            <InputField
              label={"Tax %"}
              type="text"
              name={"tax"}
              value={formData.tax}
              handleChange={handleChange}
              placeholder="Tax %"
            />
            <InputField
              label={"Convenience Fee"}
              type="text"
              name={"convenienceFee"}
              value={formData.convenienceFee}
              handleChange={handleChange}
              placeholder="199..."
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Airport Pick Up Charge"}
              type="text"
              name={"airportPickupCharge"}
              value={formData.airportPickupCharge}
              handleChange={handleChange}
              placeholder="0"
            />
            <InputField
              label={"Date"}
              type="date"
              name={"date"}
              value={formData.date}
              handleChange={handleChange}
            />
          </div>
          {template2 && (
            <TextAreaField
              label={"Cab Service Address"}
              name={"cabServiceAddress"}
              value={formData.cabServiceAddress}
              handleChange={handleChange}
              placeholder="Cab Service Address..."
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default PaymentDetailsCab;
