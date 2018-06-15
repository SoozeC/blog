const removeArticle = (state, { id } ) => {
	// console.log(action);
	const copyState = {...state };
	delete copyState.articles[id];
	return copyState;
}; 

const editArticle = (state, { title, article, tags, id }) => {
	return {
		...state, articles: { 
			...state.articles, [id]: {
				...state.articles[id], 
				title: title, 
				article: article, 
				tags: tags, 
			},
		},
	};
};

const addComments = (state, { email, comment, id }) => {
	console.log(email, comment, id);
	return {
		...state, articles: { 
			...state.articles, [id]: {
				...state.articles[id], 
				comments: state.articles[id].comments.concat({email, comment}) 
			},
		},
	};
};

const reducer = (state, action) => {
    switch (action.type) {
    	case "removeArticle": return removeArticle(state, action);
    	case "editArticle": return editArticle(state, action);
    	case "addComments": return addComments(state, action);
    	default: return state;
    }
};

export default reducer;