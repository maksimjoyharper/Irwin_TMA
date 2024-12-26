import { useTelegram } from "../../hooks/telegram/telegram";
import imgLogo from "../../assets/logo.png";
import iconVolume from "../../assets/icon_volume.png";
import style from "./Header.module.css";

export default function Header() {
  const { avatar } = useTelegram();
  return (
    <div className={style.header_container}>
      <img src={avatar} className={style.header_avatar} />
      <img src={imgLogo} className={style.header_logo} />
      <button className={style.header_btn_sound}>
        <img src={iconVolume} className={style.icon_volume} />
      </button>
    </div>
  );
}
