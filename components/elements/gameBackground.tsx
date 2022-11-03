import styled from '@emotion/styled';
import { GameElementProps } from '../../common/interfaces';
import { GAME_BACKGROUND_COLORS } from '../../common/renderData';

const GameBackground = styled('div')<GameElementProps>`
  width: 100%;
  height: 100vh;
  background-image: url(./gamesets/${(props) => props.gameSet}/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GameBackground;
