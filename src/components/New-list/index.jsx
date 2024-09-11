import { Task, Text } from "iconsax-react";
import style from "./style/index.module.css";
import ListTask from "./listTask";

export default function NewList({ handleCloseNewList }) {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modalOverlay} onClick={handleCloseNewList}></div>

      <div className={style.newListContainer}>
        <div className={style.headText}>Create new task</div>
        <div className={style.listTitleInputContainer}>
          <input type="text" placeholder="Add title" autoFocus autoCapitalize />
          <button className={style.createButton}>Create</button>
        </div>
        <div>
          <div className={style.listType}>
            <span className={style.listTypeText}>Type</span>

            <div className={style.listTypeButtonContainer}>
              <button
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
                }}
              >
                <span>
                  <Task size={20} />
                </span>
              </button>
              <button>
                <span>
                  <Text size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <ListTask />
      </div>
    </div>
  );
}
