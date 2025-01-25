import Heading from "../../Reuseable Components/Heading";
import Wrapper from "../../Reuseable Components/Wrapper";
import InputField from "../../Reuseable Components/InputField";
import TextAreaField from "../../Reuseable Components/TextAreaField";
import { useState } from "react";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const BookDetails = ({ formData, handleChange, template2 }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Book Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        {template2 && (
          <div>
            <div className="px-6 pb-6 flex gap-6">
              {/* Name of Book */}
              <InputField
                label={"Book Author"}
                type="text"
                name={"bookAuthor"}
                value={formData.bookAuthor}
                handleChange={handleChange}
                placeholder="JK Rollins"
              />

              {/* Publisher */}
              <InputField
                label={"Book Store Name"}
                type="text"
                name={"bookStoreName"}
                value={formData.bookStoreName}
                handleChange={handleChange}
                placeholder="Appario Sales"
              />
            </div>

            {/* Description */}
            <div className="px-6 pb-6">
              <TextAreaField
                label={"Store Address"}
                name={"storeAddress"}
                value={formData.storeAddress}
                handleChange={handleChange}
                placeholder="Enter a brief description about the store address..."
              />
            </div>
          </div>
        )}

        <div className="px-6 pb-6 flex gap-6">
          {/* Name of Book */}
          <InputField
            label={"Name of Book"}
            type="text"
            name={"bookName"}
            value={formData.bookName}
            handleChange={handleChange}
            placeholder="Gulliver Travels"
          />

          {/* Publisher */}
          <InputField
            label={"Publisher"}
            type="text"
            name={"publisher"}
            value={formData.publisher}
            handleChange={handleChange}
            placeholder="John Rings"
          />
        </div>

        {/* Description */}
        <div className="px-6 pb-6">
          <TextAreaField
            label={"Description"}
            name={"description"}
            value={formData.description}
            handleChange={handleChange}
            placeholder="Enter a brief description about the book..."
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default BookDetails;
