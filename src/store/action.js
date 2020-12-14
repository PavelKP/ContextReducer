export const ActionType = {
  ADD_NAME: `ADD_NAME`,
};

export const ActionCreator = {
  addName(name) {
    return {
      type: ActionType.ADD_NAME,
      payload: name,
    };
  },
};
