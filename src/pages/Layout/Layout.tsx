import { Outlet } from "react-router";
import style from "./Layout.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
