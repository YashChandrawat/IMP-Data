import { useState } from "react";
import RestaurentTemplate1 from "../RestaurentBill/Templates/RestaurentTemplate1";
import {
  heading,
  labelClass,
  mainContainer,
  renderClass,
  templateContainer,
} from "../Utils/constants";
// import RestaurentTemplate2 from "../RestaurentBill/Templates/RestaurentTemplate2";

const RestaurentBill = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <RestaurentTemplate1 template1={true} />;
      case "template2":
        return <RestaurentTemplate1 template2={true} />;

      default:
        return <RestaurentTemplate1 />;
    }
  };
  return (
    <div className={`${mainContainer}`}>
      <h2 className={`${heading}`}>Restaurent Bill</h2>

      <div className="space-y-6">
        <div className={`${templateContainer}`}>
          {["template1", "template2"].map((template, index) => (
            <label
              key={index}
              className={`${labelClass} ${
                selectedTemplate === template
                  ? "text-[#4935D9] border-[#4935D9]  ring-[#4935D9] px-9"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="template"
                value={template}
                checked={selectedTemplate === template}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="hidden"
              />
              <span className="relative">
                <span
                  className={`w-3 h-3 absolute -left-6 top-1/2 transform -translate-y-1/2 rounded-full border-2 ${
                    selectedTemplate === template
                      ? "bg-[#4935D9] border-[#4935D9]"
                      : "hidden"
                  }`}
                ></span>
                Template {index + 1}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Template Preview Area */}
      <div className={`${renderClass}`}>{renderTemplate()}</div>
    </div>
  );
};

export default RestaurentBill;
