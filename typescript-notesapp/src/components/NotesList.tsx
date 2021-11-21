import * as React from 'react';
import {Note} from '../Models/Models';
import Notes from './Notes';
import CreateNote from './CreateNote';

interface INotesListProps {
    notes : Note[],
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {

  const handleDelete = (id:string) => {
    setNotes(notes.filter( note => note.id !== id));
  };
  const renderNotes = ():JSX.Element[] => {
        return notes.map( note => {
            return <Notes note={note} key={note.id} handleDelete={handleDelete}/>
        })
  } ; 
  return(
      <>
        <h2 className="mt-3">Notes List</h2>
        <div>{ renderNotes() }</div>
      </>
  )
};

export default NotesList;

//tsrsfc

