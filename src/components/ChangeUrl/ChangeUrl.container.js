import { connect } from 'react-redux';
import ChangeUrl from 'components/ChangeUrl/ChangeUrl.component';
import changeUrl from 'actions/changeUrl';

/**
 * Map dispatcher actions to the component. So it can manipulate the redux store
 *
 * @param  {Function} dispatch The dispatch function from redux
 * @return {Object}          The props to pass to the component
 */
const mapDispatchToProps = dispatch => ({
  changeUrl: url => dispatch(changeUrl(url)),
});

export default connect(undefined, mapDispatchToProps)(ChangeUrl);
