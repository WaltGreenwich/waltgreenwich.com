import React from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Layout = ({ children, title, className = "" }) => {
  const t = useTranslations("Layout");

  return (
    <>
      <Head>
        <title>{`${title} - ${t("pageTitle")}`}</title>
      </Head>
      <div
        className={`z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
