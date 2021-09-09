import React from 'react';
import Chats from './../variables/chats';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function ChatList(props) {
    const imgCatalog = "./../images/chats/";

    return (
        <div className="chats-list">
            <Typography className="typography-header">CHATS</Typography>
            <Divider />
            <List>
                {Chats.map(item => (
                    <ListItem className="list-item" button key={item.name}>
                        <ListItemAvatar>
                            <Avatar alt={item.name} src={imgCatalog + item.icon} >
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.status} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );
}

export default ChatList;