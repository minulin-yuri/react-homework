export const GET_NEWS_PENDING = "NEWS::GET_PENDING";
export const GET_NEWS_SUCCESS = "NEWS::GET_SUCCESS";
export const GET_NEWS_FAILURE = "NEWS::GET_FAILURE";

const getNewsPending = () => ({
    type: GET_NEWS_PENDING,
});

const getNewsSuccess = (news) => ({
    type: GET_NEWS_SUCCESS,
    payload: news,
});

const getNewsFailure = (error) => ({
    type: GET_NEWS_FAILURE,
    payload: error,
});

export const getNews = (url) => async (dispatch) => {
    dispatch(getNewsPending());

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }

        const result = await response.json();
        dispatch(getNewsSuccess(result));
    } catch (e) {
        console.log(e);
        dispatch(getNewsFailure(e.message));
    }
};
