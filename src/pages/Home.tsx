import { Blog } from "@/components/features/blog/component/Blog";
import { Hero } from "@/components/features/home/components/Hero";
import { Services } from "@/components/features/home/components/Services";
import Testimonial from "@/components/features/home/components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <Testimonial />
    </>
  );
};

export default Home;
