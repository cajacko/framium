export default (state = false, { type }) => {
  switch (type) {
    case 'SHOW_CHANGE_URL':
      return true;

    case 'CHANGE_URL':
      return false;

    default:
      return state;
  }
};
