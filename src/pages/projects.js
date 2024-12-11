import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";

const projects = () => {
  return (
    <>
      <Head>
        <title>WaltGreenwich | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6"> Project-1</div>
            <div className="col-span-6"> Project-2</div>

            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6"> Project-3</div>
            <div className="col-span-6"> Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
