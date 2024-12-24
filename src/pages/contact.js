import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>WaltGreenwich | Contact Page</title>
        <meta name="contact" content="any description" />
      </Head>
      <main>
        <Layout>
          <AnimatedText text="Contact" className="mb-16" />
        </Layout>
      </main>
    </>
  );
};

export default contact;
