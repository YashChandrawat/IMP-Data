import { useState } from "react";
import RechargeThemes from "./RechargeThemes";
import {
  heading,
  labelClass,
  mainContainer,
  templateContainer,
} from "../../Utils/constants";

const RechargeTemplate1 = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("theme1");
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "theme1":
        return <RechargeThemes theme1={true} />;
      case "theme2":
        return <RechargeThemes theme2={true} />;
      case "theme3":
        return <RechargeThemes theme3={true} />;
      case "theme4":
        return <RechargeThemes theme4={true} />;
      default:
        return <RechargeThemes theme1={true} />;
    }
  };
  return (
    <div className={`${mainContainer}`}>
      <h2 className={`${heading}`}>Select Theme</h2>

      <div className="space-y-6">
        <div className={`${templateContainer}`}>
          {["theme1", "theme2", "theme3", "theme4"].map((template, index) => (
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
                Theme {index + 1}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Template Preview Area */}
      <div className="template-preview rounded-lg shadow-sm">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default RechargeTemplate1;
