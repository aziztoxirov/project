import React from 'react'
import editIcon from '../assets/images/edit.svg'
import delIcon from '../assets/images/del.svg'

const NotesItem = () => {
  return (
    <div className="notes__item">
        <div className="notes__item-top">
            <h2>Title</h2>
            <span>07.03.2022</span>
        </div>
        <p className="notes__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="notes__item-btns">
            <button className="notes__item-btn purple">
                <img src={editIcon} alt="" />
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button className="notes__item-btn red">
                <img src={delIcon} alt="" />
                <span>Удалить</span>
            </button>
        </div>
    </div>
  )
}

export default NotesItem