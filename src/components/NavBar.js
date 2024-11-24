import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-widht ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav>
        <Link href="/" target={"_blank"}>
          X
        </Link>
        <Link href="/" target={"_blank"}>
          X
        </Link>
        <Link href="/" target={"_blank"}>
          X
        </Link>
        <Link href="/" target={"_blank"}>
          X
        </Link>
        <Link href="/" target={"_blank"}>
          X
        </Link>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
