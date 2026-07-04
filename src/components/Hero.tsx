import heroBg from "../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[760px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20"></div>

      {/* Hero Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

        <div className="max-w-[520px]">

          <h1
            className="text-[36px] leading-[45px] font-black uppercase text-white sm:text-[46px] sm:leading-[58px] md:text-[55px] md:leading-[78px]"
            style={{ fontFamily: "Oxanium" }}
          >
            INDIA'S ULTIMATE ROBOTICS ARENA
          </h1>

          <p className="mt-6 text-[16px] leading-7 text-gray-300 sm:text-[18px] sm:leading-8 md:text-[20px]">
            Build.Compete.Rank.The National
            <br/>
            Ecosystem for Robotics Arena
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-5">

            <button className="rounded-md bg-[#ff4d4d] px-5 py-3 text-sm font-semibold transition hover:bg-red-600 sm:px-8 sm:py-4 sm:text-base">
              CREATE ACCOUNT
            </button>

            <button className="rounded-md border border-white px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-black sm:px-8 sm:py-4 sm:text-base">
              EXPLORE EVENTS
            </button>

          </div>

          {/* Live Badge */}
      <div className="absolute right-4 top-4 z-20 flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-center gap-2 rounded-xl border border-gray-700 bg-[#141414]/95 px-2 py-2 text-[11px] sm:right-6 sm:top-6 sm:text-sm md:right-10 md:top-8 md:max-w-[620px] md:gap-3 md:px-5 md:text-base">

        <span className="font-bold text-red-500">
          ● LIVE :
        </span>

        <span className="text-center text-white">
          Episode 14 - Bengaluru Regionals
        </span>

        <span className="font-semibold text-red-500">
          WATCH LIVE
        </span>

      </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;