import ListItemTile from "../List-item-tile/listItemTile";
import style from "./ListToDisplay.module.css";
const ListToDisplay = ({ handleCloseDisplay, list, listDbMutator }) => {
  const handleTitleChange = (titleText, id) => {
    listDbMutator((prevListDb) => {
      return prevListDb.map((list) => {
        console.log(id == list.id ? titleText : list.title);
        return { ...list, title: list.id == id ? titleText : list.title };
      });
    });
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
    <div className={style.modal_wrapper}>
      <div className={style.modal_overlay} onClick={handleCloseDisplay}></div>
      <div className={style.display_wrapper}>
        <div className={style.modal_content}>
          <input
            className={style.title}
            defaultValue={list?.title}
            onChange={(e) => handleTitleChange(e.target.value, list.id)}
          />
          <p className={style.things_todo}>List of Things Todo</p>
          <ul>
            {list?.task?.map((taskItem) => (
              <ListItemTile showCheck task={taskItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListToDisplay;
