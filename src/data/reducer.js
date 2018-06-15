const removeArticle = (state, { id } ) => {
	// console.log(action);
	const copyState = {...state };
	delete copyState.articles[id];
	return copyState;
}; 

const editArticle = (state) => {}

const reducer = (state, action) => {
    switch (action.type) {
    	case "removeArticle": return removeArticle(state, action);
    	case "editArticle": return editArticle(state, action);
    	default: return state;
    }
}

export default reducer;