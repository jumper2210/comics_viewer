import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { createStore, combineReducers } from "redux";
import comicsReducer from "./store/reducers/Comics";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  comics: comicsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
