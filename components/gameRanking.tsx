import React from 'react';
import styled from '@emotion/styled';
import { BUTTON_TYPES } from '../common/renderData';

function GameRankingRC(props: { className?: string; ranking: BUTTON_TYPES }): JSX.Element {
  const { className, ranking } = props;
  return (
    <div className={className}>
      {ranking === BUTTON_TYPES.ASCENDING ? 'По возрастанию' : 'По убыванию'}
    </div>
  );
}

const GameRanking = styled(GameRankingRC)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  background-image: url(./backgrounds/${(props) => props.ranking}Icon.png);
  background-repeat: no-repeat;
  background-position: ${(props) => (props.ranking === BUTTON_TYPES.ASCENDING ? 'left' : 'right')};

  justify-content: ${(props) =>
    props.ranking === BUTTON_TYPES.ASCENDING ? 'flex-start' : 'flex-end'};
`;

export default GameRanking;
