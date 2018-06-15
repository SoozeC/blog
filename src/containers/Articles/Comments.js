import { connect } from "react-redux";
import { addComments } from "../../data/actions";
import Comments from "../../components/Articles/Comments";

const mapDispatchToProps = (dispatch, { id }) => {
	
			
	return {
       addComments: (data) => dispatch(addComments(id, data)),
    };
}

export default connect(null, mapDispatchToProps)(Comments);