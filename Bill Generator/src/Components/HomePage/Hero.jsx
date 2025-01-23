import heroImage from "../../Assests/HeroImage.png";
import nextImage from "../../Assests/nextImage.png";
import feedBack1 from "../../Assests/feedBack1.png";
import feedBack2 from "../../Assests/feedBack2.png";
import feedBack3 from "../../Assests/feedBack3.png";
import feedBack4 from "../../Assests/feedBack4.png";
import feedbackTablet1 from "../../Assests/feedbackTablet1.png";
import feedbackTablet2 from "../../Assests/feedbackTablet2.png";
import feedbackTablet3 from "../../Assests/feedbackTablet3.png";
import feedbackMobile1 from "../../Assests/feedbackMobile1.png";
import feedbackMobile2 from "../../Assests/feedbackMobile2.png";
import dImg from "../../Assests/dImg.png";
import { useNavigate } from "react-router";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import {
  Add,
  AirplaneSquare,
  Bag,
  Bill,
  Book,
  Building,
  Buildings2,
  Car,
  Driving,
  Edit,
  GasStation,
  Happyemoji,
  Hospital,
  MainComponent,
  Minus,
  MonitorMobbile,
  Personalcard,
  ProfileCircle,
  ReceiptItem,
  Reserve,
  RulerPen,
  SmsTracking,
  UserSquare,
  Weight,
  Wifi,
} from "iconsax-react";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const Hero = () => {
  const navigate = useNavigate();
  function getCenterSlidePercentage() {
    const width = window.innerWidth;

    if (width < 640) {
      // Small screens (e.g., mobile)
      return 100; // Show 1 item
    } else if (width < 1024) {
      // Medium screens (e.g., tablets)
      return 33.33; // Show 3 items
    } else {
      // Large screens (e.g., desktop)
      return 25; // Show 4 items
    }
  }
  const [slidePercentage, setSlidePercentage] = useState(
    getCenterSlidePercentage()
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidePercentage(getCenterSlidePercentage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const items = [
    {
      label: "Fuel Bills",
      icon: <GasStation size="20" color="currentColor" />,
    },
    {
      label: "Driver Salary",
      icon: <Driving size="20" color="currentColor" />,
    },
    {
      label: "Daily Helper",
      icon: <ProfileCircle size="20" color="currentColor" />,
    },
    { label: "Rent Recipt", icon: <Building size="20" color="currentColor" /> },
    { label: "Book Invoice", icon: <Book size="20" color="currentColor" /> },
    {
      label: "Internet Invoice",
      icon: <Wifi size="20" color="currentColor" />,
    },
    {
      label: "Restaurent Bill",
      icon: <Reserve size="20" color="currentColor" />,
    },
    {
      label: "Recharge Receipt",
      icon: <MonitorMobbile size="20" color="currentColor" />,
    },
    {
      label: "E-Commerce Invoice",
      icon: <Personalcard size="20" color="currentColor" />,
    },
    {
      label: "Medical Bill",
      icon: <Hospital size="20" color="currentColor" />,
    },
    { label: "General Bill", icon: <Bill size="20" color="currentColor" /> },
    {
      label: "Stationary Bill",
      icon: <RulerPen size="20" color="currentColor" />,
    },
    {
      label: "LTA Recipt",
      icon: <AirplaneSquare size="20" color="currentColor" />,
    },
    {
      label: "Hotel Bill",
      icon: <UserSquare size="20" color="currentColor" />,
    },
    { label: "Gym Bill", icon: <Weight size="20" color="currentColor" /> },
    { label: "Mart Bill", icon: <Bag size="20" color="currentColor" /> },
    { label: "Cab Bill", icon: <Car size="20" color="currentColor" /> },
  ];

  const features = [
    {
      icon: <MainComponent size="24" color="#000000" />,
      title: "Versatile Tools",
      description:
        "A variety of templates for bills like Amazon Invoices, Gym Bills, and more.",
    },
    {
      icon: <ReceiptItem size="24" color="#000000" />,
      title: "Quick and Accurate",
      description:
        "Create professional invoices in seconds, saving time and ensuring precision.",
    },
    {
      icon: <Buildings2 color="#000000" />,
      title: "Industry-Specific Solutions",
      description:
        "Tailored generators for restaurants, gyms, taxis, and stationary stores.",
    },
    {
      icon: <Bill color="#000000" />,
      title: "Paperless Efficiency",
      description: "Replace manual work with seamless digital processes.",
    },
    {
      icon: <Personalcard color="#000000" />,
      title: "Improved Record-Keeping",
      description:
        "Organized receipts for better client communication and business tracking.",
    },
    {
      icon: <MonitorMobbile color="#000000" />,
      title: "User-Friendly Interface",
      description: "Intuitive design suitable for beginners and experts alike.",
    },
  ];

  const whyUs = [
    {
      icon: <Happyemoji color="#4935D9" />,
      title: "Easy To Use",
      description:
        "Easy to use platform for anyone to generate variety of bills required in day to day life",
    },
    {
      icon: <SmsTracking color="#4935D9" />,
      title: "Send Receipts in 10 sec",
      description:
        "Hassle free delivery of PDF receipt directly to user's inbox within 10 seconds of generation",
    },
    {
      icon: <Edit color="#4935D9" />,
      title: "Customizable Templates",
      description:
        "Customizable templates to fit your business and brand effortlessly.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Can I save my invoice details?",
      answer:
        "Yes, you can save your invoice details securely in your account.",
    },
    {
      question: "Do we need an account to access?",
      answer:
        "No, you can access basic features without an account, but saving requires registration.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Absolutely, we prioritize your data security with encryption and secure storage.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerCss = "px-[5.5vw] box-border"

  return (
    <div className="flex flex-col items-center gap-20 overflow-x-hidden">
      {/* Hero section */}
      <div className={`flex flex-col justify-between items-center lg:items-start h-auto lg:h-screen py-12 lg:py-24 relative px-[5.5vw] box-border ${containerCss}`}>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full relative">
          {/* Background Blur */}
          <div className="sm:w-[455px] sm:h-[455px] lg:w-[701px] lg:h-[701px] rounded-full bg-[#FFE3EC] blur-[100px] lg:blur-[100px] z-10 opacity-60 absolute lg:-left-48 lg:-top-14 -top-48 "></div>

          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 lg:gap-10 text-center lg:text-left relative z-30 px-4 lg:px-0">
            <span className="px-4 py-2 border border-transparent rounded-full bg-[#4935D914] text-[#4935D9] text-xs lg:text-sm font-medium inline-block w-fit mx-auto md:mx-auto lg:mx-0">
              Generate Unlimited Number of Bills for Free
            </span>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-6xl  text-balance text-gray-900 leading-tight w-[100%] max-w-[80vw]">
              Accurate, fast and Secure Bill Generator
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed lg:text-justify w-[85%] max-w-[80vw] mx-auto sm:w-full">
              Bill Generator lets you quickly create receipts, bills, and
              invoices with attractive templates straight from your web browser.
            </p>
            <button
              onClick={() => navigate("/bills")}
              className="rounded-lg px-6 py-3 bg-[#4935D9] text-white font-semibold hover:bg-[#3728a6] transition-all duration-300 w-fit mx-auto lg:mx-0"
            >
              Generate Bill Now
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 h-full px-4 lg:px-0">
            <img
              src={heroImage}
              alt=""
              className="object-contain w-full max-w-[400px] lg:max-w-none relative z-40"
            />
          </div>
        </div>

        {/* Guidance Section */}
        <div className="flex items-center flex-col gap-6 w-full mt-12 z-40 px-4">
          <h4 className="font-semibold text-lg sm:text-xl text-center">
            Generate Bills for
          </h4>
          <div className="max-w-7xl w-full">
            <ResponsiveCarousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              autoFocus
              stopOnHover
              interval={2000}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              centerMode
              centerSlidePercentage={slidePercentage} // Dynamically calculated
            >
              {items.map((item, index) => (
                <div key={index} className="mr-4">
                  <div className="p-4 text-center rounded-lg bg-[#F8F3FC66] shadow-xl flex justify-center items-center gap-2">
                    <p>{item.icon}</p>
                    <p className="text-xs sm:text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </ResponsiveCarousel>
          </div>
        </div>

        {/* Ellipses */}
        <div className="w-[300px] h-[300px] lg:w-[671px] lg:h-[671px] rounded-full bg-[#96ACFF] blur-[100px] lg:blur-[250px] z-10 opacity-60 absolute -bottom-24 right-0 "></div>
        <div className="w-[300px] h-[300px] lg:w-[671px] lg:h-[671px] rounded-full bg-[#96ACFF] blur-[100px] lg:blur-[250px] z-10 opacity-50 absolute -bottom-20 right-0"></div>
      </div>

      {/* Other section - Update Here*/}
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col justify-between items-center w-full gap-4 relative z-50">
          <p className="w-[128px] h-[35px] bg-[#4935D914] text-[#4935D9] rounded-[20px] px-[16px] py-[8px]">
            Client History
          </p>
          <h2 className="text-3xl font-medium md:text-5xl sm:text-2xl">
            Our Satisfied Clients
          </h2>
          <img
            src={nextImage}
            alt=""
            className=" relative left-[1vw] w-[calc(100%-1vw)] z-[20] -mt-28"
          />
        </div>

        <div className="w-full px-6 -mt-[40vh] relative z-10">
          <div className="rounded-3xl relative flex items-center justify-center bg-white w-full overflow-hidden pt-80">
            {/* Background Blurs */}
            <div className="absolute w-[250px] h-[250px] lg:w-[704px] lg:h-[704px] rounded-full bg-[#FFE3EC] blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-20 -left-8"></div>
            <div className="absolute w-[250px] h-[250px] lg:w-[704px] lg:h-[704px] rounded-full bg-[#96ACFF] blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-20 -right-8"></div>

            {/* Content */}
            <div className="overflow-hidden rounded-3xl w-full max-w-7xl">
              {/* Large Screens */}
              <div className="hidden lg:flex justify-between items-center gap-8">
                <img src={feedBack1} alt="" className="w-[286px] h-auto z-50" />

                <div className="flex flex-col items-center text-center">
                  <h1 className="text-4xl font-medium mb-8 z-50">
                    Here's what our users are saying about us
                  </h1>
                  <div className="flex gap-4">
                    <img
                      src={feedBack2}
                      alt=""
                      className="w-[286px] h-auto z-50"
                    />
                    <img
                      src={feedBack3}
                      alt=""
                      className="w-[286px] h-auto z-50"
                    />
                  </div>
                </div>

                <img src={feedBack4} alt="" className="w-[286px] h-auto z-50" />
              </div>

              {/* Tablet Screens */}
              <div className="hidden md:flex lg:hidden justify-center">
                <img
                  src={feedbackTablet1}
                  alt=""
                  className="w-[186.67px]"
                />
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl font-semibold mb-4 w-[60%]">
                    Here's what our users are saying about us
                  </h1>
                  <img
                    src={feedbackTablet2}
                    alt=""
                    className="w-[186.67px] h-[616px]"
                  />
                </div>
                <img
                  src={feedbackTablet3}
                  alt=""
                  className="w-[186.67px] h-[760px]"
                />
              </div>

              {/* Mobile Screens */}
              <div className="flex md:hidden flex-col items-center gap-6">
                <h1 className="text-xl font-semibold text-center w-[80%] z-50">
                  Here's what our users are saying about us
                </h1>
                <div className="flex">
                  <img
                    src={feedbackMobile1}
                    alt=""
                    className="w-[156px] h-auto z-50"
                  />
                  <img
                    src={feedbackMobile2}
                    alt=""
                    className="w-[156px] h-auto z-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[200vh] rounded-3xl md:w-[95vw]  overflow-hidden flex justify-center sm:py-64 sm:top-96 top-24 py-24 sm:w-[100vw] right-3 md:right-24 md:top-96 md:py-72 md:px-20"></div> */}
      </div>

      <div className="flex flex-col h-auto lg:h-[100vh] w-full px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <div className="mx-auto text-center flex flex-col items-center space-y-6">
          <span className="bg-[#4935D914] text-[#4935D9] rounded-[20px] px-4 py-2 text-sm sm:text-base lg:text-lg">
            How it’s work
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-900 w-[90%] sm:w-[70%] lg:w-[60%]">
            Effortless Billing For Every Business Need
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg w-[90%] sm:w-[70%] lg:w-[60%]">
            Say goodbye to manual billing and paperwork—generate professional
            invoices in just a few clicks and focus on growing your business.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6">
              {/* Icon Wrapper */}
              <div className="flex items-center justify-center border border-[#EAECF5] shadow-sm w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-4 rounded-xl text-base sm:text-lg lg:text-xl font-semibold bg-white">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-gray-500 text-sm sm:text-base lg:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[180vh] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <div className="mx-auto text-center flex flex-col items-center space-y-6">
          <span className="w-[126px] h-[35px] rounded-[20px] px-4 py-2 bg-[#4935D914] text-[#4935D9] text-sm sm:text-base">
            Why Us
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-900">
            Why Bill Generator?
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg">
            You want to generate perfect bills. We are here to help you achieve
            them.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col sm:flex-row sm:justify-center text-center gap-6 mt-10 relative w-full max-w-7xl">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 justify-evenly items-center bg-white rounded-xl shadow-2xl shadow-[#4935D90F] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 ${
                index === 1 ? "sm:top-10 sm:translate-y-0" : "sm:top-0"
              } ${index === 1 ? "translate-y-0" : "translate-y-0"}`}
            >
              <p className="bg-[#4935D90F] rounded-lg p-4 text-center text-lg sm:text-xl lg:text-2xl">
                {item.icon}
              </p>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 w-[90%] sm:w-[80%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center gap-10 px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <div className="mx-auto text-center flex flex-col items-center space-y-6">
          <span className="w-[126px] h-[35px] rounded-[20px] px-4 py-2 bg-[#4935D914] text-[#4935D9] text-sm sm:text-base">
            F&Q's
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-900 w-full sm:w-[80%] lg:w-[60%]">
            Know More By FAQ
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg w-full sm:w-[80%] lg:w-[60%]">
            The Bill Generator is the simple tool that creates simple bills with
            the proper format.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm"
            >
              <div
                className="flex justify-between items-center px-4 sm:px-6 py-4 cursor-pointer bg-white"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl sm:text-2xl font-light transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  {activeIndex === index ? (
                    <Add className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Add className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 py-4 bg-gray-50 text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="main-box flex justify-center items-center h-auto py-8 sm:py-16 px-4 sm:px-8">
        <div
          className="box py-8 sm:py-16 px-4 sm:px-8 rounded-2xl shadow-2xl bg-white flex flex-col items-center space-y-6 max-w-lg w-full"
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
            <h1 className="text-2xl sm:text-4xl font-medium">
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

export default Hero;
