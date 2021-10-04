import { REQUEST_STATUS } from "../../variables/constants";
import { GET_NEWS_FAILURE, GET_NEWS_PENDING, GET_NEWS_SUCCESS } from "./actions";

const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE,
    },
};

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_NEWS_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                },
            };
        }
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_NEWS_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        }
        default:
            return state;
    }
};