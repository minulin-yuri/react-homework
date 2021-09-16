import ChatsPanel from "../ChatsPanel/ChatsPanel";

import './Home.scss';

export default function Home() {
    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <h2>Это главная страница</h2>
            </section>
        </div>
    );


}
