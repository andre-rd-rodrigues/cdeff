import useIsMobile from "@/hooks/useIsMobile";
import AppHead from "./AppHead";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  const isMobile = useIsMobile();

  return (
    <>
      <AppHead />
      <div className="relative">
        <Navbar />
        <div className={`${isMobile ? "pt-[90px]" : "pt-40"} min-h-screen`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
