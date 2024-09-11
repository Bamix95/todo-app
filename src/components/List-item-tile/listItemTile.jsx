import { Edit2, Trash } from "iconsax-react";
import style from "./listItemTile.module.css";

export default function ListItemTile() {
  return (
    <li className={style.container}>
      <div className={style.itemText}>
        <div className={style.customCheckboxContainer}>
          <input type="checkbox" id="car" />
          <div className={style.customCheckbox}></div>
        </div>

        <input
          type="text"
          placeholder="enter new item"
          autoFocus
          value={"Buy a car"}
        />
      </div>

      <div className={style.itemButtonContainer}>
        <button>
          <Trash size={20} />
        </button>
      </div>
    </li>
  );
}
