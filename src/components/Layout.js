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

  // Si se pasa el namespace, intentamos obtener el pageTitle; si no, solo usamos el defaultTitle.
  let fullTitle = tLayout("defaultTitle");
  if (pageNamespace) {
    const tPage = useTranslations(pageNamespace);
    fullTitle = `${tLayout("defaultTitle")} | ${tPage("pageTitle")}`;
  }

  return (
    <>
      {!hideHead && (
        <Head>
          <title>{fullTitle}</title>
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

// const Layout = ({ children, pageNamespace, className = "" }) => {
//   const tLayout = useTranslations("Layout");

//   // Si no hay pageNamespace, usamos el defaultTitle
//   let pageTitle = tLayout("defaultTitle");

//   if (pageNamespace) {
//     // Obtenemos el translator de ese namespace
//     const tPage = useTranslations(pageNamespace);
//     // Probamos a leer "pageTitle" con try/catch para evitar errores
//     try {
//       pageTitle = `${tLayout("defaultTitle")} | ${tPage("pageTitle")}`;
//     } catch (err) {
//       // Si no existe "pageTitle" en el namespace, cae aquí
//       // y pageTitle se queda como tLayout("defaultTitle")
//       console.warn("No se encontró pageTitle en:", pageNamespace, err);
//     }
//   }

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//       </Head>
//       <div
//         className={`z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default Layout;
