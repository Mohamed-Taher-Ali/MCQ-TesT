import React from 'react';
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers"


const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
);

export default ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);