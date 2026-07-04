import {
  Award,
  Gavel,
  BriefcaseBusiness,
  Zap,
} from "lucide-react";

import leaderboard from "../assets/images/leaderboard.png";

const advantages = [
  {
    icon: Award,
    title: "National Recognition",
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: Gavel,
    title: "Fair Judging",
    desc: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Ops",
    desc: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: Zap,
    title: "High - Energy Eco",
    desc: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

const Advantages = () => {
  return (
    <section className="bg-[#1b1b1b] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <div>

            <p className="text-lg font-semibold uppercase tracking-wider text-[#ff4d4d]">
              Why Register ?
            </p>

            <h2
              className="mt-2 text-[32px] font-bold uppercase text-white sm:text-[40px] lg:text-[46px]"
              style={{ fontFamily: "Oxanium" }}
            >
              The League Advantage
            </h2>

            <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">

              {advantages.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
                  >

                    <div className="text-[#ff4d4d] mt-1">

                      <Icon size={42} strokeWidth={2} />

                    </div>

                    <div>

                      <h3
                        className="text-[22px] font-semibold uppercase text-white sm:text-[26px] lg:text-[30px]"
                        style={{ fontFamily: "Oxanium" }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-[500px] text-base leading-7 text-gray-400 sm:text-lg">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={leaderboard}
              alt="Leaderboard"
              className="w-full max-w-[600px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Advantages;