import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Admission from './components/Admission/Admission';
import Teachers from './components/Teachers/index'



export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Expert />
      <Teachers/>
      <Gallery />
      <Admission />
    </main>
  )
}
