import React from 'react';
import cat from 'assets/img/cat.png';
export default function Cat(props) {
  return (
    <span
      style={{
        position: 'absolute',
        top: props.mouseY,
        left: props.mouseX
      }}
    >
      <img src={cat} />
    </span>
  );
}
