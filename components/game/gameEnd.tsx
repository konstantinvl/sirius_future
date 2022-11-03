import React from 'react';
import styled from '@emotion/styled';
import StartButton from '../startButton';

function GameEndRC(props: { className?: string; show: boolean; onClick: () => void }): JSX.Element {
  const { className, show, onClick } = props;

  return (
    <>
      {show && (
        <div className={className}>
          <span>Победа</span>
          <StartButton label='Заново' onClick={onClick} />
        </div>
      )}
    </>
  );
}

const GameEnd = styled(GameEndRC)`
  position: absolute;
  width: 70%;
  height: 70vh;
  margin: 15vh 15%;
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  z-index: 999;
  & > span {
    font-family: 'Circe Rounded Alt ';
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 163px;
    display: flex;
    align-items: center;

    background: linear-gradient(180deg, #fff9d8 8.65%, #ffe44f 69.58%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export default GameEnd;
