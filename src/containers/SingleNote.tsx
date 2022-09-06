import React, { useState } from 'react';
import './SingleNote.scss';
import classNames from 'classnames';
import { Note } from '../App';

// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import Notes from './Notes';

function SingleNote(props: any) {

    const check = () => {
        props.setNotes(props.notes.map((n: Note) =>
            n.id === props.note.id
                ? { ...n, done: !props.note.done }
                : n))
    }

    return (

        <div className={classNames('SingleNote', 'w-100', 'd-flex', 'text-justify-center')}> {/*, checked ? 'render' : 're-render'*/}
            <div className="buttons-container d-flex">
                <button onClick={() => {
                    // return props.setNotes(props.notes.filter((note: Note) =>
                    //     note.id !== props.note.id
                    // ))
                    console.log(props.index)
                }}>
                    <svg className="bin" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 6.66665C11.6667 5.78259 12.0179 4.93474 12.643 4.30962C13.2681 3.6845 14.116 3.33331 15 3.33331H25C25.8841 3.33331 26.7319 3.6845 27.357 4.30962C27.9822 4.93474 28.3333 5.78259 28.3333 6.66665V9.99998H35C35.442 9.99998 35.866 10.1756 36.1785 10.4881C36.4911 10.8007 36.6667 11.2246 36.6667 11.6666C36.6667 12.1087 36.4911 12.5326 36.1785 12.8452C35.866 13.1577 35.442 13.3333 35 13.3333H33.2183L31.7733 33.57C31.7135 34.411 31.3372 35.198 30.7202 35.7726C30.1032 36.3472 29.2914 36.6667 28.4483 36.6666H11.55C10.7069 36.6667 9.89512 36.3472 9.27815 35.7726C8.66118 35.198 8.28487 34.411 8.22501 33.57L6.78334 13.3333H5.00001C4.55798 13.3333 4.13406 13.1577 3.8215 12.8452C3.50894 12.5326 3.33334 12.1087 3.33334 11.6666C3.33334 11.2246 3.50894 10.8007 3.8215 10.4881C4.13406 10.1756 4.55798 9.99998 5.00001 9.99998H11.6667V6.66665ZM15 9.99998H25V6.66665H15V9.99998ZM10.1233 13.3333L11.5517 33.3333H28.45L29.8783 13.3333H10.1233ZM16.6667 16.6666C17.1087 16.6666 17.5326 16.8422 17.8452 17.1548C18.1577 17.4674 18.3333 17.8913 18.3333 18.3333V28.3333C18.3333 28.7753 18.1577 29.1993 17.8452 29.5118C17.5326 29.8244 17.1087 30 16.6667 30C16.2246 30 15.8007 29.8244 15.4882 29.5118C15.1756 29.1993 15 28.7753 15 28.3333V18.3333C15 17.8913 15.1756 17.4674 15.4882 17.1548C15.8007 16.8422 16.2246 16.6666 16.6667 16.6666ZM23.3333 16.6666C23.7754 16.6666 24.1993 16.8422 24.5119 17.1548C24.8244 17.4674 25 17.8913 25 18.3333V28.3333C25 28.7753 24.8244 29.1993 24.5119 29.5118C24.1993 29.8244 23.7754 30 23.3333 30C22.8913 30 22.4674 29.8244 22.1548 29.5118C21.8423 29.1993 21.6667 28.7753 21.6667 28.3333V18.3333C21.6667 17.8913 21.8423 17.4674 22.1548 17.1548C22.4674 16.8422 22.8913 16.6666 23.3333 16.6666Z" fill="#F48889" />
                    </svg>
                </button>
                <button onClick={check}>
                    {!props.note.done ?
                        <svg className="check" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="2" y="2" width="36" height="36" rx="6" stroke="white" stroke-width="4" />
                        </svg>
                        :
                        <svg className="check" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="8" fill="white" />
                            <path d="M13 19.6875L18.1923 25L28 15" stroke="#1F1F1F" stroke-width="4" stroke-linecap="round" />
                        </svg>
                    }
                </button>
            </div>
            <p className={classNames('note-text', 'd-flex', 'align-items-center', 'mb-0', props.note.done && 'checked')}>
                {`${props.note.content}`}
            </p>
        </div>
    );
}

export default SingleNote;