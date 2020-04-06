import React from "react";
import { connect } from "react-redux";

const Word = (props) => {
    console.log(props);

    return (
        <p>{props.word.word}</p>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.wordId;
    return {
        word: state.words[id - 1]
    }
}

export default connect(mapStateToProps)(Word)