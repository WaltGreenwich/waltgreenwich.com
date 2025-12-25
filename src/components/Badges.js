// src/components/Badges.js

const techBadges = {
  React:
    "https://img.shields.io/badge/React-0B5369?style=flat-square&logo=react&logoColor=61DAFB",
  Tailwind:
    "https://img.shields.io/badge/Tailwind_CSS-003366?style=flat-square&logo=tailwind-css&logoColor=8df0ff",
  Figma:
    "https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
  Appwrite:
    "https://img.shields.io/badge/Appwrite-F02E65?style=flat-square&logo=Appwrite&logoColor=black",
  Python:
    "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
  Gemini:
    "https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white",
  Streamlit:
    "https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white",
  Pandas:
    "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white",
  LLM: "https://img.shields.io/badge/Applied_AI-05122A?style=flat-square&logo=brain&logoColor=white",
};

export const Badge = ({ name }) => {
  if (!techBadges[name]) {
    return <span className="text-gray-500 mx-1">{name}</span>; // Muestra el nombre si no hay imagen
  }

  return (
    <img
      src={techBadges[name]}
      alt={name}
      className="h-6 w-auto inline-block mx-1"
    />
  );
};

// Si necesitas exportar techBadges para otro uso, también puedes hacerlo:
export { techBadges };
