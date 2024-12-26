import style from "./GeneratBtn.module.css";
import iconBone from "../../../assets/icon_bone.png";

export default function GeneratBtn() {
  return (
    <button className={style.btn}>
      <div className={style.green_circle}>
        <img src={iconBone} className={style.icon_bone} />
      </div>
    </button>
  );
}
