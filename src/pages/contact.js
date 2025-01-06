import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import cvEN from "../../public/images/cv/cv_imagen.png";
import { EmailIcon, LocationPinIcon, LinkArrow } from "@/components/Icons";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Head>
        <title>WaltGreenwich | Contact Page</title>
        <meta name="contact" content="contact page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Contact" className="mb-16" />
          <div className="flex flex-row justify-between items-start gap-16 w-full">
            {/* Contenedor del CV */}
            <div className="flex-shrink-0 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
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

            {/* Información de contacto */}
            <div className="flex flex-col items-start gap-6 dark:text-light">
              <p className="my-4 font-medium">
                I’m excited to connect and collaborate on meaningful
                opportunities. Feel free to reach out if you value dedication,
                creativity, and a results-driven approach. Let’s explore how I
                can contribute to your team’s success and help you achieve your
                goals.
              </p>
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <EmailIcon className="w-6 h-6 mr-2" />
                  <span>waltgreenwich.devsec@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <LocationPinIcon className="w-4 mr-2" />
                  <span>
                    Currently based in{" "}
                    <span className="font-bold">Lima, Perú</span>
                  </span>
                </div>
                <Link
                  href="https://drive.google.com/file/d/10LIdfPK9sEW7LPJHiz4TIVo3yJ9bCp1q/view?usp=drive_link"
                  target={"_blank"}
                  className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light dark:bg-light dark:text-dark hover:dark:border-light border-2 border-solid border-transparent hover:border-dark mt-4"
                >
                  Download CV <LinkArrow className="w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;

// import AnimatedText from "@/components/AnimatedText";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import Image from "next/image";
// import cvEN from "../../public/images/cv/cv_imagen.png";
// import { EmailIcon, LocationPinIcon, LinkArrow } from "@/components/Icons";
// import Link from "next/link";

// const contact = () => {
//   return (
//     <>
//       <Head>
//         <title>WaltGreenwich | Contact Page</title>
//         <meta name="contact" content="contact page" />
//       </Head>
//       <main className="flex w-full flex-col items-center justify-center">
//         <Layout className="pt-16">
//           <AnimatedText text="Contact" className="mb-16" />
//           <div className="grid w-full grid-cols-6 gap-16">
//             <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
//               <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
//               <a
//                 href="/images/cv/cv_imagen.png"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <Image
//                   src={cvEN}
//                   alt="Walt Greenwich"
//                   className="w-40 h-auto rounded-2xl cursor-pointer"
//                 />
//               </a>
//             </div>

//             <div className="col-span-3 flex flex-col items-start justify-start">
//               <p className="my-4 font-medium">
//                 I’m excited to connect and collaborate on meaningful
//                 opportunities. Feel free to reach out if you value dedication,
//                 creativity, and a results-driven approach. Let’s explore how I
//                 can contribute to your team’s success and help you achieve your
//                 goals.
//               </p>
//               <div className="flex flex-col items-start space-y-4">
//                 <div className="flex items-start">
//                   <EmailIcon className=" w-6 h-6 mr-2" />
//                   <span>waltgreenwich.devsec@gmail.com</span>
//                 </div>
//                 <div className="flex items-start w-full flex-nowrap">
//                   <LocationPinIcon className="text-red-500 w-6 h-6 mr-2 items-start" />
//                   <span>Currently based in Lima, Perú</span>
//                 </div>
//                 <div className="mt-6">
//                   <Link
//                     href="https://drive.google.com/file/d/1kjZjO-L1iFY8cUsfhnwXWJ384zIN8XBa/view?usp=sharing"
//                     target={"_blank"}
//                     className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
//                   >
//                     Download CV <LinkArrow className="w-6 ml-2" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// };

// export default contact;
