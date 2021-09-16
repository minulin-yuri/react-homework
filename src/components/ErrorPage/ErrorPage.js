import ChatsPanel from "../ChatsPanel/ChatsPanel";

export default function ErrorPage() {
    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <h2>Ошибка 404</h2>
                <p>Данной страницы не существует!</p>
            </section>
        </div>
    );
}