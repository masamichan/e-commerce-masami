import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySctions = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
