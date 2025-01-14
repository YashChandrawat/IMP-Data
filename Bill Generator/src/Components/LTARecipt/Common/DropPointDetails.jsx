import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const DropPointDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Drop Point Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <InputField
              label={"Dropping Point Date"}
              type="date"
              name={"droppingPointDate"}
              value={formData.droppingPointDate}
              handleChange={handleChange}
              placeholder="Dropping Point Date"
            />
            <InputField
              label={"Dropping Point Time"}
              type="time"
              name={"droppingPointTime"}
              value={formData.droppingPointTime}
              handleChange={handleChange}
              placeholder="Dropping Point Time"
            />
          </div>
          <TextAreaField
            label={"Dropping Address"}
            name={"droppingAddress"}
            value={formData.droppingAddress}
            handleChange={handleChange}
            placeholder="Dropping Address..."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default DropPointDetails;
