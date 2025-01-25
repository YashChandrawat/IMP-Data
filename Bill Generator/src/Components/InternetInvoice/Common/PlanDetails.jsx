import { useState } from "react";
import Heading from "../../Reuseable Components/Heading";
import SelectField from "../../Reuseable Components/SelectField";
import Wrapper from "../../Reuseable Components/Wrapper";
import {
  MONTH_CYCLE,
  TRAFFIC_PLAN_PACKAGE,
  TRAFFIC_PLAN_SPEED,
} from "../../Utils/constants";
import CollapseWrapper from "../../Reuseable Components/CollapseWrapper";

const PlanDetails = ({ formData, handleChange }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Wrapper>
      {/* Header */}
      <Heading
        name={"Plan Details"}
        toggleContent={toggleContent}
        isCollapsed={!isVisible}
        isVisible={isVisible}
      />
      <CollapseWrapper isVisible={isVisible}>
        <div className="px-6 pb-6 flex gap-6">
          {/* Traffic Plan Speed */}
          <SelectField
            label={"Traffic Plan Speed"}
            selectName={"trafficPlanSpeed"}
            value={formData.trafficPlanSpeed}
            handleChange={handleChange}
            arr={TRAFFIC_PLAN_SPEED}
          />

          {/* Traffic Plan Package */}
          <SelectField
            label={"Traffic Plan Package"}
            selectName={"trafficPlanPackage"}
            value={formData.trafficPlanPackage}
            handleChange={handleChange}
            arr={TRAFFIC_PLAN_PACKAGE}
          />

          {/* Traffic Plan */}
          <SelectField
            label={"Traffic Plan Speed"}
            selectName={"trafficPlan"}
            value={formData.trafficPlan}
            handleChange={handleChange}
            arr={MONTH_CYCLE}
          />
        </div>
      </CollapseWrapper>
    </Wrapper>
  );
};

export default PlanDetails;
