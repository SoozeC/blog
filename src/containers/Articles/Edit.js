import { connect } from "react-redux";
import Edit from "../../components/Articles/Edit";
import { editArticle } from "../../data/actions";

const mapStateToProps = (state, { id }) => {

	const article = state.articles[id]

	const fields = article ? [
	    { name: "title", label: "Title", value: article.title },
	    { name: "article", label: "Article", value: article.article },
	    { name: "tags", label: "Tags", value: article.tags.join(" ") },

	] : null;


    return {
        fields: fields,
        title: article ? article.title : null,
        tags: article ? article.tags : null,
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
	return {
       onSubmit: (data) => dispatch(editArticle(data, id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);