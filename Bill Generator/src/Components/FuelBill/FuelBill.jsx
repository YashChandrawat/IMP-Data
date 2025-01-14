import { useState } from "react";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";
import Template4 from "./Templates/template4";

const FuelBill = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // Function to render the selected template component
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 />;
      case "template2":
        return <Template2 />;
      case "template3":
        return <Template3 />;
      case "template4":
        return <Template4 />;
      default:
        return <Template1 />;
    }
  };

  return (
    <div className="max-w-[100%] mx-auto p-6 rounded-lg space-y-8 mt-12">
      <h2 className="text-3xl font-semibold border-b-2 py-4 text-gray-800">
        Fuel Bills
      </h2>

      <div className="space-y-4">
        <div className="flex space-x-6 ml-6">
          {["template1", "template2", "template3", "template4"].map(
            (template, index) => (
              <label
                key={index}
                className={`inline-flex items-center space-x-2 text-md px-4 py-3 border rounded-[2rem] shadow-md cursor-pointer transition-all ${
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
            )
          )}
        </div>
      </div>

      {/* Template Preview Area */}
      <div className="template-preview rounded-lg shadow-sm">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default FuelBill;
