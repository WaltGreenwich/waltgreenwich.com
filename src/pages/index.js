import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic1 from "../../public/images/profile/developer-profile-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic1}
                alt="WaltGreen"
                className="w-full h-auto"
              />
            </div>

            <div className="w-1/2">
              <h1>Transforming Ideas Into Impactful Digital Experiences</h1>
              <p>
                As a full-stack developer with expertise in React.js, Next.js,
                and modern web design, I specialize in creating functional and
                visually appealing web applications. Explore my recent projects,
                where I combine design, technology, and usability to deliver
                innovative solutions.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
