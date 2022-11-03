import React, { useState } from 'react';
import styled from '@emotion/styled';
import SliderInput from '../components/index/sliderInput';
import { RENDER_DATA, BUTTON_TYPES } from '../common/renderData';
import StatusButton from '../components/index/statusButton';
import { GameSets } from '../common/gameSets';
import { useAppDispatch } from '../store/hooks';
import { setGame } from '../store/game/gameActions';
import { useRouter } from 'next/router';
import StartButton from '../components/startButton';
import IndexWrapperBackground from '../components/index/elements/indexWrapperBackground';
import IndexWrapper from '../components/index/elements/indexWrapper';
import IndexRankingWrapper from '../components/index/elements/indexRankingWrapper';

function IndexRC(props: { className?: string }) {
  const { className } = props;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [quantityValue, setQuantityValue] = useState(
    RENDER_DATA.quantitySlider.sliderData[0].value
  );
  const [setValue, setSetValue] = useState(RENDER_DATA.valueSlider.sliderData[0].value);
  const [rankingValue, setRankingValue] = useState<
    BUTTON_TYPES.ASCENDING | BUTTON_TYPES.DESCENDEING
  >(BUTTON_TYPES.ASCENDING);

  function startGame() {
    const set = GameSets[setValue](quantityValue);
    dispatch(setGame(set, rankingValue));
    router.push('game');
  }

  return (
    <div className={className}>
      <IndexWrapper>
        <IndexWrapperBackground>
          <SliderInput
            value={quantityValue}
            setValue={setQuantityValue}
            data={RENDER_DATA.quantitySlider}
            width='55%'
          />
          <SliderInput
            value={setValue}
            setValue={setSetValue}
            data={RENDER_DATA.valueSlider}
            width='80%'
          />
          <IndexRankingWrapper>
            <StatusButton
              type={BUTTON_TYPES.ASCENDING}
              value={rankingValue}
              onClick={() => setRankingValue(BUTTON_TYPES.ASCENDING)}
              label='По возрастанию'
            />
            <StatusButton
              type={BUTTON_TYPES.DESCENDEING}
              value={rankingValue}
              onClick={() => setRankingValue(BUTTON_TYPES.DESCENDEING)}
              label='По убыванию'
            />
          </IndexRankingWrapper>
          <StartButton label='Играть' onClick={startGame} />
        </IndexWrapperBackground>
      </IndexWrapper>
    </div>
  );
}

const Index = styled(IndexRC)`
  width: 100%;
  height: 100%;
  background: url(./backgrounds/index_back.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Index;
