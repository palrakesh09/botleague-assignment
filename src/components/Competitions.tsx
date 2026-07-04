const Competitions = () => {
  const upcomingEvents = [
    {
      title: "Event in Mumbai",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
    {
      title: "Event in Delhi",
      date: "11/11/25",
      location: "BKC",
      category: "Lorem",
    },
  ];

  const results = [
    "Bengaluru Regionals",
    "Bengaluru Regionals",
    "Bengaluru Regionals",
  ];

  return (
    <section id="events" className="relative overflow-hidden bg-[#1b1b1b] py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-red-500/10 blur-[170px]" />

      <div className="relative max-w-[1250px] mx-auto px-5">

        {/* Heading */}

        <h2
          className="mb-10 text-[30px] font-bold uppercase text-white sm:text-[36px] lg:text-[42px]"
          style={{ fontFamily: "Oxanium" }}
        >
          Competitions & Events
        </h2>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">

          {/* ================= LIVE NOW ================= */}

          <div>

            <h3
              className="text-[#ff4d4d] uppercase text-[24px] mb-5"
              style={{ fontFamily: "Oxanium" }}
            >
              Live Now
            </h3>

            <div className="bg-[#222222] border border-[#444] rounded-lg p-5">

              <div className="flex justify-between items-start">

                <div>

                  <h4 className="text-[22px] font-semibold leading-none text-white sm:text-[24px] lg:text-[28px]">
                    Bengaluru Regionals
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Lorem Ipsum
                  </p>

                </div>

                <span className="bg-[#ff4d4d] text-white text-xs px-2 py-1 rounded">
                  Ongoing
                </span>

              </div>

              <hr className="border-gray-600 my-5" />

              {/* Bracket */}

              <div className="relative h-[240px]">

                {/* Left */}

                <div className="absolute left-0 top-3 w-20 h-6 rounded bg-gray-600"></div>
                <div className="absolute left-0 top-16 w-20 h-6 rounded bg-gray-600"></div>
                <div className="absolute left-0 top-32 w-20 h-6 rounded bg-gray-600"></div>
                <div className="absolute left-0 top-45 w-20 h-6 rounded bg-gray-600"></div>

                {/* Middle */}

                <div className="absolute left-[105px] top-10 w-20 h-6 rounded bg-gray-600"></div>

                <div className="absolute left-[105px] top-[145px] w-20 h-6 rounded bg-gray-600"></div>

                {/* Final */}

                <div className="absolute right-0 top-[82px] w-20 h-6 rounded bg-gray-600"></div>

                {/* SVG */}

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 280 240"
                >
                  <path
                    d="M80 15 H105 V42 H105"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M80 69 H105 V42"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M80 133 H105 V158"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M80 187 H105 V158"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M185 42 H220 V98"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M185 158 H220 V98"
                    stroke="#ff4d4d"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

              </div>

            </div>

          </div>

          {/* ================= UPCOMING ================= */}

          <div>

            <h3
              className="text-white uppercase text-[24px] mb-5"
              style={{ fontFamily: "Oxanium" }}
            >
              Upcoming
            </h3>

            {upcomingEvents.map((event) => (

              <div
                key={event.title}
                className="bg-[#222222] border border-[#444] rounded-lg p-5 mb-5"
              >

                <h4 className="text-white text-[28px] font-semibold mb-5">
                  {event.title}
                </h4>

                <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">

                  <div>

                    <p className="text-gray-500">
                      Date
                    </p>

                    <p className="text-white">
                      {event.date}
                    </p>

                  </div>

                  <div>

                    <p className="text-gray-500">
                      Location
                    </p>

                    <p className="text-white">
                      {event.location}
                    </p>

                  </div>

                  <div>

                    <p className="text-gray-500">
                      Category
                    </p>

                    <p className="text-white">
                      {event.category}
                    </p>

                  </div>

                </div>

                <button className="w-full mt-6 py-3 rounded bg-[#ff4d4d] hover:bg-red-600 transition font-semibold text-white">
                  REGISTER
                </button>

              </div>

            ))}

          </div>

          {/* ================= RESULTS ================= */}

          <div>

            <h3
              className="text-white uppercase text-[24px] mb-5"
              style={{ fontFamily: "Oxanium" }}
            >
              Past Results
            </h3>

            <div className="bg-[#222222] border border-[#444] rounded-lg p-5">

              {results.map((item, index) => (

                <div key={index}>

                  <h4 className="text-[22px] font-semibold text-white sm:text-[24px] lg:text-[28px]">
                    {item}
                  </h4>

                  <p className="text-gray-400 mt-1">
                    Lorem Ipsum
                  </p>

                  {index !== results.length - 1 && (
                    <hr className="border-gray-600 my-5" />
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Competitions;