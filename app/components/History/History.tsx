"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";



const History = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6 " id="history-section">
      <div className='mx-auto max-w-7xl py-40 px-6' id="mission-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-dblue text-2xl font-bold mb-3 ls-51 uppercase'>Our History</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>How it all started?</p>
                    </Fade>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-9 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-2xl lg:text-2xl mb-5 text-lightgrey md:4px lg:text-start text-center">
                            The main objective of the School is to spread the light of
                            Child Education in each and every house of the locality. Though it
                            is basically a bengali medium school but special emphasis is given
                            on the subject 'English' so that a solid foundation of English
                            Knowledge is formed among the children from the very beginning.
                            <br />
                            Apart from English other subjects are also taught in a very
                            careful manner by expert and experienced teachers. We always
                            ensure quality and joyful learning for all the children.
                            <br />
                            The School has its own spacious play ground, sufficient classroom
                            , facility of safe drinking water, good sitting arrangement and
                            hygenic latrine facility. The School is fully protected by it's
                            long & highwall boundary. Our student teacher ratio is 1:14 which
                            is ideal for an instituition.
                            </h1>
                        </Fade>
                    </div>
                    <div className='col-span-3 flex flex-col justify-center'>
                      <Fade direction={'left'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                      <Image src="/images/History/history.png" alt="nothing" width={900} height={700} style={{borderRadius:'20px'}} />
                      </Fade>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default History;


