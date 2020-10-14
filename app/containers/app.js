import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history"
import NotePage from './notePage';
import HomePage from './homepage';
import { articles } from '../components/articles';

import { StyleSheet, css } from 'aphrodite-jss';
import classnames from "classnames";

const style = StyleSheet.create({
    wrapper: {
        margin: 20,
        padding: 0,
        background: '#eee',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    footer: {
        padding: "100px"
    }
});

const App = () => {
    console.log('articles', articles)
    const [notes, setNotes] = useState(articles);
    const [categories, setCategories] = useState(["animals", "food", "tourism", "machines", "philosophy", "marine", "history", "games"]);

    const createNoteCallBack = note => setNotes([note, ...notes]);

    const completeNoteCallBack = id => 
        setNotes(
            notes.map(note=> (note.id===id 
                ? {...note, complete: !note.complete} 
                : note)
        )
    )

    const deleteNoteCallBack = id => {
        setNotes(notes.filter(note=> note.id !== id));

    }
return(
    <div className={css(style.wrapper)}>
        <h1 >TODOS NEWSPAPER</h1>
        <BrowserRouter history = {history}>
            <Switch>
                <Route
                    path='/'
                    exact
                    render= {()=> (
                        <HomePage
                            notes = {notes}
                            categories={categories}
                            handlerSubmit = {createNoteCallBack}
                            handlerComplete = {completeNoteCallBack}
                            handlerDelete = {deleteNoteCallBack}
                        />
                    )}
                />
                <Route
                path='/note/:id'
                render={(routeProps)=> (
                    <NotePage
                        notes={notes}
                        handlerComplete={completeNoteCallBack}
                        handlerDelete={deleteNoteCallBack}
                        {...routeProps}
                    />
                )}
                />
            </Switch>
        </BrowserRouter>
        <div className={css(style.footer)}>@polices</div>
    </div>
)
}

export default App;