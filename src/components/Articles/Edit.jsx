import React from "react";
import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";


const Edit = ( { fields, title, onSubmit } ) => !fields ? <FourOhFour /> : (
   	<React.Fragment>
        <h2>Edit Article: { title }</h2>
        <Form className="panel-body" fields={ fields } onSubmit={ onSubmit } button="Update Article" />
    </React.Fragment>
);

export default Edit;