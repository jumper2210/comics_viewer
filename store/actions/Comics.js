export const FETCH_COMIC = "FETCH_COMIC";
export const fetchComics = () => {
  let data = [];
  return async (dispatch) => {
    for (let i = 2327; i >= 2319; i--) {
      const response = await fetch(`https://xkcd.com/${i}/info.0.json`, {});

      const json = await response.json();

      data.push(json);
    }
    dispatch({ type: FETCH_COMIC, comics: data });
  };
};
