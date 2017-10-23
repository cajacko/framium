import { connect } from 'react-redux';
import App from 'components/App/App.render';

/**
 * Get properties from the state and pass them to the components props
 *
 * @param  {Object} state           This is prefilled with the redux state
 * @return {Object}               The properties you want to pass to the
 * component
 */
const mapStateToProps = ({ url, showChangeUrl }) => ({ url, showChangeUrl });

export default connect(mapStateToProps, undefined)(App);
