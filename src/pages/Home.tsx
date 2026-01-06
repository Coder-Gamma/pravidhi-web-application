import { Blog } from "@/components/features/blog/component/Blog";
import { Hero } from "@/components/features/home/components/Hero";
import { Services } from "@/components/features/home/components/Services";
import { RootLayout } from "@/layouts/RootLayout";

const Home = () => {
  return (
    <RootLayout>
      <Hero />
      <Services />
      <Blog />
    </RootLayout>
  );
};

export default Home;
