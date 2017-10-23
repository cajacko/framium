import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

let id = 0;

class ChangeUrlRender extends PureComponent {
  constructor(props) {
    super(props);

    this.id = `ChangeUrlRender-${id}`;
    id += 1;
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor={this.id}>Change URL</label>
        <input
          id={this.id}
          type="text"
          value={this.props.url || ''}
          onChange={this.props.onUrlChange}
          placeholder="Framium Service URL"
        />
        <button type="submit">Set</button>
      </form>
    );
  }
}

ChangeUrlRender.propTypes = {
  url: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ChangeUrlRender.defaultProps = {
  url: '',
};

export default ChangeUrlRender;
