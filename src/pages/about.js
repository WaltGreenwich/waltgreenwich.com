import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePick from "../../public/images/profile/developer-profile-5.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>WaltGreenwich | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Building Modern Web Experiences!"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-center justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="my-4 font-medium">
                Hi, I’m Walter Greenwich, a Frontend Developer focused on
                creating modern, user-centered websites that are both visually
                appealing and intuitive.
              </p>
              <p className="my-4 font-medium">
                With a background in science and experience as a sales
                representative, I’ve honed skills in communication,
                problem-solving, and project management. I specialize in React,
                Tailwind CSS, and Next.js to craft high-performance, optimized
                digital solutions.
              </p>
              <p className="my-4 font-medium">
                From landing pages to e-commerce platforms, I bring a passion
                for responsive design and user-centered thinking to every
                project. Let’s collaborate to turn your vision into reality.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePick}
                alt="Walt Greenwich"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
