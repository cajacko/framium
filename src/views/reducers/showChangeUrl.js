export default (state = false, { type }) => {
  switch (type) {
    case 'SHOW_CHANGE_URL':
      return true;

    default:
      return state;
  }
};
