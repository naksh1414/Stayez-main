import Hero from "../../Components/Home/Hero";
import Chill from "../../Components/Home/Chill";
import HostelPg from "../../Components/Home/Hostel-pg";
import Stay from "../../Components/Home/Stay";
import Slideshow from "../../Components/Home/SlideShow";
const Home = () => {
  return (
    <main>
      <Hero></Hero>
      <Slideshow />
      <Chill />
      <HostelPg />
      <Stay />
    </main>
  );
};

export default Home;
