import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import cvEN from "../../public/images/cv/cv_imagen.png";
import { EmailIcon, LocationPinIcon, LinkArrow } from "@/components/Icons";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const contact = () => {
  return (
    <>
      <Head>
        <title>WaltGreenwich | Contact Page</title>
        <meta name="contact" content="contact page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Contact"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-2 gap-16 px-24 md:grid-cols-1 md:px-8">
            {/* Contenedor del CV */}
            <div className="flex flex-col items-center order-1 md:order-2">
              <div className="relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <a
                  href="/images/cv/cv_imagen.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={cvEN}
                    alt="Walt Greenwich"
                    className="w-60 h-auto rounded-2xl cursor-pointer"
                  />
                </a>
              </div>
              {/* Botón debajo de la imagen */}
              <Link
                href="https://drive.google.com/file/d/10LIdfPK9sEW7LPJHiz4TIVo3yJ9bCp1q/view?usp=drive_link"
                target={"_blank"}
                className="mt-4 flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light dark:bg-light dark:text-dark hover:dark:border-light border-2 border-solid border-transparent hover:border-dark"
              >
                Download CV <LinkArrow className="w-5 ml-2" />
              </Link>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col items-start gap-6 dark:text-light order-2 md:order-1">
              <p className="my-4 font-medium">
                I’m excited to connect and collaborate on meaningful
                opportunities. Feel free to reach out if you value dedication,
                creativity, and a results-driven approach. Let’s explore how I
                can contribute to your team’s success and help you achieve your
                goals.
              </p>
              <div className="flex flex-col items-start">
                <div className="flex items-center md:text-sm">
                  <EmailIcon className="w-6 h-6 mr-2 md:w-4 md:mr-1.5" />
                  <span>waltgreenwich.devsec@gmail.com</span>
                </div>
                <div className="flex items-center md:text-sm">
                  <LocationPinIcon className="w-4 mr-2 md:mr-1.5" />
                  <span>
                    Currently based in{" "}
                    <span className="font-bold">Lima, Perú</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
