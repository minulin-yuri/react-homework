import { Button, CircularProgress, Pagination } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/news/actions";
import { selectNews, selectNewsError, selectNewsLoading } from "../../store/news/selectors";
import { NEWS_URL } from "../../variables/constants";
import LimitSelect from "../LimitSelect/LimitSelect";

import './News.scss';

const initialOptions = {
    _limit: 5,
    _start: 0,
}


export const News = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectNewsError);
    const loading = useSelector(selectNewsLoading);
    const news = useSelector(selectNews);

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [options, setOptions] = useState(initialOptions);

    const setUrlWithOptions = (url, options) => {
        if (options.length === 0) return url;

        let newUrl = `${url}?`;
        for (let key in options) {
            newUrl += `${key}=${options[key]}&`;
        };
        return newUrl.slice(0, -1);
    }

    const reload = () => {
        dispatch(getNews(setUrlWithOptions(NEWS_URL, options)));
        console.log(setUrlWithOptions(NEWS_URL, options));
    };

    const handleChangeLimit = useCallback((e) => {
        e.preventDefault();
        setLimit(e.target.value);
    }, []);

    const handleChangePage = useCallback((e) => {
        e.preventDefault();
        setPage(e.target.innerText);
    }, []);

    useEffect(() => {
        const newStart = (page - 1) * limit;
        setOptions(() => {
            return {
                _limit: limit,
                _start: newStart,
            }
        });
    }, [limit, page]);

    // useEffect(() => {
    //     reload();
    // }, []);

    useEffect(() => {
        reload();
    }, [options]);

    return (
        <div className="news">
            <h2 className="news__header">News</h2>
            <LimitSelect
                limit={options._limit}
                onChange={handleChangeLimit}
            />
            {error ? (
                <>
                    <h3>Error: {error}</h3>
                    <Button onClick={reload}>Refresh</Button>
                </>
            ) : (
                news.map((n) => (
                    <article key={n.id}>
                        <h4>{n.title}</h4>
                    </article>
                ))
            )}
            {loading && <CircularProgress />}
            <div className="news__pagination">
                <Pagination
                    count={5}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChangePage}
                    hideNextButton="true"
                    hidePrevButton="true"
                    boundaryCount="5"
                />
            </div>
        </div>
    );
};