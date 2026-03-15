import AppHead from "./AppHead";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { init, trackPages } from "insights-js";
import { useEffect } from "react";
import Loading from "./Loading/Loading";

export default function Layout({ children }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_METRICS_ID);
    trackPages();
  }, []);

  return (
    <>
      <AppHead />
      <div className="relative">
        <Navbar />
        <Loading />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
