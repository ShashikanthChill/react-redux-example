const initState = {
    words: [
        { id: 1, word: "lmao" },
        { id: 2, word: "lol" },
        { id: 3, word: "rofl" },
        { id: 4, word: "lulz" },
        { id: 5, word: "lmfao" },
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_WORD") {
        let updatedWords = state.words.filter(word => word.id !== action.id);
        return {
            ...state,
            words: updatedWords
        }
    }
    return state;
}

export default rootReducer;