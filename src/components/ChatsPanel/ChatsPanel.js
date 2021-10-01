import AddNewChatForm from "../Forms/AddNewChatForm";

import ChatList from "../ChatList/ChatList";
import './ChatsPanel.scss';


export default function ChatsPanel() {

    return <section className="charts">
        <ChatList />
        <AddNewChatForm />
    </section>
}