import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RenderProps extends PureComponent {
  state = {
    mouseX: 0,
    mouseY: 0
  };

  handler = event => {
    const { clientX, clientY } = event;

    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
  };

  componentDidMount = () => {
    // add an event listener
    window.addEventListener('mousemove', this.handler);
  };

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handler);
  }

  render() {
    // control goes to the user
    return this.props.render(this.state);
  }
}
