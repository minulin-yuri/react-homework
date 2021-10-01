import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { deleteChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';

import ChatListItem from '../ChatList/ChatListItem';


export default function ChatList() {

    const chats = useSelector(selectChats);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleDeleteChat = useCallback(
        (id) => {
            dispatch(deleteChat(id));
            history.push(`/chats`);
        },
        [dispatch]
    );

    return (
        <div className="chats-list">
            <Typography className="typography-header">CHATS</Typography>
            <Divider />
            < List >
                {
                    chats.map(item => (
                        <ChatListItem
                            key={item.id}
                            item={item}
                            id={item.id}
                            onDeleteChat={handleDeleteChat}
                        />
                    ))
                }
            </List >
            <Divider />
        </div >

    );
}