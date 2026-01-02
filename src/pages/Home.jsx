import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import GetStarted from "../components/home/GetStarted";
import TrustedBy from "../components/home/TrustedBy";

const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <div id="services" className="bg-(--body-bg) scroll-mt-26">
        <Services />
        <WhyChooseUs />
        <GetStarted />
        <TrustedBy />
      </div>
    </div>
  );
};

export default Home;
