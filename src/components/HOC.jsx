import React from 'react';

export default function HOC(Component) {
  return class MouseLocator extends React.PureComponent {
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
      return <Component {...this.props} {...this.state} />;
    }
  };
}
