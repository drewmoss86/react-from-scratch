import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.js"
import "./index.css";

const appRouting = (
    <Router>
        <Routes>
            <Switch>
                <Route path="/" element={App} />
            </Switch>
        </Routes>
    </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));