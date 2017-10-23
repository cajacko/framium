import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Input,
  Button,
  Container,
} from 'components/ChangeUrl/ChangeUrl.style';

let id = 0;

/**
 * The change Url render component. Display the inputs necessary to change the
 * url
 *
 * @type {Class}
 */
class ChangeUrlRender extends PureComponent {
  /**
   * Initiate the class. Sets a unique ID.
   *
   * @param  {Object} props The passed props
   * @return {Void}       No return value
   */
  constructor(props) {
    super(props);

    this.id = `ChangeUrlRender-${id}`;
    id += 1;
  }

  /**
   * Focus on the input when the component mounts
   *
   * @return {Void} No return value
   */
  componentDidMount() {
    this.input.focus();
  }

  /**
   * Render the component
   *
   * @return {component} React component to render
   */
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Container>
          <Label htmlFor={this.id}>Change Service URL</Label>
          <Input
            id={this.id}
            innerRef={(input) => {
              this.input = input;
            }}
            type="text"
            value={this.props.url || ''}
            onChange={this.props.onUrlChange}
            placeholder="Framium Service URL"
          />
          <Button type="submit">Set</Button>
        </Container>
      </Form>
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
