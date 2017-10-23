/**
 * Redux action to change the service url
 *
 * @param  {string} url The url to change to
 * @return {Object}     The redux action to dispatch, containing type and
 * payload
 */
export default function (url) {
  return {
    type: 'CHANGE_URL',
    payload: url,
  };
}
