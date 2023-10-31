import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-40">{children}</div>
      <Footer />
    </div>
  );
}
