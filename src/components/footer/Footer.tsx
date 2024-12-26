import FriendsSvg from "../../assets/svg/FriendsSvg";
import MainPageSvg from "../../assets/svg/MainPageSvg";
import ProjectSvg from "../../assets/svg/ProjectSvg";
import TasksSvg from "../../assets/svg/TasksSvg";
import GeneratBtn from "../buttons/generatBtn/GeneratBtn";
import NavBarButton from "../buttons/navBarButton/NavBarButton";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        {" "}
        <div className={style.part}>
          <NavBarButton
            isActive={true}
            svg={<MainPageSvg fill="white" />}
            title="Главная"
          />
          <NavBarButton
            isActive={false}
            svg={<TasksSvg fill="white" />}
            title="Задания"
          />
        </div>
        <div className={style.generate_box}>
          <GeneratBtn />
          <span className={style.generate_title}>Сгенерировать</span>
        </div>
        <div className={style.part}>
          <NavBarButton
            isActive={false}
            svg={<FriendsSvg fill="white" />}
            title="Друзья"
          />
          <NavBarButton
            isActive={false}
            svg={<ProjectSvg fill="white" />}
            title="Проект"
          />
        </div>
      </div>
    </footer>
  );
}
