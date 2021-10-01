import moment from 'moment';
import { ADD_CHAT, DELETE_CHAT } from './actions';
import Chats from '../../variables/chats';

const initialState = {
  chats: Chats,
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        chats: [...state.chats, {
          id: moment().format(),
          name: payload,
          icon: `${payload}.png`,
          status: "I'm using MYChat!",
        }],
      };
    }
    case DELETE_CHAT: {
      const newChats = state.chats.filter(({ id }) => id !== payload);
      return {
        ...state,
        chats: newChats,
      };
    }
    default:
      return state;
  }
};