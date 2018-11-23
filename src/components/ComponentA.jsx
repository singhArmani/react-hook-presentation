import React from 'react';

export default function ComponentA(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      mouseX: {props.mouseX}
      mouseY: {props.mouseY}
    </div>
  );
}
