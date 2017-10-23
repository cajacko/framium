export default function (url) {
  return {
    type: 'CHANGE_URL',
    payload: url,
  };
}
