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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-10 md:gap-x-16">

          {sponsors.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-5 group"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-[130px] h-[130px] object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />

              <h3
                className="text-gray-300 uppercase text-[28px]"
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