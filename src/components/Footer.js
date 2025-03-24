import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="grid grid-cols-3 place-items-center gap-x-16 py-8 text-center sm:grid-cols-1 lg:py-6">
        {/* Columna 1 */}
        <div>
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>

        {/* Columna 2 */}
        <div>
          Made with{" "}
          <span className="text-2xl text-primary dark:text-primaryDark px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/waltgreenwich/"
            target="_blank"
            className="underline underline-offset-2"
          >
            WaltGreenwich
          </Link>
        </div>

        {/* Columna 3 */}
        <div>
          <Link
            href="https://www.linkedin.com/in/waltgreenwich/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Say hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
