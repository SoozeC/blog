import { connect } from "react-redux";
import Actions from "../../components/Articles/Actions";
import {removeArticle} from "../../data/actions";

const mapDispatchToProps = (dispatch, { article }) => {
    return {
        onDelete: () => dispatch(removeArticle(article)),
    };
};

export default connect(null, mapDispatchToProps)(Actions);