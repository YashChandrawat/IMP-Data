import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import Wrapper from "../../Reuseable Components/Wrapper";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const HotelDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Wrapper>
        <Heading
          name={"Hotel Details"}
          toggleContent={toggleContent}
          isCollapsed={!isVisible}
          isVisible={isVisible}
        />
        <CollapseWrapper isVisible={isVisible}>
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
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Check In Date"}
                  type="date"
                  name={"checkInDate"}
                  value={formData.checkInDate}
                  handleChange={handleChange}
                  placeholder="Check In Date"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Check In Time"}
                  type="time"
                  name={"checkInTime"}
                  value={formData.checkInTime}
                  handleChange={handleChange}
                  placeholder="Check In Time"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Check Out Date"}
                  type="date"
                  name={"checkOutDate"}
                  value={formData.checkOutDate}
                  handleChange={handleChange}
                  placeholder="Check Out Date"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Check Out Time"}
                  type="time"
                  name={"checkOutTime"}
                  value={formData.checkOutTime}
                  handleChange={handleChange}
                  placeholder="Check Out Time"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Bill No"}
                  type="text"
                  name={"billNo"}
                  value={formData.billNo}
                  handleChange={handleChange}
                  placeholder="9113"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Nationality"}
                  type="text"
                  name={"nationality"}
                  value={formData.nationality}
                  handleChange={handleChange}
                  placeholder="Indian"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/4">
                <InputField
                  label={"Room No"}
                  type="text"
                  name={"roomNo"}
                  value={formData.roomNo}
                  handleChange={handleChange}
                  placeholder="354"
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4">
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
          </div>
        </CollapseWrapper>
      </Wrapper>
    </div>
  );
};

export default HotelDetails;
