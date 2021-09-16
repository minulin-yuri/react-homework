import { Button } from "@material-ui/core";
import ChatList from "../ChatList/ChatList";
import './ChatsPanel.scss';

export default function ChatsPanel() {
    return <section className="charts">
        <ChatList />
        <div className="new-chat">
            <Button variant="contained" color="primary" className="new-chat__btn">
                Start new chat
            </Button>
        </div>
    </section>

}