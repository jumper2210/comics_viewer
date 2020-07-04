import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import comicsReducer from "./store/reducers/comics";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  comics: comicsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
