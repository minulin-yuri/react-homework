import ChatsPanel from "../ChatsPanel/ChatsPanel";

export default function Nochat() {
    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <h2>Выберите какой-нибудь чат</h2>
            </section>
        </div>
    );
}