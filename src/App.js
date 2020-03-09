import React from "react";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import "../src/App.scss";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../src/reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  allReducers,

  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
