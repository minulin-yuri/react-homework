import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Chat from "../Chat/Chat";
import Nochat from "../Nochat/Nochat";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route
                    exact
                    path="/chats"
                >
                    <Chat />
                </Route>
                <Route
                    exact
                    path="/chats/:chatId"
                >
                    <Chat />
                </Route>

                <Route path="/nochat">
                    <Nochat />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}