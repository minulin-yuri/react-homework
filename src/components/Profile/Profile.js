import ChatsPanel from "../ChatsPanel/ChatsPanel";

export default function Profile() {
    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <h2>Это страница с профилем</h2>
            </section>
        </div>
    );
}