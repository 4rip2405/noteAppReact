import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, currentNote, setCurrentNote, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
      )
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit':
      return <EditNote currentNote={currentNote} setCurrentPage={setCurrentPage} editNote={editNote} />;
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentNote, setCurrentNote] = useState(null)

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  const editNote = (id, title, desc) => {
    setNoteList(
      noteList.map(note => 
        note.id === id ? { ...note, title: title, desc: desc } : note
      )
    );
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
  )
}

export default App