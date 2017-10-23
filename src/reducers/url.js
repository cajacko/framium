const defaultState = null;

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_URL':
      return payload;

    default:
      return state;
  }
};
