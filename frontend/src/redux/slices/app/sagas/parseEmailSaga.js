import { call, put } from "redux-saga/effects";

import { parseEmailApi } from "../../../../apis";
import { parseEmailErrorAction, parseEmailSuccessAction } from "../actions";

export function* parseEmailSaga({ emailText }) {
  try {
    const body = {
      emailText,
    };

    const { data } = yield call(parseEmailApi, body);

    yield put(parseEmailSuccessAction(data));
  } catch (error) {
    yield put(parseEmailErrorAction(error));
  }
}
