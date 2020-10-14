import React from 'react';
import CreateForm from "../components/createForm"
import NoteList from "../components/noteList"

const HomePage = ({notes, categories, getSelectedCategory, handlerSelectCategories,  handlerSubmit, handlerDelete, handlerComplete}) => {
    return (
        <>
        <CreateForm notes={notes} categories={categories} handlerSubmit={handlerSubmit}/>
    <NoteList notes={notes} categories={categories} getSelectedCategory={getSelectedCategory} handlerSelectCategories={handlerSelectCategories} handlerComplete={handlerComplete} handlerDelete={handlerDelete}/>
        </>
    )
}

export default HomePage;