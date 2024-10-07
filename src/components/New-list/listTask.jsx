import { Additem } from "iconsax-react";
import ListItemTile from "../List-item-tile/listItemTile";
import style from "./style/listTask.module.css";
import { useEffect } from "react";

export default function ListTask({ taskArray, action }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key.toLowerCase() == "enter") {
        action.add();
      }
      if (e.key == "Backspace") {
        action.remove(e.target.id);
      }
    };

    document.addEventListener("keydown", handleKeydown, false);

    return () => {
      document.removeEventListener("keydown", handleKeydown, false);
    };
  });

  return (
    <div className={style.container}>
      <ul className={style.listItemContainer}>
        {taskArray.map((task) => (
          <ListItemTile
            key={task.id}
            task={task}
            handleTaskChange={action.changeTaskItemName}
            removeTask={action.remove}
          />
        ))}
      </ul>

      <div className={style.addButtonContainer}>
        <button onClick={() => action.add()}>
          <Additem size={20} />
          Add item
        </button>
      </div>
    </div>
  );
}
