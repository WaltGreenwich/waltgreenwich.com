import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic1 from "../../public/images/profile/developer-profile-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Walter Greenwich | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Walter Greenwich's portfolio. Explore innovative web solutions developed with React.js, Next.js, and modern design principles. Let's build impactful digital experiences together."
        />
      </Head>

      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:px-8">
        <Layout className="pt-0 md:p-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full mx-8">
              <Image
                src={profilePic1}
                alt="WaltGreen"
                className="w-full h-auto rounded-2xl lg:hidden md:inline-block md:w-full md:pb-2 md:mt-0"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Transforming Ideas Into Impactful Digital Experiences."
                className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a full-stack developer with expertise in React.js, Next.js,
                and modern web design, I specialize in creating functional and
                visually appealing web applications. Explore my recent projects,
                where I combine design, technology, and usability to deliver
                innovative solutions.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1htdV3hIiuaRRx5ifRTgH89Sdq84UfJf3/view?usp=sharing"
                  target={"_blanck"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-4 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                >
                  CV <LinkArrow className="w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:walter.greenwich@gmail.com"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                >
                  EMAIL
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="WaltGreenwich"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
