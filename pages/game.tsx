import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';

import { BUTTON_TYPES } from '../common/renderData';
import GameToken from '../components/game/gameToken';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GameDrop from '../components/game/elements/gameDrop';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getRandomNumber, sortArray } from '../common/getRandom';
import GameBackground from '../components/game/elements/gameBackground';
import GameField from '../components/game/elements/gameField';
import GameTokenField from '../components/game/elements/gameTokenField';
import GameDropWrapper from '../components/game/elements/gameDropWrapper';
import { useRouter } from 'next/router';
import GameRanking from '../components/game/gameRanking';
import { setGame } from '../store/game/gameActions';
import GameEnd from '../components/game/gameEnd';

function GameRC(props: { className?: string }): JSX.Element {
  const { className } = props;

  const router = useRouter();
  const { set, ranking } = useAppSelector((store) => store.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!ranking) {
      router.push('/');
    }
  }, [ranking, router]);

  const gameImageSet = useMemo(() => getRandomNumber(1, 3).toString(), []);

  const setWithImages = useMemo(
    () =>
      set.map((value) => {
        return { value, image: getRandomNumber(1, 3).toString() };
      }),
    [set]
  );

  const sortedSet = sortArray(setWithImages, ranking as BUTTON_TYPES);

  const [placedTokens, setPlacedTokens] = useState<string[]>([]);
  const [error, setError] = useState(false);

  function dropError() {}

  const onDrop = useCallback(
    (acceptedValue: string, item: { value: string }) => {
      if (acceptedValue !== item.value) {
        dropError();
      } else {
        setPlacedTokens(placedTokens.concat(item.value));
      }
    },
    [placedTokens]
  );

  const onRestart = useCallback(() => {
    dispatch(setGame([], ''));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={className}>
        <GameEnd show={placedTokens.length === sortedSet.length} onClick={onRestart} />
        <GameBackground gameSet={gameImageSet}>
          <GameField>
            <GameTokenField>
              {setWithImages.map((token) => {
                return (
                  <GameToken
                    key={token.value}
                    value={token.value}
                    background={token.image}
                    gameSet={gameImageSet}
                    visible={!placedTokens.includes(token.value)}
                    position='unset'
                  />
                );
              })}
            </GameTokenField>
            <GameRanking ranking={ranking as BUTTON_TYPES} />
            <GameDropWrapper gameSet={gameImageSet}>
              {sortedSet.map((token) => {
                return (
                  <GameDrop key={token.value} acceptedValue={token.value} onDrop={onDrop}>
                    <GameToken
                      value={token.value}
                      background={token.image}
                      gameSet={gameImageSet}
                      visible={placedTokens.includes(token.value)}
                      position='absolute'
                    />
                  </GameDrop>
                );
              })}
            </GameDropWrapper>
          </GameField>
        </GameBackground>
      </div>
    </DndProvider>
  );
}

const Game = styled(GameRC)``;

export default Game;
