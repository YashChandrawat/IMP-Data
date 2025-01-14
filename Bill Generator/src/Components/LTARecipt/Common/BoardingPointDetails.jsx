import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const BoardingPointDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Boarding Point Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <TextAreaField
              label={"Location"}
              name={"location"}
              value={formData.location}
              handleChange={handleChange}
              placeholder="Location Name"
            />
            <TextAreaField
              label={"Landmark"}
              name={"landmark"}
              value={formData.landmark}
              handleChange={handleChange}
              placeholder="Location..."
            />
          </div>
          <div className="flex gap-4">
            <InputField
              label={"Reporting Date"}
              type="date"
              name={"reportingDate"}
              value={formData.reportingDate}
              handleChange={handleChange}
              placeholder="Reporting Date"
            />
            <InputField
              label={"Departure Time"}
              type="time"
              name={"departureTime"}
              value={formData.departureTime}
              handleChange={handleChange}
              placeholder="Departure Time"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BoardingPointDetails;
