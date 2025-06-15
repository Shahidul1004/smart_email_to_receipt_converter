import { createSelector } from "reselect";

import { PARSE_EMAIL_INITIAL_STATE } from "../reducer";

export const parseEmailDomainSelector = (state) =>
  state.parseEmail || PARSE_EMAIL_INITIAL_STATE;

export const parseEmailSelector = () =>
  createSelector(parseEmailDomainSelector, (substate) => ({ ...substate }));
