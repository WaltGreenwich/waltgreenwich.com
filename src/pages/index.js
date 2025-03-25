import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic1 from "../../public/images/profile/developer-profile-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:px-8">
        <Layout className="pt-0 md:p-16" pageNamespace="Home">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* Imagen del perfil */}
            <div className="w-1/2 md:w-full mx-8">
              <Image
                src={profilePic1}
                alt="Walter Greenwich"
                className="w-full h-auto rounded-2xl lg:hidden md:inline-block md:w-full md:pb-2 md:mt-0"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Contenido del Hero */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={t("title")}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {t("description")}
              </p>

              {/* Botones de CV y Email */}
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1htdV3hIiuaRRx5ifRTgH89Sdq84UfJf3/view?usp=sharing"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-4 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CV <LinkArrow className="w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:walter.greenwich@gmail.com"
                  className="flex items-center
                  border-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  EMAIL
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* Componente para contratarme */}
        <HireMe />

        {/* Icono de bombilla */}
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Lightbulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}

// 📌 Cargar traducciones correctamente
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
