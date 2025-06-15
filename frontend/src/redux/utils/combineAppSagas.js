/**
 * Helper functions to abstract Redux-Saga implementation
 */
import { all, call } from 'redux-saga/effects';

/**
 * Combines multiple sagas into one root saga
 *
 * @param {Array} sagas - List of saga generator functions
 * @returns {Function} A generator function that combines all sagas
 */
export const combineAppSagas = (sagas) =>
  function* rootSaga() {
    yield all(sagas.map((saga) => call(saga)));
  };
