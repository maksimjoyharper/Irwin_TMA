import style from "./NavBarButton.module.css";

interface INavBarButton {
  title: string;
  svg: JSX.Element;
  isActive: boolean;
}

export default function NavBarButton({ title, svg, isActive }: INavBarButton) {
  return (
    <button
      style={{ backgroundColor: isActive ? "#442583" : "none" }}
      className={style.nav_btn}
    >
      <div>{svg}</div>
      <span
        style={{ color: "#ffffff", opacity: isActive ? "100%" : "60%" }}
        className={style.nav_btn_title}
      >
        {title}
      </span>
    </button>
  );
}
