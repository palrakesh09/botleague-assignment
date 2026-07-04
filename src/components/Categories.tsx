import {
  FaLightbulb,
  FaUserCog,
  FaBrain,
} from "react-icons/fa";
import { PiBarcodeBold } from "react-icons/pi";

const categories = [
  {
    icon: <PiBarcodeBold />,
    title: "MINI\nMAKERS",
    description: "Where Creativity Meets Logic.",
    active: true,
  },
  {
    icon: <FaLightbulb />,
    title: "JUNIOR\nINNOVATORS",
    description: "Engineering & Strategy Fundamentals.",
    active: false,
  },
  {
    icon: <FaUserCog />,
    title: "YOUNG\nENGINEERS",
    description: "Advanced Wireless & Autonomous Control.",
    active: false,
  },
  {
    icon: <FaBrain />,
    title: "ROBO\nMINDS",
    description: "Elite Professional Sports & Robotics.",
    active: false,
  },
];

const Categories = () => {
  return (
    <section id="programs" className="bg-[#1b1b1b] py-16 sm:py-20 lg:py-24">

      <div className="max-w-[1250px] mx-auto px-5">

        {/* Heading */}

        <h2
          className="mb-10 text-[32px] font-bold uppercase text-white sm:text-[40px] lg:text-[44px]"
          style={{ fontFamily: "Oxanium" }}
        >
          Categories
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (

            <div
              key={index}
              className={`cursor-pointer rounded-xl p-6 transition-all duration-300 sm:p-8
              
              ${
                item.active
                  ? "border border-[#d4a300] bg-[#232323]"
                  : "border border-[#4a4a4a] bg-[#262626] hover:border-[#d4a300]"
              }
              
              `}
            >

              {/* Icon */}

              <div
                className={`mb-6 text-[56px] sm:text-[64px] lg:text-[70px] ${
                  item.active ? "text-[#ffc400]" : "text-[#ffc400]"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3
                className="whitespace-pre-line text-[22px] font-semibold uppercase leading-tight text-white sm:text-[24px] lg:text-[28px]"
                style={{ fontFamily: "Oxanium" }}
              >
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-4 min-h-[72px] text-[15px] leading-7 text-gray-400 sm:text-[16px] lg:text-[17px]">
                {item.description}
              </p>

              {/* Learn More */}

              <button className="mt-6 text-[#ff4d4d] uppercase tracking-wide font-semibold hover:text-red-400 transition flex items-center gap-2">

                Learn More

                <span className="text-xl">
                  →
                </span>

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;