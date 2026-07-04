import Navbar from "./../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import Competitions from "../components/Competitions.tsx";
import Journey from "../components/Journey.tsx";
import About from "../components/About.tsx";
import Categories from "../components/Categories.tsx";
import Sports from "../components/Sports.tsx";
import Advantages from "../components/Advantages.tsx";
import Join from "../components/Join.tsx";
import Sponsors from "../components/Sponsors.tsx";
import Footer from "../components/Footer.tsx";

const Home = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Competitions />
      <Journey />
      <About />
      <Categories />
      <Sports />
      <Advantages />
      <Join />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;