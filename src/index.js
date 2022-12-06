//React
import React from "react";
import ReactDOM from "react-dom/client";
//Redux
import { Store, createStore } from "redux";

//React-redux
import { Provider } from "react-redux";
//Own
import App from "./App/App";

//Reducer
import reducers from "./Reducers/Reducers";

const store = createStore(reducers)

console.log(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);