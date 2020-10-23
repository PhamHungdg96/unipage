import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from './app'
class Root extends React.Component {
    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
};
ReactDOM.render(
    <Root />,
    document.getElementById("root")
);