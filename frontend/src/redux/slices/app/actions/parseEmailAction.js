export const PARSE_EMAIL = 'app/parseEmail';
export const PARSE_EMAIL_SUCCESS = `${PARSE_EMAIL}_SUCCESS`;
export const PARSE_EMAIL_ERROR = `${PARSE_EMAIL}_ERROR`;

export const parseEmailAction = (emailText) => {
  return {
    type: PARSE_EMAIL,
    emailText,
  }
}

export const parseEmailSuccessAction = (extractedText) => {
  return {
    type: PARSE_EMAIL_SUCCESS,
    extractedText,
  }
}

export const parseEmailErrorAction = (error) => {
  return {
    type: PARSE_EMAIL_ERROR,
    error,
  }
}