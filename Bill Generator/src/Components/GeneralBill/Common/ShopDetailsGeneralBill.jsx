import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const ShopDetailsGeneralBill = ({ formData, handleChange }) => {
  return (
    <Wrapper>
      <Heading name={"Shop Details"} />
      <div className="px-6 pb-6">
        <div className="flex flex-col gap-6">
          <InputField
            label={"Shop Name"}
            type="text"
            name={"shopName"}
            value={formData.shopName}
            handleChange={handleChange}
            placeholder="Enter Shop Name"
          />
          <TextAreaField
            label={"Sold By Details"}
            name={"soldByDetails"}
            value={formData.soldByDetails}
            handleChange={handleChange}
            placeholder="Shop Address"
            rows={2}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopDetailsGeneralBill;
