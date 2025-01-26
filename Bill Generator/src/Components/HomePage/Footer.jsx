import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full border-t py-10 sm:py-16 px-[5.5vw] box-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Logo and Contact Section */}
          <div>
            <section className="text-lg font-bold border-gray-200 border-2 px-8 py-2 rounded-xl text-center">
              <h4>LOGO</h4>
            </section>
            <div className="mt-8">
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

          {/* Links Sections */}
          <div className="flex flex-wrap justify-between lg:gap-16 gap-8 w-full lg:w-[55%]">
            {/* Useful Links Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                Useful Links
              </h4>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <ul className="space-y-2 text-sm text-gray-600">
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
                      Daily Helper Bill
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
                <ul className="space-y-2 text-sm text-gray-600">
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
                      Recharge Receipt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Medical Bill
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Stationery Bill
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

            {/* Company Section */}
            <div>
              <h4 className="text-base font-semibold text-gray-800">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
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
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; Thinkprocess. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
