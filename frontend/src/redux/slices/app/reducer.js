import { PARSE_EMAIL, PARSE_EMAIL_ERROR, PARSE_EMAIL_SUCCESS } from "./actions";

export const PARSE_EMAIL_INITIAL_STATE = {
  emailText: null,
  extractedText: null,
  loading: false,
  error: null,
};

export default function parseEmailReducer(state = PARSE_EMAIL_INITIAL_STATE, action) {
  switch (action.type) {
    case PARSE_EMAIL:
      return {
        ...state,
        emailText: action.emailText,
        extractedText: null,
        loading: true,
      };
    case PARSE_EMAIL_SUCCESS:
      return { ...state, extractedText: action.extractedText, loading: false };
    case PARSE_EMAIL_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
