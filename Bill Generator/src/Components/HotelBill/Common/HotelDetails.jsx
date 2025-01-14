import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";

const HotelDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Hotel Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Hotel Name"}
            type="text"
            name={"hotelName"}
            value={formData.hotelName}
            handleChange={handleChange}
            placeholder="Reporting Date"
          />
          <TextAreaField
            label={"Hotel Address"}
            name={"hotelAddress"}
            value={formData.hotelAddress}
            handleChange={handleChange}
            placeholder="Hotel Address"
          />
          <div className="flex justify-between gap-4">
            <InputField
              label={"Check In Date"}
              type="date"
              name={"checkInDate"}
              value={formData.checkInDate}
              handleChange={handleChange}
              placeholder="Check In Date"
            />
            <InputField
              label={"Check In Time"}
              type="time"
              name={"checkInTime"}
              value={formData.checkInTime}
              handleChange={handleChange}
              placeholder="Check In Time"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Check Out Date"}
              type="date"
              name={"checkOutDate"}
              value={formData.checkOutDate}
              handleChange={handleChange}
              placeholder="Check Out Date"
            />
            <InputField
              label={"Check Out Time"}
              type="time"
              name={"checkOutTime"}
              value={formData.checkOutTime}
              handleChange={handleChange}
              placeholder="Check Out Time"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Bill No"}
              type="text"
              name={"billNo"}
              value={formData.billNo}
              handleChange={handleChange}
              placeholder="9113"
            />
            <InputField
              label={"Nationality"}
              type="text"
              name={"nationality"}
              value={formData.nationality}
              handleChange={handleChange}
              placeholder="Indian"
            />
          </div>
          <div className="flex justify-between gap-4">
            <InputField
              label={"Room No"}
              type="text"
              name={"roomNo"}
              value={formData.roomNo}
              handleChange={handleChange}
              placeholder="354"
            />
            <InputField
              label={"Room Type"}
              type="text"
              name={"roomType"}
              value={formData.roomType}
              handleChange={handleChange}
              placeholder="AC Room"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HotelDetails;
