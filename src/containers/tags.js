import { connect } from "react-redux";

import Articles from "../../components/Articles/Articles";

const mapStateToProps = state => {
    return {
        tags: state.articles.tags,
    };
};

export default connect(mapStateToProps)(Tags);