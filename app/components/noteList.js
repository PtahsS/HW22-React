import React, { useState } from "react"
import { Link } from "react-router-dom";
import { styles } from './styles';
import { StyleSheet, css } from 'aphrodite-jss';
import classnames from "classnames";

const style = StyleSheet.create({
    articleList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
   listItem: {
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: "20px"
   },
   title: {
       width: "270px",
       //border: "1px solid #777",
       padding: "5px",
       textDecoration: "none",
       color: "black"
   },
   noteComplete: {
       color: "lightgrey",

       "& a": {
           textDecoration: "line-through"
       }
   }
    
});


const NoteList = ({ notes, categories, getSelectedCategory, handlerSelectCategories, handlerComplete, handlerDelete}) =>{

    
    

    let displayNotes = []
    if(getSelectedCategory.length === 0) {
        displayNotes= notes
    } else {
        displayNotes= notes.filter( note => 
            note.category.some(tag =>
                getSelectedCategory.some(tag2 => tag === tag2)
                )
             )
            
    }

    const noteclasses = note => 
        classnames(css(style.listItem), {
            [css(style.noteComplete)]: note.complete,
        })

   
    return (
        <div>
        <h2 className={css(style.articleList)}>ARTICLE LIST</h2>
        {categories.map((category, index)=> (
                        <button key={index}
                         onClick={handlerSelectCategories} 
                            style={getSelectedCategory.includes(category) 
                                ? {background: "#555", color: "white"} 
                                : {background: "#aaa"}
                            }
                        >
                                {category}
                        </button>
                    ))}
        <ul>
            {displayNotes.map(note=> (
                   <li key={note.id}  className={noteclasses(note)}>
                        <Link to={`/note/${note.id}`} className={css(style.title)} >
                        <span>{note.title}</span>   
                        </Link>
                        <input
                            type="checkbox"
                            name="complete"
                            checked={note.complete}
                            onChange={()=>{handlerComplete(note.id)}}
                        />
                        <button onClick={()=>{handlerComplete(note.id)}}>
                            {note.complete ? "Uncomplete" : "Complete"}
                        </button>
                        <button onClick={()=> {handlerDelete(note.id)}}>Delete note</button>
                    </li> 
                
            ))}
        </ul>
        
        </div>
    )
}

export default NoteList