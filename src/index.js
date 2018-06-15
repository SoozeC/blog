import React from "react";
import ReactDOM from "react-dom";
import initial from "./data/initial";
import reducer from "./data/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// import the App component
import App from "./App";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// wrap Router with Provider
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);