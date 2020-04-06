import createSagaMiddleware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import sagas from "../sagas";
import { TaskReducer } from "../reducers";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    TaskReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(sagas);

  return store;
}
