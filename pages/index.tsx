import Display from "@/components/Display";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { themeAtom } from "@/utils/themeAtom";
import { useAtom } from "jotai";
import Head from "next/head";
import { useEffect } from "react";

const index = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Head>
        <title>RandomUser | CIT</title>
      </Head>
      <Nav />
      <Display />
      <Footer />
    </>
  );
};

export default index;
