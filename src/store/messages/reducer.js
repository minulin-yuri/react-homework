import { ADD_MESSAGE } from "./actions";
import { DELETE_CHAT } from "../chats/actions";
import Messages from "../../variables/messages";
import moment from "moment";

const initialState = {
    messages: Messages,
};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: [
                        ...(state.messages[payload.chatId] || []),
                        {
                            id: moment().format(),
                            text: payload.text,
                            author: payload.author,
                        },
                    ],
                },
            };
        }
        case DELETE_CHAT: {
            const newMessages = { ...state.messages };
            delete newMessages[payload];

            return {
                ...state,
                messages: newMessages,
            };
        }
        default:
            return state;
    }
};