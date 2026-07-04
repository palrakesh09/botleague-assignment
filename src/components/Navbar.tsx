import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/botleague-logo.png";

const navLinks = [
  { label: "Events", target: "events" },
  { label: "Programs", target: "programs" },
  { label: "Community", target: "community" },
  { label: "Ranks", target: "ranks" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Events");

  const handleNavClick = (target: string, label: string) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1b1b1b] bg-[#0b0b0b]">
      <div className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between px-4 sm:h-[90px] sm:px-8">

        {/* Logo */}
        <img
          src={logo}
          alt="BotLeague"
          className="h-7 object-contain sm:h-10"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12">

          {navLinks.map((link) => (

            <button
              key={link.label}
              onClick={() => handleNavClick(link.target, link.label)}
              className={`pb-1 text-[15px] transition ${
                activeLink === link.label
                  ? "border-b-2 border-[#ff4d4d] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </button>

          ))}

        </nav>

        {/* Buttons */}

        <div className="hidden md:flex items-center gap-4">

          <button className="px-6 py-2 border border-gray-600 rounded-md hover:border-white">
            Login
          </button>

          <button className="bg-[#ff4d4d] hover:bg-red-600 px-6 py-2 rounded-md">
            Register Now
          </button>

        </div>

        {/* Mobile */}

        <button
          className="text-lg text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="border-t border-gray-800 bg-[#0b0b0b] p-5 space-y-4 md:hidden">

          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target, link.label)}
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;