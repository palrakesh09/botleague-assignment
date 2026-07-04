import {
  FaClipboardList,
  FaMicrochip,
  FaBriefcase,
  FaCog,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    desc: '"From one-off events to a year-round competitive season."',
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    desc: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    desc: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    desc: '"Turning arena victories into real-world industry opportunities."',
  },
];

const About = () => {
  return (
    <section className="bg-[#1d1b1b] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-[1250px] px-5">

        {/* Heading */}

        <h2
          className="mb-10 text-[32px] font-bold uppercase text-white sm:text-[40px] lg:text-[44px]"
          style={{ fontFamily: "Oxanium" }}
        >
          What is BotLeague?
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">

            {features.map((item) => (

              <div key={item.number}>

                <h3 className="text-3xl font-bold text-[#ff4d4d] sm:text-4xl">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-[22px] font-semibold leading-tight text-white sm:text-[26px] lg:text-[30px]">
                  {item.title}
                </h4>

                <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

          {/* Right Illustration */}

          <div className="flex justify-center">

            <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]">

              {/* Center Circle */}

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-500 sm:h-24 sm:w-24 lg:h-28 lg:w-28">

                <FaRocket className="text-white text-4xl" />

              </div>

              {/* Top Left */}

              <div className="absolute left-4 top-3 flex h-16 w-16 items-center justify-center rounded-xl border border-gray-500 sm:left-8 sm:top-4 sm:h-20 sm:w-20">

                <FaClipboardList className="text-gray-300 text-3xl" />

              </div>

              {/* Top Right */}

              <div className="absolute right-4 top-3 flex h-16 w-16 items-center justify-center rounded-full border border-gray-500 sm:right-8 sm:top-4 sm:h-20 sm:w-20">

                <FaCog className="text-gray-300 text-3xl" />

              </div>

              {/* Bottom Left */}

              <div className="absolute bottom-6 left-4 flex h-16 w-16 items-center justify-center rounded-xl border border-gray-500 sm:bottom-8 sm:left-8 sm:h-20 sm:w-20">

                <FaBriefcase className="text-gray-300 text-3xl" />

              </div>

              {/* Bottom Right */}

              <div className="absolute bottom-6 right-4 flex h-16 w-16 items-center justify-center rounded-full border border-gray-500 sm:bottom-8 sm:right-8 sm:h-20 sm:w-20">

                <FaMicrochip className="text-gray-300 text-3xl" />

              </div>

              {/* Connecting Lines */}

              <div className="absolute left-[95px] top-[75px] w-[90px] h-[2px] bg-gray-600 rotate-[18deg]" />

              <div className="absolute right-[95px] top-[75px] w-[90px] h-[2px] bg-gray-600 -rotate-[18deg]" />

              <div className="absolute left-[95px] bottom-[75px] w-[90px] h-[2px] bg-gray-600 -rotate-[18deg]" />

              <div className="absolute right-[95px] bottom-[75px] w-[90px] h-[2px] bg-gray-600 rotate-[18deg]" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;