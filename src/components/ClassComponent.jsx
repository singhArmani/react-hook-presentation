import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Child from './Child';

export default class ClassComponent extends PureComponent {
  static propTypes = {};

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
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Child {...this.state} />
      </div>
    );
  }
}
