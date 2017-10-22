import { connect } from 'react-redux';
import App from 'components/App/App.render';

const mapStateToProps = ({ url }) => ({ url });

export default connect(mapStateToProps, undefined)(App);
