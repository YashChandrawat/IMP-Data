import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const StationaryDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Stationary Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Stationary Name"}
            type="text"
            name={"stationaryName"}
            value={formData.stationaryName}
            handleChange={handleChange}
            placeholder="Enter Stationary Name"
          />
          <div className="flex justify-between gap-4">
            <TextAreaField
              label={"Enter Stationary Address"}
              name={"stationaryAddress"}
              value={formData.stationaryAddress}
              handleChange={handleChange}
              placeholder="Enter Stationary Address"
            />
            <TextAreaField
              label={"Remark"}
              name={"remark"}
              value={formData.remark}
              handleChange={handleChange}
              placeholder="Remark"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Invoice No"}
              type="number"
              name={"invoiceNo"}
              value={formData.invoiceNo}
              handleChange={handleChange}
              placeholder="Enter Invoice No"
            />
            <InputField
              label={"Bill Date"}
              type="date"
              name={"billDate"}
              value={formData.billDate}
              handleChange={handleChange}
              placeholder="Enter Bill Date"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default StationaryDetails;
