import { Task, Text } from "iconsax-react";
import style from "./style/index.module.css";
import ListTask from "./listTask";
import { useState } from "react";

export default function NewList({ handleCloseNewList, handleCreateNewList }) {
  const [listDetails, setListDetails] = useState({
    title: "",
    date_created: null,
    id: crypto.randomUUID(),
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
    //console.log("true");
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

  const removeTask = (idToRemove, eventAction = "backSpace") => {
    const newTask = listDetails?.task.filter(({ id }) => id !== idToRemove);
    const taskToRemove = listDetails?.task.filter(
      ({ id }) => id === idToRemove
    );

    if (eventAction == "backSpace") {
      if (newTask?.length == 0) return;

      if (taskToRemove[0]?.name?.length) return;
      const updated = {
        ...listDetails,
        task: [...newTask],
      };
      setListDetails(updated);
    } else if (eventAction == "mouseClick") {
      if (newTask.length == 0) return handleTaskChange(idToRemove, "");
      const updated = {
        ...listDetails,
        task: [...newTask],
      };
      setListDetails(updated);
    }
  };

  const taskActions = {
    remove: (id, eventAction) => removeTask(id, eventAction),
    add: () => addNewTask(),
    changeTaskItemName: (id, newName) => handleTaskChange(id, newName),
  };

  const createlist = () => {
    const newList = { ...listDetails, date_created: new Date() };

    handleCreateNewList((prevState) => [...prevState, newList]);
    return handleCloseNewList();
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
            disabled={listDetails.title == "" || listDetails.task[0].name == ""}
            onClick={() => {
              createlist();
            }}
            className={style.createButton}
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

        <ListTask action={taskActions} taskArray={listDetails.task} />
      </div>
    </div>
  );
}
