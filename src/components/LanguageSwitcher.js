import { useRouter } from "next/router";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { locale, asPath, push } = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    push(asPath, asPath, { locale: newLocale });
  };

  // Ruta de la bandera según el idioma
  const flagSrc =
    locale === "en" ? "/images/flags/es.svg" : "/images/flags/en.svg";
  // Texto que se mostrará junto a la bandera en pantallas grandes
  const flagText = locale === "en" ? "ES" : "EN";

  return (
    <button
      aria-label="Toggle language"
      onClick={toggleLanguage}
      className="flex items-center justify-center
                 sm:p-1 p-2.5 border-2 border-solid border-transparent rounded-lg sm:rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:border-dark hover:dark:border-light 
                  hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light transition-colors"
    >
      {/* Bandera */}

      <Image
        src={flagSrc}
        alt={`Flag ${flagText}`}
        width={24}
        height={24}
        // En pantallas pequeñas (por defecto) => cuadrada
        // A partir de "md:" => redonda
        className="md:rounded-full sm:rounded-none"
      />
      {/* Texto, se oculta en pantallas pequeñas y aparece en md en adelante */}
      <span className="ml-2 sm:hidden md:inline-block">{flagText}</span>
    </button>
  );
};

export default LanguageSwitcher;
