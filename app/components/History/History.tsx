"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";



const History = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-40 px-6 " id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-dblue  text-lg font-semibold mb-3 ls-51 uppercase">
              History
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-2xl   bg-lightblue font-semibold text-lightgrey py-5 sm:py-10 rounded-xl text-center mb-5">
              The main objective of the School is to spread the light of child
              Child Education in each and every house of the locality. Though it
              is basically a bengali medium school but special emphasis is given
              on the subject 'English' so that a solid foundation of English
              Knowledge is formed among the children from the very beginning.
              <br />
              Apart from English other subjects are also taught in a very
              careful manner by expert and experienced teachers. We always
              ensure quality and joyful learning to all the children.
              <br />
              The School has its own spacious play ground , sufficient classroom
              ,facility of safe drinking water,good sitting arrangement and
              hygenic latrine facility. The School is fully protected by it's
              long & highwall boundary. Our student teacher ratio is 1:14 which
              is too much ideal for an instituition.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default History;
