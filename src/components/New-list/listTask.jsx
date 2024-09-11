import { Additem } from "iconsax-react";
import ListItemTile from "../List-item-tile/listItemTile";
import style from "./style/listTask.module.css";

export default function ListTask() {
  return (
    <div className={style.container}>
      <ul className={style.listItemContainer}>
        <ListItemTile />
        <ListItemTile />
        <ListItemTile />
      </ul>

      <div className={style.addButtonContainer}>
        <button>
          <Additem size={20} />
          Add item
        </button>
      </div>
    </div>
  );
}
