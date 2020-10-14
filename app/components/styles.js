import React  from 'react';

import { StyleSheet, css } from "aphrodite-jss";
import classnames from "classnames";

export const style = StyleSheet.create({
    list: {
        paddingLeft: 0,
        marginTop: 0,
        background: 'brown'
    },
    note: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        color: "black",

        "& a" : {
            textDecoration: "none",
            color: "inherit"
        },
    },
    noteComplete: {
        color: "lightGrey",
        
        "& a" : {
            textDecoration: "line-through",
        },

        "& span" : {
            textDecoration: "line-through"
        }
    },
    
});

export const noteClasses = (note) => classnames(css(style.note), {
    [css(style.noteComplete)]: note.complete
})