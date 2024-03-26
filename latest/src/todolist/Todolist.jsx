import React from 'react';
import style from './Todolist.module.css';

function TodoList() {
  return (
    <>
    <div className={style.Todo}>
      <div className={style.mainHeading}>
        <h1>ToDo List</h1>
      </div>
      <div className={style.subHeading}>
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className={style.input}>
        <input type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus"></i>
      </div>
      <div className={style.todos}>
        <div className={style.todo}>
          <div className={style.left}>
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className={style.right}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TodoList;
