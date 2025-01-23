const Dummy = () => {
  return (
    <div>
      <div className="flex flex-col h-[300vh] py-24 mt-10">
        <div className="flex flex-col justify-between items-center w-full gap-4">
          <p className="w-[128px] h-[35px] bg-[#4935D914] text-[#4935D9] rounded-[20px] px-[16px] py-[8px]">
            Client History
          </p>
          <h2 className="text-3xl font-medium md:text-5xl sm:text-2xl">
            Our Satisfied Clients
          </h2>
        </div>
        <img
          src={nextImage}
          alt=""
          className="absolute left-[1vw] w-[calc(100%-1vw)] z-[20] md:mt-10 sm:mt-10 lg:mt-10 mt-16"
        />
        <div className="h-auto lg:h-[200vh] rounded-3xl w-[100%] relative lg:bottom-[88rem] md:top-[26rem] overflow-hidden">
          {/* Background Ellipses */}
          <div className="w-[250px] h-[250px] lg:w-[704px] lg:h-[704px] rounded-full absolute bg-[#FFE3EC] blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-10 sm:-top-20 lg:-top-40 -left-4 sm:-left-8 lg:-left-16"></div>
          <div className="w-[250px] h-[250px] lg:w-[704px] lg:h-[704px] rounded-full absolute bg-[#96ACFF] blur-[100px] lg:blur-[250px] z-10 opacity-60 -top-10 sm:-top-20 lg:-top-40 -right-4 sm:-right-16"></div>

          {/* Feedback Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 h-auto lg:h-[200vh] py-12 lg:py-96 md:py-48 relative z-30 px-16">
            <div className="flex sm:hidden md:flex lg:flex">
              <div className="flex justify-center w-full lg:w-auto lg:flex md:hidden sm:hidden">
                <img
                  src={feedBack1}
                  alt=""
                  className="w-[180px] sm:w-[240px] lg:w-[286px] h-auto"
                />
              </div>

              <div className="flex flex-col justify-center gap-8- items-center">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-medium text-center w-[90%] mb-8">
                  Here's what our users are saying about us
                </h1>
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <img
                    src={feedBack2}
                    alt=""
                    className="w-[180px] sm:w-[240px] lg:w-[286px] h-auto"
                  />
                  <img
                    src={feedBack3}
                    alt=""
                    className="w-[180px] sm:w-[240px] lg:w-[286px] h-auto"
                  />
                </div>
              </div>

              <div className="flex justify-center w-full lg:w-auto lg:flex md:hidden sm:hidden">
                <img
                  src={feedBack4}
                  alt=""
                  className="w-[180px] sm:w-[240px] lg:w-[286px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
