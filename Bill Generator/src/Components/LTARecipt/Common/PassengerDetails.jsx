import Heading from "../../Reuseable Components/Heading";
import InputField from "../../Reuseable Components/InputField";
import Wrapper from "../../Reuseable Components/Wrapper";

const PassengerDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <Wrapper>
        <Heading name={"Passenger Details"} />
        <div className="px-6 pb-6 flex flex-col gap-4">
          <InputField
            label={"Passenger Name, Age, Gender"}
            type="text"
            name={"nameAgeGender"}
            value={formData.nameAgeGender}
            handleChange={handleChange}
            placeholder="Sachin,29,Male..."
          />
          <div className="flex gap-4">
            <InputField
              label={"No of Person"}
              type="text"
              name={"noOfPerson"}
              value={formData.noOfPerson}
              handleChange={handleChange}
              placeholder="No. Of Person"
            />
            <InputField
              label={"Seat No"}
              type="text"
              name={"seatNo"}
              value={formData.seatNo}
              handleChange={handleChange}
              placeholder="Ex. 19"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PassengerDetails;
