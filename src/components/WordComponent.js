import React from "react";
import { connect } from "react-redux";
import { deleteWord } from "../actions/DeleteWordAction";

const Word = (props) => {
    return (
        <p key={props.word.id} onClick={() => { props.deleteWord(props.word.id); props.history.push("/") }}>{props.word.word}</p>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.wordId
    return {
        word: state.words.find(word => word.id == id)
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        deleteWord: (id) => {
            dispatch(deleteWord(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(Word)