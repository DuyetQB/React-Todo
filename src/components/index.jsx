import React, {useState} from 'react';
import Item from './Todo-item';
import './css/index.css';
export default function Todo() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState('');

  const [textEdit, setTextEdit] = useState('');
  async function add() {
    if (text.length <= 0) {
      return;
    }

    await setTask(task.concat(text));
  }

  function handleValue(event) {
    let newItem = event.target.value;

    setText(newItem);
  }

  function deleteTask(id) {
    let taskChange = task.filter((item, index) => index !== id);
    setTask(taskChange);
  }

  function handleValueTask(item) {
    let value = item;

    setTextEdit(value);
  }

  function handleSaveTask(textId, index) {
    let saveText = task.map(function (item, id) {
      return item.replace(textId, textEdit);
    });

    setTextEdit(saveText);
    setText(textEdit);
    setTask(saveText);
  }

 

  return (
    <>
      <div className="wrap">
        <h2 className="title">todo </h2>
        <div className="wrap-input">
          <input
            type="text"
            onChange={handleValue}
            className="input"
            placeholder="add new task"
            value={text}
          />
        </div>
       
        <div className="wrap-btn">
          <button className="btn-add" onClick={add}>
            add
          </button>
        </div>
      </div>
      <div>
        {task.map(function (item, index) {
          return (
            <div key={index} className="container">
              <Item
                key={index.id}
                value={item}
                id={index}
                handleDelete={deleteTask.bind(this, index)}
                handleChangeValue={handleValueTask}
                handleSave={handleSaveTask.bind(this, item, index)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
