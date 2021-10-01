import { CHECK_CHECKBOX } from './actions';

const initialState = {
    showStatus: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_CHECKBOX:
            return {
                ...state,
                showStatus: !state.showStatus,
            }
        default:
            return state
    }
}