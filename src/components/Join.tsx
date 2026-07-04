const joinCards = [
  {
    title: "Become In Judge",
  },
  {
    title: "Volunteer",
  },
  {
    title: "Community Member",
  },
];

const Join = () => {
  return (
    <section id="community" className="bg-[#000000] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Heading */}

        <h2
          className="mb-10 text-[32px] font-bold uppercase text-white sm:text-[40px] lg:text-[52px]"
          style={{ fontFamily: "Oxanium" }}
        >
          Join The Ecosystem
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {joinCards.map((card, index) => (

            <div
              key={index}
              className="bg-[#1f1f1f] border border-[#4a4a4a] rounded-xl p-6 h-full flex flex-col hover:border-[#ff4d4d] transition-all duration-300"
            >

              {/* Card Heading */}

              <h3
                className="mb-8 text-[22px] uppercase text-white sm:text-[24px] lg:text-[26px]"
                style={{ fontFamily: "Oxanium" }}
              >
                {card.title}
              </h3>

              {/* Inputs */}

              <div className="space-y-4 flex-grow">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 rounded-md bg-[#2b2b2b] border border-[#555] text-white placeholder:text-gray-400 outline-none focus:border-[#ff4d4d] transition"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full h-12 px-4 rounded-md bg-[#2b2b2b] border border-[#555] text-white placeholder:text-gray-400 outline-none focus:border-[#ff4d4d] transition"
                />

                <input
                  type="text"
                  placeholder="Enroll"
                  className="w-full h-12 px-4 rounded-md bg-[#2b2b2b] border border-[#555] text-white placeholder:text-gray-400 outline-none focus:border-[#ff4d4d] transition"
                />

              </div>

              {/* Button */}

              <button className="mt-8 h-14 w-full rounded-md bg-[#ff4d4d] text-[20px] font-semibold uppercase text-white transition-all duration-300 hover:bg-red-600 sm:text-[22px] lg:text-[24px]">
                Sign Up
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Join;