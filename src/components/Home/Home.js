import { Typography } from "@material-ui/core";
import ChatsPanel from "../ChatsPanel/ChatsPanel";

import './Home.scss';

export default function Home() {
    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <Typography className="chat-header header">
                    Это главная страница
                </Typography>
            </section>
        </div>
    );
}