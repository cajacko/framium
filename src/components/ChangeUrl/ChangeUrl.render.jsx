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

class ChangeUrlRender extends PureComponent {
  constructor(props) {
    super(props);

    this.id = `ChangeUrlRender-${id}`;
    id += 1;
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Container>
          <Label htmlFor={this.id}>Change Service URL</Label>
          <Input
            id={this.id}
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
