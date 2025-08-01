import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Introduction from "@/components/sections/introduction";
import Methodology from "@/components/sections/methodology";
import Framework from "@/components/sections/framework";
import Implementation from "@/components/sections/implementation";
import Results from "@/components/sections/results";
import Authors from "@/components/sections/authors";
import FutureWork from "@/components/sections/future-work";
import Resources from "@/components/sections/resources";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      <Hero />
      <Introduction />
      <Methodology />
      <Framework />
      <Implementation />
      <Results />
      <Authors />
      <FutureWork />
      <Resources />
      <Footer />
    </div>
  );
}
