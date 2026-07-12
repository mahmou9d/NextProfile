import { navItems } from "@/data";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Grid from "@/components/sections/Grid";
import Clients from "@/components/sections/Clients";
import Approach from "@/components/sections/Approach";
import ContactUs from "@/components/sections/ContactUs";
// import Experience from "@/components/sections/Experience";

const Home = () => {
  return (
    <main className="relative bg-gray-50 dark:bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Header navItems={navItems} />
        <Hero />
        <Grid />
        <Clients />
        <Approach />
        <ContactUs />
        {/* <Experience /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
