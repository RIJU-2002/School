import Banner from "./components/Banner/index";
import Mission from "./components/Mission/index"
import Features from "./components/Work/index";
import Expert from "./components/Expert/index";
import Gallery from "./components/Gallery/index";
import Notice from "./components/Notice/notice";
import Admission from "./components/Admission/Admission";
import Teachers from "./components/Teachers/index";
import Staff from "./components/Staff/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mission/>
      <Features />
      <Expert />
      <Staff />
      <Teachers />
      <Gallery />
      <Notice/>
      <Admission />
    </main>
  );
}
