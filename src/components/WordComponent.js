import React from "react";
import { connect } from "react-redux";

const Word = (props) => {
    const words = props.words.map(word => {
        console.log(word.word);
        return (
            <li key={word.id}>{word.word}</li>
        )
    });

    return (
        <ul>
            {words}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return { words: state.words }
}

export default connect(mapStateToProps)(Word);