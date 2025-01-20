import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" relative w-[100vw] -left-32 border-t py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-[8vw]">
        <div className="flex justify-between gap-8">
          {/* Logo and Contact Section */}
          <div>
            <section className="text-lg font-bold border-gray-200 w-[100%] border-2 px-8 py-2 rounded-xl text-center">
              <h4>LOGO</h4>
            </section>
            <div className="mt-16 ml-1">
              <p className="text-lg font-medium">Contact us</p>
              <p className="text-sm text-gray-600">Koramangala,</p>
              <p className="text-sm text-gray-600">Bangalore, 560034 India</p>
              <p className="text-sm text-gray-600">
                Mail: portal@billgenerator.in
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-lg hover:text-gray-700">
                <FaFacebook />
              </a>
              <a href="#" className="text-lg hover:text-gray-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-lg hover:text-gray-700">
                <FaXTwitter />
              </a>
              <a href="#" className="text-lg hover:text-gray-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-lg hover:text-gray-700">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex w-[55%] justify-between">
            {/* Useful Links Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Useful Links
              </h4>
              <div className="flex gap-10">
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Fuel Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Driver Salary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Daily Helper bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Rent Receipt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Book Invoice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Internet Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Restaurant Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      LTA Receipt
                    </a>
                  </li>
                </ul>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      E-Commerce Invoice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      General Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Recharge Recipt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Medical Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Stationary Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Cab Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Mart Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Gym Bill
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-800">Pricing</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Pay as you go
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-800">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm ">
          <p>&copy; Thinkprocess. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900 underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
