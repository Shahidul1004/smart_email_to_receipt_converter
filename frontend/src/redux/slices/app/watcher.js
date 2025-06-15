import { all, takeLatest } from "redux-saga/effects";

import { PARSE_EMAIL } from "./actions";
import { parseEmailSaga } from "./sagas";

export default function* parseEmailWatcher() {
  yield all([yield takeLatest(PARSE_EMAIL, parseEmailSaga)]);
}
