import { REQUEST_STATUS } from "../../variables/constants";

export const selectNewsLoading = (state) =>
    state.news.request.status === REQUEST_STATUS.PENDING;
export const selectNews = (state) => state.news.list;
export const selectNewsError = (state) => state.news.request.error;