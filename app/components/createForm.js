import React, { useState } from "react"
import shortid from 'shortid';

import { StyleSheet, css } from 'aphrodite-jss';
import classnames from "classnames";

const style = StyleSheet.create({
    createForm: {
        margin: "20px",
        padding: "20px",
        background: '#ddd',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gridGap: "30px",
    },

    addForm: {
        position: "relative"
    },

    titleInput: {
        marginBottom: "20px"
    },

    articleField: {
        marginBottom: "5px"
    },
    formTags: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: "20px"
    },
    addSubmit: {
        fontSize: "25px",

        "& button": {
            padding: "15px",
            color: "white",
            background: "#444"
        }
    }
    
});

    const CreateForm = ({ notes, categories,  handlerSubmit}) =>{

    //const categories  = ["animals", "food", "tourism", "machines", "philosophy", "marine", "history"];
    const [getTitle, setTitle] = useState("");
    const [getText, setText] = useState("");
    const [getCategory, setCategory] = useState([]);
    
    const addNote = (e) => {
        e.preventDefault();
        console.log('e', e)
        if (getTitle.trim()) {
            if(getText.trim()) {
                const note = {
                    id: shortid(),
                    title: getTitle,
                    text: getText,
                    completed: false,
                    category: getCategory,
                }
                handlerSubmit(note);
                setTitle("");
                setText("");
            } else {
                setText("");
                document.forms.form.elements.text.placeholder = "Please, enter article"
            }
        } else {
            setTitle("");
            document.forms.form.elements.title.placeholder = "Please, enter title"
        }
    }

    const handlerChange = ({target}) =>{
        const newCat = target.innerText;
        if(getCategory.includes(newCat)) {
            setCategory([getCategory.filter(cat => cat !== newCat)])
        } else {
            setCategory([newCat, ...getCategory])
        }        
    }

    return(
        <div className={css(style.createForm)}>
            <div>
                <h1>Try yourself like journalist</h1>
                <div id="form-desctiption">Any news? Please, add it!</div>
            </div>
            <form name="form" className={css(style.addForm)} onClick={(e)=>{e.preventDefault()}}>
                <div className={css(style.titleInput)}>
                    <h2>Step 1. Enter title:</h2>
                    <input
                        name="title"
                        size="100"
                        type="text"
                        placeholder="Your title"
                        value = {getTitle}
                        onChange = {({ target}) => setTitle(target.value)}
                    />
                </div>
                <div className={css(style.articleField)}>
                <h3>Step 2. Enter article:</h3>
                    <textarea
                        name="text"
                        cols= "100"
                        placeholder="Your text"
                        value = {getText}
                        onChange = {({ target}) => setText(target.value)}
                    >
                    </textarea>
                </div>
                <h4>Step 3. Choose category:</h4>
                <div className={css(style.formTags)}>
                    {categories.map((category, index)=> (
                        <button key={index}
                            onClick={handlerChange} 
                            style={getCategory.includes(category) 
                                ? {background: "#555", color: "white"}
                                : {background: "#aaa"}
                            }
                        >
                                {category}
                        </button>
                    ))}
                    <br/>
                    <div className={css(style.addSubmit)}>
                        <button type="submit" id="form-description" onClick={addNote}>ADD ARTICLE</button>
                    </div>
                </div>

            </form>
        </div>
    ) 
}

export default CreateForm