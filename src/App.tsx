import React, { useState } from 'react';
import './App.scss';

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Modal from './components/Modal';
import SingleNote from './containers/SingleNote';

// Note Type, should i move it to an external file?
export type Note = {
  id: string,
  content: string,
  done: boolean
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false as boolean);
  const [notes, setNotes] = useState([] as Note[]);
  const [message, setMessage] = useState('');

  const openModal = (): any => {
    setIsModalOpen(true)
  }

  return (
    <div className="App">
      <div className="App-container">
        <div className="notes-container d-flex justify-content-center row">
          <div className="content d-flex flex-column align-items-start col">
            <h1 className='title'>Titolo</h1>
            <TransitionGroup>
              {
                notes.filter((e: any) => !e.done).map((note: Note, index: number) => (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="note-animation"
                  >
                    <SingleNote key={index} note={note} setNotes={setNotes} notes={notes} />
                  </CSSTransition>
                )
                ).reverse()
              }
            </TransitionGroup>
            <TransitionGroup>
              {
                notes.filter((e: any) => e.done).map((note: Note, index: number) => (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="note-animation"
                  >
                    <SingleNote key={index} note={note} setNotes={setNotes} notes={notes} />
                  </CSSTransition>
                )
                ).reverse()
              }
            </TransitionGroup>
          </div>
        </div>
        <div>

          <button onClick={openModal} className="new-note d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path d="M33 20L7 20" stroke="#01001e" stroke-width="3" stroke-linecap="round" />
              <path d="M20 33L20 7" stroke="#01001e" stroke-width="3" stroke-linecap="round" />
            </svg>
            Nuova Voce
          </button>
        </div>
      </div>

      {isModalOpen &&
        <Modal
          setIsModalOpen={setIsModalOpen}
          notes={notes}
          setNotes={setNotes}
          message={message}
          setMessage={setMessage}

        />
      }

    </div >
  );
}

export default App;
