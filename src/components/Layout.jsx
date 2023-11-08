import AppHead from "./AppHead";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <AppHead />
      <div className="relative">
        <Navbar />
        <div className="pt-40 min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
}
