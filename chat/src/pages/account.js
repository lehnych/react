import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "@mui/material";
import {HomePage} from "./home";
import {ChatPage} from "./chat";
import {ErrorPage} from "./error";


export function AccountPage() {

    return (
        <div>
            <h1>My Account</h1>
        </div>
    );
}
