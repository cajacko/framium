import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChangeUrlRender from 'components/ChangeUrl/ChangeUrl.render';

class ChangeUrl extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { url: this.props.url || '' };

    this.onUrlChange = this.onUrlChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.changeUrl(this.state.url);
  }

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
