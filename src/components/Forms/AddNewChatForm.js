import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";

export default function AddNewChatForm() {
    const dispatch = useDispatch();

    const addNewChat = (e) => {
        e.preventDefault();
        dispatch(addChat(prompt('Введите название нового чата:')));
    };

    return (
        <div className="new-chat">
            <form onSubmit={addNewChat}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="new-chat__btn"
                >
                    Start new chat
                </Button>
            </form>
        </div>
    );
}