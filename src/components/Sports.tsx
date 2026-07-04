import race from "../assets/images/robo-race.jpg";
import line from "../assets/images/line-flower.jpg";
import rc from "../assets/images/rc-racing.jpg";
import drone from "../assets/images/drone-racing.jpg";
import hockey from "../assets/images/robo-hockey.jpg";
import war from "../assets/images/robo-war.jpg";
import circuit from "../assets/images/circuit-bg.png";

const sports = [
  {
    title: "Robo Race",
    image: race,
  },
  {
    title: "Line Follower",
    image: line,
  },
  {
    title: "RC Racing",
    image: rc,
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    image: drone,
  },
  {
    title: "Robo Hockey",
    image: hockey,
  },
  {
    title: "Robo War",
    image: war,
  },
];

const Sports = () => {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-16 sm:py-20 lg:py-24">

      {/* Circuit Background */}

      <img
        src={circuit}
        alt=""
        className="absolute bottom-0 right-150 w-[300px] opacity-50 pointer-events-none select-none"
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        <p className="text-[#ff4d4d] font-semibold tracking-wider uppercase">
          Sports
        </p>

        <h2
          className="mt-2 text-[32px] font-bold uppercase text-white sm:text-[40px] lg:text-[44px]"
          style={{ fontFamily: "Oxanium" }}
        >
          Competition Disciplines
        </h2>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {sports.map((item, index) => (

            <div
              key={index}
              className="rounded-xl overflow-hidden bg-[#242424] border border-gray-700 hover:border-[#ff4d4d] transition duration-300 group cursor-pointer"
            >

              <div className="h-[180px] overflow-hidden sm:h-[200px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="py-5 px-4 text-center">

                <h3
                  className={`text-white uppercase ${
                    item.title.length > 18
                      ? "text-[16px] sm:text-[18px]"
                      : "text-[20px] sm:text-[24px]"
                  }`}
                  style={{ fontFamily: "Oxanium" }}
                >
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Sports;