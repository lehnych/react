import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { HomePage } from "./pages";
import { ChatPage } from "./pages";
import { AccountPage } from "./pages";
import { ErrorPage } from "./pages";

import "./index.css";

const light = createTheme({
    theme: {
        color: "red",
    },
});

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={light}>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route path="/chat">
                        <ChatPage />
                    </Route>

                    <Route path="/account">
                        <AccountPage />
                    </Route>

                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
