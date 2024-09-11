import { More, TickCircle } from "iconsax-react";
import style from "./listTile.module.css";

export default function ListTile() {
  return (
    <li className={style.listItem}>
      <div className={style.listInfoContainer}>
        <span>
          <TickCircle size="20" color="#37d67a" />
        </span>
        <div className={style.listInfo}>
          <span className={style.listName}>
            Food
            <span>15 items</span>
          </span>
          <span className={style.listDate}>Created 20/03/2024</span>
        </div>
      </div>

      <div className={style.icon}>
        <More size="20" color="#121212" />
      </div>
    </li>
  );
}
