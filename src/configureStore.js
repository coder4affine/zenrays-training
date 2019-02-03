import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import log from "./middleware/logMiddleWare";
import throttle from "./middleware/throttleMiddleware";
// import moduleName from "redux-logger";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, log, throttle))
  );
  return store;
}
