import { connect } from 'react-redux';
import App from 'components/App/App.render';

const mapStateToProps = ({ url, showChangeUrl }) => ({ url, showChangeUrl });

export default connect(mapStateToProps, undefined)(App);
