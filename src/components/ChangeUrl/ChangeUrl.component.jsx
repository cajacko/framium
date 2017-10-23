import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChangeUrlRender from 'components/ChangeUrl/ChangeUrl.render';

/**
 * The ChangeUrl component. Handles all the business logic for this component.
 * Changes the url input, and submits the data
 *
 * @type {Class}
 */
class ChangeUrl extends PureComponent {
  /**
   * Initiate the class. Set default state and bind methods
   *
   * @param  {Object} props The passed props
   * @return {Void}       No return value
   */
  constructor(props) {
    super(props);

    this.state = { url: this.props.url || '' };

    this.onUrlChange = this.onUrlChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Update the url in the components state when it changes
   *
   * @param  {Event} event The event passed from the input field
   * @return {Void}   No return value
   */
  onUrlChange(event) {
    this.setState({ url: event.target.value });
  }

  /**
   * Submit the url and prevent a page reload
   *
   * @param  {Event} event The passed event from the form
   * @return {Void}       No return value
   */
  onSubmit(event) {
    event.preventDefault();

    this.props.changeUrl(this.state.url);
  }

  /**
   * Render the component
   *
   * @return {Component} The component to render
   */
  render() {
    return (
      <ChangeUrlRender
        url={this.state.url}
        onUrlChange={this.onUrlChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

ChangeUrl.propTypes = {
  url: PropTypes.string,
  changeUrl: PropTypes.func.isRequired,
};

ChangeUrl.defaultProps = {
  url: '',
};

export default ChangeUrl;
