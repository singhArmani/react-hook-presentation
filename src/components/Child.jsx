import React from 'react';

export default function Child(props) {
  return (
    <div title={props.title}>
      mouse x: {props.mouseX}
      mouse y: {props.mouseY}
    </div>
  );
}
