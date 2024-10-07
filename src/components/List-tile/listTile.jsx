import { More, TickCircle } from "iconsax-react";
import style from "./listTile.module.css";

export default function ListTile({ list, handleListDisplay }) {
  return (
    <li className={style.listItem} onClick={handleListDisplay}>
      <div className={style.listInfoContainer}>
        <span>
          <TickCircle size='20' color='#37d67a' />
        </span>
        <div className={style.listInfo}>
          <span className={style.listName}>
            {list?.title}
            <span>{list?.task?.length} items</span>
          </span>
          <span className={style.listDate}>
            Created {new Date(list?.date_created).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className={style.icon}>
        <More size='20' color='#121212' />
      </div>
    </li>
  );
}
