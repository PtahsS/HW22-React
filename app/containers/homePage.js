import React from 'react';
import CreateForm from "../components/createForm"
import NoteList from "../components/noteList"

const HomePage = ({notes, categories, handlerSubmit, handlerDelete, handlerComplete}) => {
    return (
        <>
        <CreateForm notes={notes} categories={categories} handlerSubmit={handlerSubmit}/>
        <NoteList notes={notes} categories={categories} handlerComplete={handlerComplete} handlerDelete={handlerDelete}/>
        </>
    )
}

export default HomePage;