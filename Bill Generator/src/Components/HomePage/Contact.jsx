import { useState } from "react";
import contactUs from "../../Assests/contactUs.png";
import dImg from "../../Assests/dImg.png";
import InputField from "../Reuseable Components/InputField";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex flex-col px-4 sm:px-6 lg:px-[8vw] box-border w-full overflow-x-hidden overflow-y-hidden relative">
        {/* Background Blurs */}
        <div className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[704px] lg:h-[704px] rounded-full absolute bg-[#FFE3EC] blur-[50px] sm:blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-10 sm:-top-20 lg:-top-40 -left-4 sm:-left-8 lg:-left-16"></div>
        <div className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[704px] lg:h-[704px] rounded-full absolute bg-[#96ACFF] blur-[50px] sm:blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-10 sm:-top-20 lg:-top-40 -right-4 sm:-right-16"></div>

        <div className="z-40 h-[50vh] flex flex-col gap-6 py-10 sm:py-20">
          <h1 className="text-3xl sm:text-5xl font-medium text-center">
            We’re Here to Help!
          </h1>
          <p className="text-center text-gray-500 w-[90%] sm:w-[70%] lg:w-[45%] mx-auto">
            Have questions, feedback, or need support? Reach out to us anytime,
            and we’ll ensure you get the assistance you need.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col sm:flex-row w-[90%] sm:w-[77%] mx-auto relative bottom-16 sm:bottom-32 z-40 shadow-md rounded-3xl">
        {/* Image */}
        <img
          src={contactUs}
          alt="contactUs"
          className="w-full sm:w-[40%] h-[300px] sm:h-auto rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none object-cover"
        />

        {/* Form */}
        <div className="p-6 sm:p-10 bg-white rounded-b-3xl sm:rounded-r-3xl sm:rounded-bl-none w-full">
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-6">
              <InputField
                label={"Your Name"}
                type="text"
                name={"firstName"}
                value={formData.firstName}
                handleChange={handleChange}
                placeholder="John"
              />
              <InputField
                label={"Last Name"}
                type="text"
                name={"lastName"}
                value={formData.lastName}
                handleChange={handleChange}
                placeholder="Doe"
              />
            </div>
            <InputField
              label={"Email"}
              type="email"
              name={"email"}
              value={formData.email}
              handleChange={handleChange}
              placeholder="johndoe@gmail.com"
            />
            <InputField
              label={"Message"}
              type="text"
              name={"message"}
              value={formData.message}
              handleChange={handleChange}
              placeholder=""
            />
            <button className="bg-[#4935D9] text-white px-4 py-2 rounded-lg w-full sm:w-[25%] hover:bg-purple-700 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <div className="main-box2 flex justify-center items-center h-auto py-8 sm:py-16 px-4 sm:px-8 w-[100vw] mx-auto border-y-[1px] border-gray-300">
        <div
          className="box py-8 sm:py-16 px-4 sm:px-8 rounded-2xl shadow-2xl bg-white flex flex-col items-center space-y-6 w-[90%] sm:w-[70%] mx-auto justify-center"
          id="demo"
        >
          {/* Image */}
          <img
            src={dImg}
            alt=""
            className="h-12 sm:h-16 w-12 sm:w-16 p-4 rounded-xl bg-white shadow-2xl object-cover"
          />

          {/* Text Content */}
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium">
              Let’s Start Now
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Generate your bills and invoices with a simple process.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#4935D9] text-white w-full sm:w-[40%] py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Let’s Get Started
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
