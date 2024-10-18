import Navbar from "@/components/fragments/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

const disableNavbar = ["auth"];

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <>
      {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
