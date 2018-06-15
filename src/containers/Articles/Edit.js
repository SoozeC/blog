import { connect } from "react-redux";
import Edit from "../../components/Articles/Edit";

const mapStateToProps = (state, { id }) => {

	const article = state.articles[id]

	const fields = article ? [
	    { name: "title", label: "Title", value: article.title },
	    { name: "article", label: "Article", value: article.article },
	    { name: "tags", label: "Tags", value: article.tags },

	] : null;


    return {
        fields: fields,
        title: article ? article.title : null,
        tags: article ? article.tags : null,
    };
};

const mapDispatchToProps = (dispatch, { article }) => {
	return {
       onEdit: () => dispatch(editArticle(article)),
    };
}

export default connect(mapStateToProps)(Edit);