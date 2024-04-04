import { useState } from 'react'
import listIcon from '../assets/images/list.svg'
import gridIcon from '../assets/images/grid.svg'
import NotesItem from './NotesItem'

const Notes = () => {
    
    const [view, setView] = useState(true)
    
    const viewIcon = view ? listIcon : gridIcon
    const spanText = view ? 'Список' : 'Сетка'
    
  return (
    <main className="main">
        <div className="container">
            <div className="notes">
                <div className="notes__top">
                    <h2 className="notes__top-title">Все заметки</h2>
                    <button className="notes__top-btn" onClick={() => setView(!view)}>
                        <img src={viewIcon} alt="" />
                        <span>{spanText}</span>
                    </button>
                </div>
                <div className="notes__list">
                    <NotesItem/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Notes