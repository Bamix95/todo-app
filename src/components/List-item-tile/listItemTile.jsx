import { Trash } from "iconsax-react";
import style from "./listItemTile.module.css";
import { useState } from "react";

export default function ListItemTile({
  showCheck = true,
  task,
  handleTaskChange,
}) {
  console.log(task);
  // const [inputValue, setInputValue] = useState(task?.name);
  return (
    <li className={style.container}>
      <div className={style.itemText}>
        {showCheck && (
          <div className={style.customCheckboxContainer}>
            <input type='checkbox' id='car' checked={task.is_completed} />
            <div className={style.customCheckbox}></div>
          </div>
        )}

        <input
          type='text'
          placeholder='Enter new item'
          autoFocus
          value={task?.name}
          onChange={(event) => handleTaskChange(task?.id, event.target.value)}
        />
      </div>

      <div className={style.itemButtonContainer}>
        {task?.name && (
          <button>
            <Trash size={20} />
          </button>
        )}
      </div>
    </li>
  );
}
