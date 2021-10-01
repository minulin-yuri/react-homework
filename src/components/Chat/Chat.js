import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from 'react';
import { Redirect, useParams } from "react-router";

import { selectCurrentChat } from "../../store/chats/selectors";

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import AddMessageForm from "../Forms/AddMessageForm.js";
import ChatsPanel from "../ChatsPanel/ChatsPanel";
import Message from './../Message/Message';
import './Chat.scss';
import { selectMessages } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";
import { AUTHORS } from "../../variables/constants";


export default function Chat() {
    //получение id текущего чата
    const { chatId } = useParams();
    // получение текущего чата
    const currentChat = useSelector(selectCurrentChat(chatId));

    const dispatch = useDispatch();
    //получение списка сообщений
    const messages = useSelector(selectMessages);
    /**
     * Функция добавления сообщения
     */
    const sendMessage = useCallback(
        (text, author) => {
            dispatch(addMessage(chatId, text, author));
        },
        [chatId]
    );

    /**
     * Функция отправки сообщения пользователем
     */
    const handleAddMessage = useCallback(
        (text) => {
            sendMessage(text, AUTHORS.human);
        },
        [sendMessage]
    );

    /**
     * Функция для добавления ответа на сообщение
     */
    useEffect(() => {
        const currentMessages = messages[chatId];

        //если сообщений до этого не было
        if (!!chatId && !currentMessages) {
            //бот задает первым вопрос
            sendMessage('What can I help you?', AUTHORS.bot);
            return;
        }

    }, [messages, chatId]);


    //если введен некорректный id чата перенаправляется на nochat
    if (chatId && !currentChat) {
        return <Redirect to="/nochat" component="<Nochat />" />;
    }

    return (
        <div className="container">
            <ChatsPanel />
            <section className="content message">
                <div className="message-list">
                    {/* если не определен id чата */}
                    {!chatId &&
                        <Typography className="chat-header">
                            Выберите чат
                        </Typography>
                    }
                    {/* если определен id чата и есть текущий чат */}
                    {!!chatId && !!currentChat &&
                        <>
                            <Typography className="chat-header">
                                Chat with <span>{currentChat.name}</span>
                            </Typography>
                            <Divider />
                            <Message messageList={messages[chatId] || []} />
                        </>
                    }
                </div>
                <AddMessageForm
                    handleSubmit={handleAddMessage}
                />
            </section >
        </div >
    );
}