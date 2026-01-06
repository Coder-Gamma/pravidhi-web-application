import { Blog } from "@/components/features/blog/component/Blog";
import { Hero } from "@/components/features/home/components/Hero";
import { Services } from "@/components/features/home/components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
    </>
  );
};

export default Home;
