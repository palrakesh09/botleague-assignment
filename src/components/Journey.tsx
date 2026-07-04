import {
  FaTools,
  FaLandmark,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaTools />,
    step: "STEP 1",
    title: "BUILD YOUR",
    subtitle: "TEAM",
  },
  {
    icon: <FaLandmark />,
    step: "STEP 2",
    title: "COMPETE ACROSS",
    subtitle: "INDIA",
  },
  {
    icon: <FaChartLine />,
    step: "STEP 3",
    title: "EARN NATIONAL",
    subtitle: "RANKING & VALUE",
  },
  {
    icon: <FaUsers />,
    step: "STEP 4",
    title: "JOIN THE",
    subtitle: "LEAGUE",
  },
];

const Journey = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">

      <div className="max-w-[1250px] mx-auto px-5">

        {/* Heading */}

        <p
          className="text-[#ff4d4d] uppercase text-center text-xl"
          style={{ fontFamily: "Oxanium" }}
        >
          User Journey
        </p>

        <h2
          className="mt-2 text-center text-[32px] font-bold uppercase text-white sm:text-[42px] lg:text-[52px]"
          style={{ fontFamily: "Oxanium" }}
        >
          Your Path To The League
        </h2>

        <p className="mt-2 text-center text-base text-gray-500 sm:text-lg">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Steps */}

        <div className="relative mt-12 sm:mt-16 lg:mt-20">

          {/* Blue Line */}

          <div className="hidden md:block absolute top-[60px] left-[13%] right-[13%] h-[3px] bg-blue-600"></div>

          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

            {steps.map((item) => (

              <div
                key={item.step}
                className="flex flex-col items-center text-center"
              >

                {/* Circle */}

                <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full border-[6px] border-[#333] bg-[#222] sm:h-[110px] sm:w-[110px] lg:h-[120px] lg:w-[120px] lg:border-[7px]">

                  <div className="absolute inset-2 rounded-full border-2 border-blue-600"></div>

                  <div className="text-[40px] text-white z-10">
                    {item.icon}
                  </div>

                </div>

                {/* Vertical Line */}

                <div className="h-8 w-[2px] bg-gray-600 sm:h-10"></div>

                <p className="text-[#ff4d4d] uppercase text-lg">
                  {item.step}
                </p>

                <h4 className="mt-2 text-[22px] font-semibold leading-tight text-white sm:text-[24px] lg:text-[28px]">
                  {item.title}
                  <br />
                  {item.subtitle}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Journey;