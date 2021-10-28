import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { HomePage } from "./pages";
import { ChatPage } from "./pages";
import { ProfilePage } from "./pages";
import { ErrorPage } from "./pages";
import { store } from "./store";
import "./index.css";

const light = createTheme({
    theme: {
        color: "red",
    },
});

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={light}>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route path="/chat">
                            <ChatPage />
                        </Route>

                        <Route path="/profile">
                            <ProfilePage />
                        </Route>

                        <Route path="*">
                            <ErrorPage />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
