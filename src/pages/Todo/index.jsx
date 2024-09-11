import { Add, Filter } from "iconsax-react";
import style from "./todo.module.css";
import ListTile from "../../components/List-tile/listTile";
import NewList from "../../components/New-list";
import { useState } from "react";

export default function Todo() {
  const [showNewList, setShowNewList] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>List</h1>

          <button onClick={() => setShowNewList(true)}>
            <Add size="20" color="#ffffff" />
            New List
          </button>
        </div>

        <div className={style.listWrapper}>
          <div className={style.listHeader}>
            <p className={style.listHeaderTitleText}>All list</p>

            <div>
              <Filter className={style.filter} size="20" color="#121212" />
            </div>
          </div>

          <ul className={style.listContainer}>
            <ListTile />
            <ListTile />
          </ul>
        </div>
      </div>

      {/* Modal: New list */}
      {showNewList && (
        <NewList handleCloseNewList={() => setShowNewList(false)} />
      )}
    </div>
  );
}
