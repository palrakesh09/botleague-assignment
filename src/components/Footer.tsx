import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const quickLinksLeft = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksRight = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

const Footer = () => {
  return (
    <footer className="border-t border-[#2d2d2d] bg-black">

      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:py-20 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <div>

            <h3
              className="text-white uppercase text-[28px] mb-8"
              style={{ fontFamily: "Oxanium" }}
            >
              Quick Links
            </h3>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">

              <ul className="space-y-4">

                {quickLinksLeft.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#ff4d4d] transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}

              </ul>

              <ul className="space-y-4">

                {quickLinksRight.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#ff4d4d] transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col lg:items-end">

            <h3
              className="text-white uppercase text-[28px] mb-8"
              style={{ fontFamily: "Oxanium" }}
            >
              Social Media
            </h3>

            <div className="flex flex-wrap gap-4 sm:gap-6">

              <a
                href="#"
                className="w-12 h-12 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d4d] transition"
              >
                <FaYoutube size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d4d] transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d4d] transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-lg border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d4d] transition"
              >
                <FaTwitter size={22} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;