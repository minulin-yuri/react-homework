export const selectChats = (state) => state.chats.chats;
export const selectCurrentChat = (id) => (state) =>
    state.chats.chats.find((chat) => id === chat.id);
export const selectIfChatExists = (id) => (state) =>
    !!state.chats.chats.find((chat) => id === chat.id);