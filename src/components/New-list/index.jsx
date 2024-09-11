import { Task, Text } from "iconsax-react";
import style from "./style/index.module.css";
import ListTask from "./listTask";
import { useState } from "react";

export default function NewList({ handleCloseNewList }) {
  const [listDetails, setListDetails] = useState({
    title: null,
    date_created: null,
    task: [
      {
        id: new Date(),
        name: "",
        is_completed: false,
      },
    ],
  });

  const handleTitleChange = (titleText) => {
    setListDetails((prevState) => ({ ...prevState, title: titleText }));
  };

  const handleTaskChange = (taskId, taskName) => {
    setListDetails((prevState) => {
      return {
        ...prevState,
        task: prevState.task.map((taskItem) => {
          return {
            ...taskItem,
            name: taskItem?.id == taskId ? taskName : taskItem.name,
          };
        }),
      };
    });
  };

  return (
    <div className={style.modalWrapper}>
      <div className={style.modalOverlay} onClick={handleCloseNewList}></div>

      <div className={style.newListContainer}>
        <div className={style.headText}>Create new task</div>
        <div className={style.listTitleInputContainer}>
          <input
            type='text'
            placeholder='Add title'
            autoFocus
            autoCapitalize
            value={listDetails.title}
            onChange={(event) => handleTitleChange(event.target.value)}
          />
          <button
            className={style.createButton}
            onClick={() => console.log(listDetails)}
          >
            Create
          </button>
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

        <ListTask
          taskArray={listDetails.task}
          handleTaskChange={handleTaskChange}
        />
      </div>
    </div>
  );
}
