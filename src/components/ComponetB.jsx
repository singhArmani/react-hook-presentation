import React, { useContext } from 'react';
import { useMouseLocation, useWindowWidth } from 'hooks';
import { TalkContext } from 'TalkContext';

export default function ComponetB(props) {
  const [mouseX, mouseY] = useMouseLocation();
  const [width] = useWindowWidth(window.innerWidth);

  // use Context
  const value = useContext(TalkContext);
  return (
    <div>
      <h2>{props.title}</h2>
      mouseX: {mouseX}, mouseY: {mouseY}, windowWidth: {width}, talkContext:{' '}
      {value.talk}
    </div>
  );
}
