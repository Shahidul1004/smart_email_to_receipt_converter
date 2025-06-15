import parseEmailReducer from './slices/app/reducer';
import { combineAppReducers } from './utils';

/**
 * Root reducer combines all reducers in the application
 */
const rootReducer = combineAppReducers({
  parseEmail: parseEmailReducer
  // Add other reducers here as they are created
});

export default rootReducer;
