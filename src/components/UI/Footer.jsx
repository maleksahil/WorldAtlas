import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace className="w-8 h-8 text-purple-600" />,
    IoCallSharp: <IoCallSharp className="w-8 h-8 text-purple-600" />,
    TbMailPlus: <TbMailPlus className="w-8 h-8 text-purple-600" />,
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      {/* Contact Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact flex items-center space-x-4" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-gray-400">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Copyright Section */}
      <div className="copyright-area bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Copyright Text */}
            <div className="copyright-text text-center md:text-left">
              <p className="text-gray-400">
                Copyright &copy; 2024, All Rights Reserved{" "}
                <NavLink
                  to="https://thapatechnical.shop/"
                  target="_blank"
                  className="text-purple-600 hover:text-purple-500"
                >
                  ThapaTechnical
                </NavLink>
              </p>
            </div>

            {/* Footer Menu */}
            <div className="footer-menu text-center md:text-right">
              <ul className="flex space-x-4 justify-center md:justify-end">
                <li>
                  <NavLink
                    to="/"
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://www.instagram.com/thapatechnical/"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://thapatechnical.shop/source-code"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;