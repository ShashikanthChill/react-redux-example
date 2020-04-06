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
    return state;
}

export default rootReducer;