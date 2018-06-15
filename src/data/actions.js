export const removeArticle = (article) => ({ 
	type: "removeArticle",
	id: article.id,

});

export const editArticle = (article) => ({ 
	type: "editArticle",
	id: article.id,

});