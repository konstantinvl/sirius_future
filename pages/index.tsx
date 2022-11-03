import React, { useState } from 'react';
import styled from '@emotion/styled';
import SliderInput from '../components/sliderInput';
import { RENDER_DATA, BUTTON_TYPES } from '../common/renderData';
import StatusButton from '../components/statusButton';
import { GameSets } from '../common/gameSets';
import { useAppDispatch } from '../store/hooks';
import { setGame } from '../store/game/gameActions';
import { useRouter } from 'next/router';
import StartButton from '../components/startButton';

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
      <div className='index_wrapper-background'>
        <div className='index_wrapper'>
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
          <div className='index_ranking_wrapper'>
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
          </div>
          <StartButton label='Играть' onClick={startGame} />
        </div>
      </div>
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

  & > .index_wrapper-background {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    background: linear-gradient(198.7deg, #7f75f0 -40.43%, #101f32 95.81%);
    border-radius: 40px;
  }
  & .index_wrapper {
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .index_ranking_wrapper {
    margin-top: 72px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Index;
