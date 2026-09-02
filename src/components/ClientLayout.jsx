"use client";

import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { init, trackPages } from "insights-js";
import { useEffect } from "react";
import Loading from "./Loading/Loading";

export default function ClientLayout({ children }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_METRICS_ID);
    trackPages();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Loading />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
}
