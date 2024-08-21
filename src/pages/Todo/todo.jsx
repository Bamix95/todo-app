import { Add, ArrowRight2, Filter, TickCircle } from "iconsax-react";
import style from "./todo.module.css";

export default function Todo() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>Lists</h1>

          <button>
            <Add size='20' color='#121212' />
            New list
          </button>
        </div>

        <div className={style.listWrapper}>
          <div className={style.listHeader}>
            <p>All list</p>

            <div>
              <Filter className={style.filter} size='20' color='#121212' />
            </div>
          </div>

          <div className={style.Input}>
            <input type='text' />
          </div>

          <ul className={style.listContainer}>
            <li className={style.listItem}>
              <div className={style.listInfoContainer}>
                <span>
                  <TickCircle size='20' color='#37d67a' />
                </span>
                <div className={style.listInfo}>
                  <span className={style.listName}>Food</span>
                  <span className={style.listDate}>Created 20/03/2024</span>
                </div>
              </div>

              <div className={style.icon}>
                <ArrowRight2 size='20' color='#121212' />
              </div>
            </li>
            <li className={style.listItem}>
              <div className={style.listInfoContainer}>
                <span>
                  <TickCircle size='20' color='#37d67a' />
                </span>
                <div className={style.listInfo}>
                  <span className={style.listName}>Food</span>
                  <span className={style.listDate}>Created 20/03/2024</span>
                </div>
              </div>

              <div className={style.icon}>
                <ArrowRight2 size='20' color='#121212' />
              </div>
            </li>
            <li className={style.listItem}>
              <div className={style.listInfo}>
                <span className={style.listName}>Food</span>
                <span className={style.listDate}>Created 20/03/2024</span>
              </div>

              <div className={style.icon}>
                <ArrowRight2 size='20' color='#121212' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
