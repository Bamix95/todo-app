import { Additem } from "iconsax-react";
import ListItemTile from "../List-item-tile/listItemTile";
import style from "./style/listTask.module.css";
import { useState } from "react";

export default function ListTask({ taskArray, handleTaskChange }) {
  return (
    <div className={style.container}>
      <ul className={style.listItemContainer}>
        {taskArray.map((task) => (
          <ListItemTile
            task={task}
            handleTaskChange={handleTaskChange}
            showCheck={false}
          />
        ))}
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
