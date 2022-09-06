import React from 'react';
import { v4 as uuid } from 'uuid';
import { Note } from '../App';
import './Modal.scss';
// import { Note } from '../App';

function Modal(props: any) {

    const saveNote = () => {
        if (props.message) {
            props.setNotes([...props.notes, {
                id: uuid(),
                content: props.message,
                done: false
            } as Note])
        }
        props.setIsModalOpen(false)
        props.setMessage('')
    }


    const handleMessageChange = (event: any) => {
        props.setMessage(event.target.value);
    };

    return (
        <div className='Modal-container'>
            <div className='Modal-overlay'>
            </div>
            <div className="Modal d-flex flex-column">
                <div>
                    <textarea
                        id="message"
                        name="message"
                        value={props.message}
                        onChange={handleMessageChange}
                        placeholder='Inserisci voce'
                    />
                </div>

                <div>
                    <button className='save-button' onClick={saveNote}>
                        Salva
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;