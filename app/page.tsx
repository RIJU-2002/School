import Banner from "./components/Banner/index";
import Features from "./components/Work/index";
import Expert from "./components/Expert/index";
import Gallery from "./components/Gallery/index";
import Admission from "./components/Admission/Admission";
import Teachers from "./components/Teachers/index";
import Staff from "./components/Staff/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Expert />
      <Staff />
      <Teachers />
      <Gallery />
      <Admission />
    </main>
  );
}
