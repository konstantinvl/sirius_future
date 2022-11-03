import React from 'react';
import styled from '@emotion/styled';
import { useDrag } from 'react-dnd';

function GameTokenRC(props: {
  className?: string;
  value: string;
  gameSet: string;
  background: string;
  visible: boolean;
  position: string;
}): JSX.Element {
  const { className, value, visible } = props;
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'token',
      item: { value },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [value]
  );
  return (
    <div
      ref={drag}
      style={{ opacity, visibility: visible ? 'visible' : 'hidden' }}
      className={className}>
      {value}
    </div>
  );
}

const GameToken = styled(GameTokenRC)`
  width: 158px;
  height: 158px;
  background-image: url(./gamesets/${(props) => props.gameSet + '/' + props.background + '.png'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  color: #ffffff;
  position: ${(props) => props.position};
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
`;

export default GameToken;
