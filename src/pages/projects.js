import { useTranslations } from "next-intl";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Badge } from "@/components/Badges";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/gericht-restaurant.png";
import project2 from "../../public/images/projects/nike-webclone.png";
import project3 from "../../public/images/projects/brainwave.png";
import project4 from "../../public/images/projects/movieapp.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, link, img, github, name }) => {
  const t = useTranslations("Projects");
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <div>
          {(Array.isArray(name) ? name : [name]).map((tech) => (
            <Badge key={tech} name={tech} />
          ))}
        </div>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, name }) => {
  console.log({ title, type, img, link, github });
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark p-6 relative dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div>
          {(Array.isArray(name) ? name : [name]).map((tech) => (
            <Badge key={tech} name={tech} />
          ))}
        </div>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16" pageNamespace="Projects">
          <AnimatedText
            text={t("title")}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Gericht Restaurant"
                img={project1}
                name={["React", "Figma", "Tailwind"]}
                summary={t("summary1")}
                link="https://restaurant-gericht-waltgreenwich.netlify.app/"
                github="https://github.com/WaltGreenwich/modern_ui_ux_restaurant"
                type={t("type")}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Nike Web Clone"
                img={project2}
                name={["React", "Figma", "Tailwind"]}
                link="https://nike-web-clone-wltgr.netlify.app/"
                github="https://github.com/WaltGreenwich/nike-web-clone"
                type="Modern Homepage Clone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Brainwave"
                img={project3}
                name={["React", "Figma", "Tailwind"]}
                link="https://waltgreenwich-brainwave.netlify.app/"
                github="https://github.com/WaltGreenwich/brainwave"
                type="Modern Homepage"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="MovieApp"
                img={project4}
                name={["React", "Figma", "Tailwind", "Appwrite"]}
                summary={t("summary2")}
                link="https://movie-app-waltgreenwich.netlify.app/"
                github="https://github.com/WaltGreenwich/React19MovieApp"
                type={t("type")}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

// 📌 Cargar traducciones correctamente
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
