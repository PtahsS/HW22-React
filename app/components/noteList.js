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
   }
    
});


const NoteList = ({ notes, categories, handlerComplete, handlerDelete}) =>{
    const [getCategory, setCategory] = useState([]);

    const handlerChange = ({target}) =>{
        let newCat = target.innerText;
        if(getCategory.includes(newCat)) {
            setCategory(getCategory.filter(cat => cat !== newCat))
        } else {
            setCategory([newCat, ...getCategory])
        }        
        console.log(getCategory)
    }
    

    let displayNotes = []
    if(getCategory.length === 0) {
        displayNotes= notes
    } else {
        displayNotes= notes.filter( note => 
            note.category.some(tag =>
                getCategory.some(tag2 => tag === tag2)
                )
             )
            
    }

   
    return (
        <div>
        <h2 className={css(style.articleList)}>ARTICLE LIST</h2>
        {categories.map(category=> (
                        <button 
                         onClick={handlerChange} 
                            style={getCategory.includes(category) 
                                ? {background: "#555", color: "white"} 
                                : {background: "#aaa"}
                            }
                        >
                                {category}
                        </button>
                    ))}
        <ul>
            {displayNotes.map(note=> (
                   <li key={note.id}  className={css(style.listItem)}>
                        <Link to={`/note/${note.id}`} className={css(style.title)}>
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