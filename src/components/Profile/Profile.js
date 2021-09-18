import { useDispatch, useSelector } from "react-redux";

import { checkCheckbox } from "../../store/profile/actions";
import ChatsPanel from "../ChatsPanel/ChatsPanel";


export default function Profile() {
    const showStatus = useSelector((state) => state.showStatus);
    const dispatch = useDispatch();

    console.log(showStatus);

    const handleChange = () => {
        dispatch(checkCheckbox);
    }

    return (
        <div className="container">
            <ChatsPanel />
            <section className="content">
                <h2>Это страница с профилем</h2>
                <div>
                    <input
                        type="checkbox"
                        id="check"
                        onChange={handleChange}
                    />
                    <label htmlFor="check">Показать статус пользователя</label>
                </div>
                {showStatus && <div>Тут будет статус пользователя</div>}
            </section>
        </div>
    );
}