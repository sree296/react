import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from './Models/Models';
import {Container, Row, Col} from 'react-bootstrap';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule Meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);
  console.log(notes[0]);
  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col> <NotesList notes={notes} setNotes={ setNotes }/> </Col>
        </Row>
        <Row>
            <Col>
                <CreateNote notes={notes} setNotes={ setNotes }/>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
