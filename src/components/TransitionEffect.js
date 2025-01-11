import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      {/* Capa primaria */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-primary dark:bg-primaryDark"
        initial={{ x: "100%", opacity: 1 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      {/* Capa secundaria */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-20 bg-light dark:bg-dark"
        initial={{ x: "100%", opacity: 1 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 1 }}
        transition={{ delay: 0.01, duration: 0.9, ease: "easeInOut" }}
      />
      {/* Capa terciaria */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-10 bg-dark dark:bg-light"
        initial={{ x: "100%", opacity: 1 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
