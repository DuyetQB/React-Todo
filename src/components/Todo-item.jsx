import React, {useState} from 'react';
import {ReactComponent as IconTrash} from '../images/trash.svg';
import {ReactComponent as IconPen} from '../images/pen.svg';
import './css/index.css';
export default function TodoItem(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [check, setCheck] = useState(false);

  const deleteTaskList = props.handleDelete;

  const changeValue = props.handleChangeValue;
  const saveValue = props.handleSave;
  const iconStyle = {
    marginLeft: '20px',
    cursor: 'pointer',
  };
  const listStyle = {
   color: check? 'red' :'black',
   fontSize:'18px',
   fontWeight:check? '700': '400'
   
  };

  async function deleteItem() {
   await deleteTaskList();
  }
  

  function valueChangeItem(e) {
    changeValue(e.target.value);
  }
  function saveItem() {
    saveValue();
    setTimeout(()=> setOpenEdit(!openEdit),1000)
  }

  function tonggleTask() {
    setOpenEdit(!openEdit);
  }
  function tonggleCheck() {
    setCheck(!check);
  }

  return (
    <>
      <div className="content">
        <div className="wrap-list">
          <input type="checkbox" onClick={tonggleCheck} style={{cursor:'pointer'}}/>
          <li key={props.key} style={listStyle}>{props.value}</li>
        </div>

        <div className="wrap-function">
          <IconPen style={iconStyle} onClick={tonggleTask} title="edit item"/>
          <IconTrash style={iconStyle} onClick={deleteItem} title="delete item"/>
          {openEdit && (
            <>
              <div className="backdrop" onClick={tonggleTask}></div>
              <div className="wrap-edit">
              <div >
                <input
                  type="text"
                  placeholder={props.value}
                  onChange={valueChangeItem}
                className="edit-input"
                />
                </div>
                <div className="wrap-btn">

                <button onClick={saveItem} 
                className="btn btn-save">save</button>
                <button onClick={()=> setOpenEdit(false)}  
                className="btn btn-cancel">cancel</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
