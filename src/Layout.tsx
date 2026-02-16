import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <main className="mx-auto container px-3">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
