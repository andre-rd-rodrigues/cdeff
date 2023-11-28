import useIsMobile from "@/hooks/useIsMobile";
import AppHead from "./AppHead";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { init, trackPages } from "insights-js";
import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";

export default function Layout({ children }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    init(process.env.METRICS_ID);
    trackPages();
  }, []);

  return (
    <>
      <AppHead />
      <div className="relative">
        <Navbar />
        <Loading />
        <div className={`${isMobile ? "pt-[90px]" : "pt-40"} min-h-screen`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
