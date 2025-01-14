import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const LocationDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Location Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <TextAreaField
              label={"Pick up point"}
              name={"pickupPoint"}
              value={formData.pickupPoint}
              handleChange={handleChange}
              placeholder="Pick up point..."
            />
            <TextAreaField
              label={"Drop point"}
              name={"dropPoint"}
              value={formData.dropPoint}
              handleChange={handleChange}
              placeholder="Drop point..."
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Pick up time"}
              type="time"
              name={"pickupTime"}
              value={formData.pickupTime}
              handleChange={handleChange}
              placeholder="Pick up time"
            />
            <InputField
              label={"Drop Point Time"}
              type="time"
              name={"dropPointTime"}
              value={formData.dropPointTime}
              handleChange={handleChange}
              placeholder="Drop Point Time"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LocationDetails;
