// Layout.js
import React from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Layout = ({
  children,
  pageNamespace,
  hideHead = false,
  className = "",
}) => {
  const tLayout = useTranslations("Layout");
  // Siempre llama a useTranslations, usando un fallback si no hay pageNamespace
  const tPage = useTranslations(pageNamespace || "Layout");

  // pageTitle si no hay pageNamespace
  let pageTitle = tLayout("defaultTitle");
  if (pageNamespace) {
    // Intentamos leer la clave pageTitle del namespace
    pageTitle = `${tLayout("defaultTitle")} | ${tPage("pageTitle")}`;
  }

  return (
    <>
      {!hideHead && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <div
        className={`z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

// import React from "react";
// import Head from "next/head";
// import { useTranslations } from "next-intl";

// const Layout = ({
//   children,
//   pageNamespace,
//   hideHead = false,
//   className = "",
// }) => {
//   const tLayout = useTranslations("Layout");

//   // Si se pasa el namespace, intentamos obtener el pageTitle; si no, solo usamos el defaultTitle.
//   let fullTitle = tLayout("defaultTitle");
//   if (pageNamespace) {
//     const tPage = useTranslations(pageNamespace);
//     fullTitle = `${tLayout("defaultTitle")} | ${tPage("pageTitle")}`;
//   }

//   return (
//     <>
//       {!hideHead && (
//         <Head>
//           <title>{fullTitle}</title>
//         </Head>
//       )}
//       <div
//         className={`z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default Layout;
