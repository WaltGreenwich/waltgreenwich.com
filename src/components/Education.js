import Image from "next/image";
import henryLogo from "../../public/images/logo/henryok_logo.webp";
import efLogo from "../../public/images/logo/ef_logo.webp";
import linkedinLogo from "../../public/images/logo/linkedin_logo.webp";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ school, year, program, certificateLink, logo }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="flex items-center mb-2">
          <Image src={logo} alt="logo" className="w-16 h-16 mr-2 rounded-lg" />
          <span className="text-gray-600 dark:text-light/75 xs:text-sm">
            {year} <br />{" "}
            <p className="text-xl font-semibold dark:text-primaryDark md:text-sm">
              {school}
            </p>
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 sm:text-xl xs:text-lg">
          {program}
        </h3>

        <p>
          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-lg font-semibold inline-flex items-center transform transition-transform duration-200 hover:translate-x-1 dark:text-light/75"
            >
              Certificate
              <span className="ml-1 text-2xl">&#10140;</span>
            </a>
          )}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:shadow-[0px_0px_10px_0px_#58e6d9]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            school="SoyHenry"
            logo={henryLogo}
            year="2024"
            program="Full Stack Developer"
            certificateLink="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=14a9d8b93bfa6fa60ac9989572d2bd6e273e5e575355813bf37bf54a4340db5a"
          />

          <Details
            school="EF SET"
            logo={efLogo}
            year="2024"
            program="B2 Upper Intermediate"
            certificateLink="https://cert.efset.org/TidVBF"
          />

          <Details
            school="Linkedin Learning"
            logo={linkedinLogo}
            year="2023"
            program="Data Analytics"
            certificateLink="https://www.linkedin.com/learning/certificates/045ada88f0bad0fbdab392171cd2b0c9b60c9f8454bb65ed169f6791851616b5?trk=share_certificate"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
