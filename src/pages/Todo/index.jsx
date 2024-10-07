import { Add, Filter } from "iconsax-react";
import style from "./todo.module.css";
import ListTile from "../../components/List-tile/listTile";
import NewList from "../../components/New-list";
import { useEffect, useState } from "react";
import ListToDisplay from "../../components/Display-list/ListToDisplay";

export default function Todo() {
  const [showNewList, setShowNewList] = useState(false);
  const [showListToDisplay, setShowListToDisplay] = useState(false);
  const [listDb, setListDb] = useState([]);
  const [listToDisplay, setListToDisplay] = useState({});

  const handleListDisplay = (id) => {
    setShowListToDisplay(true);
    setListToDisplay(listDb.find((list) => list.id == id));
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>List</h1>

          <button onClick={() => setShowNewList(true)}>
            <Add size='20' color='#ffffff' />
            New List
          </button>
        </div>

        <div className={style.listWrapper}>
          <div className={style.listHeader}>
            <p className={style.listHeaderTitleText}>All list</p>

            <div>
              <Filter className={style.filter} size='20' color='#121212' />
            </div>
          </div>

          <ul className={style.listContainer}>
            {listDb.length > 0
              ? listDb?.map((item) => (
                  <ListTile
                    key={item?.id}
                    list={item}
                    handleListDisplay={() => handleListDisplay(item.id)}
                  />
                ))
              : "Nothing created yet"}
          </ul>
        </div>
      </div>
      {/* Modal: Display Todo */}
      {showListToDisplay && (
        <ListToDisplay
          list={listToDisplay}
          listDbMutator={setListDb}
          handleCloseDisplay={() => setShowListToDisplay(false)}
        />
      )}

      {/* Modal: New list */}
      {showNewList && (
        <NewList
          handleCloseNewList={() => setShowNewList(false)}
          handleCreateNewList={setListDb}
        />
      )}
    </div>
  );
}
