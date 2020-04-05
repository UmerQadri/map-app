import createSagaMiddleware from "redux-saga";
import { compose, createStore, applyMiddleware } from "redux";
import sagas from "../sagas";
import { TaskReducer } from "../reducers";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    TaskReducer,
    composeEhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
