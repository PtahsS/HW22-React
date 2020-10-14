import React from 'react';
import { Link } from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite-jss'

const style = StyleSheet.create({
    link: {
        textDecoration: "none",
        //color: "black"
    }
})

const NotePage = ({ 
    notes, 
    handlerComplete, 
    handlerDelete, 
    match: {
        params: { id }
    }
}) => {
    const note = notes.find(note=> note.id === id);
    return (
        <>
            <div className="note-page">
                <Link to="/" className="link"  className={css(style.link)}>Back to home page</Link>
                <h1>{note.title}</h1>
                <p>{note.text}</p>
                <section>
                    <button onClick={()=>{handlerComplete(note.id)}}>
                        {note.complete ? "Uncomplete" : "Complete"}
                    </button>
                    <Link to="/">
                        <button onClick={()=> {handlerDelete(id)}}>Delete note</button>                       
                    </Link>
                </section>
            </div>

        </>
    )
}


export default NotePage;