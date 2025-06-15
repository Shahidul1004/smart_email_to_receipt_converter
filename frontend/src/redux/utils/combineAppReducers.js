/**
 * Store helper functions to abstract Redux implementation details
 */
import { combineReducers } from 'redux';

/**
 * Combines multiple reducers into a single reducer function
 * This abstracts the Redux combineReducers implementation
 *
 * @param {Object} reducers - An object whose values are reducer functions
 * @returns {Function} A reducer function that invokes every reducer
 */
export const combineAppReducers = (reducers) => combineReducers(reducers);
