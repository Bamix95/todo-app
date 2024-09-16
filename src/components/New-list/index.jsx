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
        id: crypto.randomUUID(),
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

  const addNewTask = () => {
    console.log("true");
    const newTask = listDetails.task;

    if (newTask[newTask.length - 1].name === "") return;

    newTask.push({
      id: crypto.randomUUID(),
      name: "",
      is_completed: false,
    });

    const updated = {
      ...listDetails,
      task: [...newTask],
    };
    setListDetails(updated);
  };

  const removeTask = (idToRemove) => {
    const newTask = listDetails.task.filter(({ id }) => id !== idToRemove);
    const taskToRemove = listDetails.task.filter(({ id }) => id === idToRemove);

    if (listDetails.task.length == taskToRemove.length) return;

    if (taskToRemove[0].name.length) return;
    const updated = {
      ...listDetails,
      task: [...newTask],
    };
    setListDetails(updated);
  };

  const taskActions = {
    remove: (id) => removeTask(id),
    add: () => addNewTask(),
    changeTaskItemName: (id, newName) => handleTaskChange(id, newName),
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

        <ListTask
          action={taskActions}
          addTask={addNewTask}
          removeTask={removeTask}
          changeTaskItemName={handleTaskChange}
          taskArray={listDetails.task}
        />
      </div>
    </div>
  );
}
