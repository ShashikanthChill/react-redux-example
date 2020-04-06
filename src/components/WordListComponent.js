import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const WordsList = (props) => {
    if (props.words.length === 0) {
        return (
            <p>No words to display</p>
        )
    }
    const words = props.words.map(word => {
        console.log(word.word);
        return (
            <li key={word.id}>
                <NavLink to={`/${word.id}`}>{word.word}</NavLink>
            </li >
        )
    });

    return (
        <ol>
            {words}
        </ol>
    )
}

const mapStateToProps = (state) => {
    return { words: state.words }
}

export default connect(mapStateToProps)(WordsList);