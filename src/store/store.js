import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { newsReducer } from "./news/reducer";

const middlewares = [thunk];

const persistConfig = {
    key: "MYChat",
    storage,
    blacklist: ["messages"],
};


const rootReducer = combineReducers({
    news: newsReducer,
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);