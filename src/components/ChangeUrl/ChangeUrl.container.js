import { connect } from 'react-redux';
import ChangeUrl from 'components/ChangeUrl/ChangeUrl.component';
import changeUrl from 'actions/changeUrl';

const mapDispatchToProps = dispatch => ({
  changeUrl: url => dispatch(changeUrl(url)),
});

export default connect(undefined, mapDispatchToProps)(ChangeUrl);
