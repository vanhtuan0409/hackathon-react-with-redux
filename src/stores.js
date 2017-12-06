import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";

export default function configureStore(initialState = {}) {
  const middlewares = [];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;

  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
}
