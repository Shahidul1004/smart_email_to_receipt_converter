import parseEmailWatcher from './slices/app/watcher';
import { combineAppSagas } from './utils';

/**
 * Root saga combines all sagas in the application
 */
export default combineAppSagas([
  parseEmailWatcher,
  // Add other sagas here as they are created
]);
