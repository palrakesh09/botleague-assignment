import nitDelhi from "../assets/images/nit-delhi.png";
import indianBit from "../assets/images/indian-bit.png";
import nitSilchar from "../assets/images/nit-silchar.png";
import delhiDev from "../assets/images/delhi-dev.png";
import iitBombay from "../assets/images/iit-bombay.png";
import generalRobotics from "../assets/images/general-robotics.png";

const sponsors = [
  {
    image: nitDelhi,
    title: "NIT DELHI",
  },
  {
    image: indianBit,
    title: "INDIAN BIT",
  },
  {
    image: nitSilchar,
    title: "NIT SILCHAR",
  },
  {
    image: delhiDev,
    title: "ROBO COMPANY",
  },
  {
    image: iitBombay,
    title: "IIT BOMBAY",
  },
  {
    image: generalRobotics,
    title: "ROBO COMPANY",
  },
];

const Sponsors = () => {
  return (
    <section id="ranks" className="bg-black py-24 md:py-32 flex items-center justify-center">

      <div className="max-w-[1280px] mx-auto px-6 w-full">

        {/* Heading */}

        <h2
          className="text-white uppercase text-[34px] mb-16 md:mb-20"
          style={{ fontFamily: "Oxanium" }}
        >
          Sponsors
        </h2>

        {/* Logos */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {sponsors.map((item, index) => (

            <div
              key={index}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 group"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 sm:w-[90px] sm:h-[90px] object-contain grayscale group-hover:grayscale-0 transition"
              />

              <h3
                className="text-gray-300 uppercase text-xl sm:text-2xl lg:text-[28px] break-words"
                style={{ fontFamily: "Oxanium" }}
              >
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Sponsors;