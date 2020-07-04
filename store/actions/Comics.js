export const FETCH_COMIC = "FETCH_COMIC";
export const fetchComics = () => {
  return async (dispatch) => {
    for (let i = 2327; i >= 2319; i--) {
      fetch(`https://xkcd.com/${i}/info.0.json`, {})
        .then((res) => {
          return res.json();
        })
        .then((resData) => {
          const data = [];
          data.push(resData);
          dispatch({ type: FETCH_COMIC, comics: data });
        });
      dispatch;
    }
  };
};
