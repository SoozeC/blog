export const removeArticle = (article) => ({ 
	type: "removeArticle",
	id: article.id,

});

export const editArticle = ({ title, article, tags }, id) => { 
	return {
		type: "editArticle",
		id: id,
		title: title,
		article: article,
		tags: tags.split(" "),
	}
};

export const addComments = (id, { email, comment }) => {
	return {
		type: "addComments",
		id: id,
		email: email,
		comment: comment,
	}
};