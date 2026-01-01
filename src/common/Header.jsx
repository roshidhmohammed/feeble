import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { headerImages } from "../utils/constants";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="font-medium text-[16px] leading-5.5 text-[#8C97A8] hover:text-black transition-colors"
  >
    {children}
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center pt-3 pb-3 pl-8 pr-3 rounded-[200px] lg:mx-90 mt-10 bg-[#FFFFFF] shadow-sm relative">
        <Link to="/">
          <img src={headerImages.logo} alt="coup." className="h-8 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">How it Works</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">Use Case</NavLink>
          <NavLink to="/">FAQ</NavLink>
        </div>

        {/* Desktop Button */}
        <button className="md:flex hidden px-4.5 py-2.75 bg-[#007AFF] rounded-[43.62px] text-white font-medium">
          Contact Sales
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden mr-3 cursor-pointer">
          {!open ? (
            <GiHamburgerMenu size={22} onClick={() => setOpen(!open)} />
          ) : (
            <IoMdClose size={22} onClick={() => setOpen(!open)} />
          )}
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute left-2 right-2 top-23 z-50 mt-3 px-6 flex flex-col py-4 bg-white rounded-2xl shadow-lg space-y-4 text-center">
          <NavLink to="/">How it Works</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">Use Case</NavLink>
          <NavLink to="/">FAQ</NavLink>
          <NavLink to="/">Contact Sales</NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
