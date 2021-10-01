import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MaterialIcon from 'material-icons-react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const imgCatalog = "./../images/chats/";

function ChatListItem({ item, onDeleteChat, id }) {

    const handleDelete = () => {
        onDeleteChat(id);
    }

    return (
        <ListItem className="list-item" >
            <ListItemAvatar>
                <Avatar
                    alt={item.name}
                    src={`${imgCatalog}${item.icon}`} >
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.name}
                secondary={item.status}
            />
            <Link to={`/chats/${id}`}>
                <MaterialIcon
                    icon="mail"
                    color="#0077B5"
                />
            </Link>
            <Button onClick={handleDelete}>
                <MaterialIcon
                    icon="delete"
                    color="#0077B5"
                />
            </Button>
        </ListItem >
    );
}

export default ChatListItem;